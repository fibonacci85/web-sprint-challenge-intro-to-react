import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character'
import styled from 'styled-components'
import './App.css';








const App = () => {

 const [characters, setCharacters] = useState([]);
 

 useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(response => {
    console.log(response.data.results);
    const starWarsAPI = response.data.results;

    setCharacters(starWarsAPI);
})
    .catch(error => {
      console.log(error,'error!!')
    });
 },[]);


  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>

    {characters.map(character => {
      return (
        <Character
        key = {character.index}
        name = {character.name}
        height = {character.height}
        mass = {character.mass}
        hairColor = {character.hair_color}
        skinColor = {character.skin_color}
        eyeColor = {character.eye_color}
        birthYear = {character.birth_year}
        gender = {character.gender}
        
        />
      )
    })}
    </div>
  );
}

export default App;
