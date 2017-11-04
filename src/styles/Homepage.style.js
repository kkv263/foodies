import styled, { keyframes } from 'styled-components';
import background from '../assets/background.png';

export const Wrapper = styled.div `
width:100%;
height:100vh;
background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background});
postion:relative;
display:flex;
align-items: center;
justify-content: center;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export const Slogan = styled.h1` 
position:absolute;
top:22.5%;
font-family: 'Lato', sans-serif;
font-size: 3em;
text-shadow: 2px 2px 5px #000000;
color:white;
@media all and (max-width: 415px) {
    top:20%;
    font-size: 2em;
}
`

export const Subtitle = styled.h2`
position:absolute;
top:35%;
font-family: 'Lato', sans-serif;
font-size: 1em;
text-shadow: 2px 2px 5px #000000;
color:white;
`

export const SearchBar = styled.input `
height: 7vh;
display:block;
margin: 0 auto;
outline: none;
width:600px;
border-radius: 30px;
color: #464F51;
font-family: 'Lato', sans-serif;
font-size: 1.5em; 
padding-left: 20px;
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  opacity:0.5;
}
@media all and (max-width: 415px) {
		width:300px;
}

`

export const Button = styled.input`
display:block;
margin: 0 auto;
margin-top: 2%;

width:100px;
height:50px;
background-color:#B6D094;
color: #FFF;
font-size: 1.25em; 
font-family: 'Lato', sans-serif;
outline: none;
`

export const RestImage = styled.img `
height: 50vh;
width: 75%;
margin-top: 5%;
border-radius: 10%;
margin:left: 5%;
`

export const InfoRWrapper = styled.div `
width: 50%;
position:relative;
float:right;
height:60vh;
`

export const InfoLWrapper = styled.div `
width: 50%;
text-align:center;
float:left;
height:60vh;
`

export const Header = styled.h1`
color: #464F51;
font-family: 'Lato', sans-serif;
font-size: 2em; 
text-align:center;
@media all and (max-width: 415px) {
font-size: 1.25em; 
}
`

export const Header2 = styled.h1`
color: #464F51;
font-family: 'Lato', sans-serif;
font-size: 1em; 
text-align:center;
`

export const RestWrapper = styled.div`
position: relative;
height:60vh;
width:100%;
`

export const HLine = styled.hr`
width:75%;
`
export const Icon = styled.img`
width: 10%;
height: 10%;
position:absolute;
left:15%;
top: ${prop => prop.top}
`

export const IconText = styled.p`
position:absolute;
font-family: 'Roboto', sans-serif;
font-size: 1em;
left:30%;
top: ${prop => prop.top}
`