import React from 'react'
import styled from 'styled-components'



const Box = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-content:center;
align-items:left;
border:solid;
border-width:3px;
border-color:black;
width:90%;
margin-left:5%;
margin-top:5%;
&:hover{
    background-color:purple;
    color:greenyellow;
}
`

const NameBox = styled.div`
background-color:black;
font-family:'Calibri';
font-size:30px;
color:yellow;
width:35%;
&:hover{
    background-color:purple;
    color:greenyellow;
}
`

const Stats = styled.div`
background-color: cornsilk;
display:flex;
flex-direction:row;
&:hover{
    background-color:purple;
    color:greenyellow;
}

`

const Character = (props) => {

    const {characters} = props;
    console.log(characters)

return (

<Box className = 'characterDiv'>
    <NameBox className = 'top'>
        <h2>{props.name}</h2>
    </NameBox>

    <Stats>
        <p><b>Height:</b> {props.height} </p>
        <p><b>Mass:</b> {props.mass} </p>
        <p><b>Hair Color:</b> {props.hairColor} </p>
        <p><b>Skin Color: </b>{props.skinColor} </p>
        <p><b>Eye Color: </b>{props.eyeColor} </p>
        <p><b>Birth Year:</b> {props.birthYear} </p>
        <p><b>Gender:</b> {props.gender} </p>
    </Stats>


</Box>
)

}

export default Character;