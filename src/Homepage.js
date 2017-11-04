import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, SearchBar, Slogan, Subtitle, Button, 
  RestImage, RestWrapper, Header, Header2, InfoLWrapper,
  InfoRWrapper, HLine, Icon, IconText } from './styles/Homepage.style';
import axios from 'axios';


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      name:'',
      address:'',
      img: '',
      delivery: '',
      cuisines: '',
      rating: '',
      show: false

  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var searchQuery = encodeURIComponent(this.state.value);

    axios({
      method:'get',
      url:'https://developers.zomato.com/api/v2.1/locations?query=' + searchQuery,
      headers: {
        'user-key': '5a42269e467c153cccf0a9e316fb1c88'
      }
      
      }).then(datas => {
      var lat = datas.data['location_suggestions'][0]['latitude'];
      var long = datas.data['location_suggestions'][0]['longitude'];

      axios({
        method:'get',
        url:'https://developers.zomato.com/api/v2.1/geocode?lat='+ lat + '&lon=' + long,
        headers: {
          'user-key': '5a42269e467c153cccf0a9e316fb1c88'
        }
        
        }).then(datas => {
          // Data for nearby restuarants
           var restaurantArray = datas.data['nearby_restaurants']
           var item = restaurantArray[Math.floor(Math.random()*restaurantArray.length)];

           var delivery = item['restaurant']['has_online_delivery']
           var deliveryAnswer = ""

           if (delivery === 0){
              deliveryAnswer = "Not Available"
           }
          else {
              deliveryAnswer = "Available"
          }

            this.setState({
              name: item['restaurant']['name'],
              address: item['restaurant']['location']['address'],
              img: item['restaurant']['featured_image'],
              delivery: deliveryAnswer,
              cuisines: item['restaurant']['cuisines'],
              rating: item['restaurant']['user_rating']['aggregate_rating'],
              show: true
            });

        })
      })
    }
    

  render() {

    var name = this.state.name.toUpperCase();
    var address = this.state.address;
    var img = this.state.img;
    var delivery = this.state.delivery;
    var cuisines = this.state.cuisines;
    var rating = this.state.rating;


    var show = this.state.show;
    var results = ""

    if (show) {
      results = (<RestWrapper ref="test">
        <InfoLWrapper>
         <RestImage src={img}/>
        </InfoLWrapper>
        <InfoRWrapper>
        <Header>{name}</Header>
        <Header2>{address}</Header2> 
        <HLine></HLine>
        <Icon top= "40%"src={require('./assets/dish-of-spaghetti.svg')}></Icon>
        <IconText top="40%">{cuisines}</IconText>
        <Icon top= "60%"src={require('./assets/star.svg')}></Icon>
        <IconText top="60%">{rating}</IconText>
        <Icon top= "80%"src={require('./assets/sports-car.svg')}></Icon>
        <IconText top="80%">{delivery}</IconText>
        </InfoRWrapper>
      </RestWrapper>);
            
    }
    return (
       <div>
        <Wrapper>
        <Slogan>Can't decide what to eat? </Slogan>
         <Subtitle>Search restuarants near you, and let foodies choose</Subtitle>
         <form onSubmit={this.handleSubmit}>
          <label>
            <SearchBar type="text" value={this.state.value} onChange={this.handleChange} placeholder = "Try Houston" />
          </label>
          <Button type="submit" value="Search" />
        </form>
       </Wrapper>      
       {results}

     </div>
      
    );
  }
}

export default Homepage;