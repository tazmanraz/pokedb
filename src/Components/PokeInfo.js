import classes from '../App.module.css';
import { useState } from 'react';
import Axios from 'axios';

const PokeInfo = (props) => {
  return (
    <div className={classes['display-stats']}>
    {!props.found ? (<h1>Please choose a pokemon</h1>) : (
      <>
        <h1>{props.name}</h1>
        <img src={props.pokeImage} />
        <h3>Type: {props.type}</h3>
        <h3>HP: {props.hp}</h3>
        <h3>Attack: {props.attack}</h3>
        <h3>Defense: {props.defense}</h3>
        <h3>Special Attack: {props.specialAtt}</h3>
        <h3>Special Defense: {props.specialDef}</h3>
        <h3>Speed: {props.speed}</h3>
      </>
    )}
  </div>
  )
}

export default PokeInfo
