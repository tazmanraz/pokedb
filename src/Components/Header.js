import React from 'react'
import classes from '../App.module.css';
import { useState } from 'react';

const Header = (props) => {

  //const [name, setName] = useState("");

  return (
    <div className={classes.title}>
      <h2>Welcome to pokeDB</h2>
      <input type="text" onChange={props.nameUpdate} />
      <button onClick={props.queryPokemon}>Search</button>
    </div>
  )
}

export default Header
