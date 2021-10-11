import classes from './App.module.css';
import { useState } from 'react';
import Axios from 'axios';
import Header from './Components/Header';
import PokeInfo from './Components/PokeInfo';


function App() {
  const [name, setName] = useState("");
  const [found, setFound] = useState(false)
  const [pokemon, setPokemon] = useState({
    name: "", species: "", img: "", hp: "", attack: "", defense: "", type: "", specialAtt: "", specialDef: "", speed: "",
  })

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
      console.log(response)
      setPokemon({
        name: name,
        species: response.data.species.name,
        img: response.data.sprites.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        specialAtt: response.data.stats[3].base_stat, 
        specialDef: response.data.stats[4].base_stat,
        speed: response.data.stats[5].base_stat,
        type: response.data.types[0].type.name,
      });
      setFound(true);
    })
  }
  return (
    <div className={classes['full-page']}>
      {/* <div className={classes.title}>
        <h2>Welcome to pokeDB</h2>
        <input type="text" onChange={e => setName(e.target.value)} />
        <button onClick={searchPokemon}>Search</button>
      </div> */}

      <Header nameUpdate={e => setName(e.target.value)} queryPokemon={searchPokemon}/>

      {/* <div className={classes['display-stats']}>
        {!found ? (<h1>Please choose a pokemon</h1>) : (
          <>
            <h1>{name}</h1>
            <img src={pokemon.img} />
            <h3>Type: {pokemon.type}</h3>
            <h3>HP: {pokemon.hp}</h3>
            <h3>Attack: {pokemon.attack}</h3>
            <h3>Defense: {pokemon.attack}</h3>
            <h3>Special Attack: {pokemon.specialAtt}</h3>
            <h3>Special Defense: {pokemon.specialDef}</h3>
            <h3>Speed: {pokemon.speed}</h3>
          </>
        )}
      </div> */}

      <PokeInfo
        found={found} 
        name={name}
        pokeImage={pokemon.img}
        type={pokemon.hp}
        attack={pokemon.attack}
        defense={pokemon.attack}
        specialAtt={pokemon.specialAtt}
        specialDef={pokemon.specialDef}
        speed={pokemon.speed}
      />
    </div>
  );
}

export default App;


///////////


// function App() {
//   const [name, setName] = useState("");
//   const [found, setFound] = useState(false)
//   const [pokemon, setPokemon] = useState({
//     name: "", species: "", img: "", hp: "", attack: "", defense: "", type: "", specialAtt: "", specialDef: "", speed: "",
//   })

//   const searchPokemon = () => {
//     Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
//       console.log(response)
//       setPokemon({
//         name: name,
//         species: response.data.species.name,
//         img: response.data.sprites.front_default,
//         hp: response.data.stats[0].base_stat,
//         attack: response.data.stats[1].base_stat,
//         defense: response.data.stats[2].base_stat,
//         specialAtt: response.data.stats[3].base_stat, 
//         specialDef: response.data.stats[4].base_stat,
//         speed: response.data.stats[5].base_stat,
//         type: response.data.types[0].type.name,
//       });
//       setFound(true);
//     })
//   }
//   return (
//     <div className={classes['full-page']}>
//       <div className={classes.title}>
//         <h2>Welcome to pokeDB</h2>
//         <input type="text" onChange={e => setName(e.target.value)} />
//         <button onClick={searchPokemon}>Search</button>
//       </div>
//       <div className={classes['display-stats']}>
//         {!found ? (<h1>Please choose a pokemon</h1>) : (
//           <>
//             <h1>{name}</h1>
//             <img src={pokemon.img} />
//             <h3>Type: {pokemon.type}</h3>
//             <h3>HP: {pokemon.hp}</h3>
//             <h3>Attack: {pokemon.attack}</h3>
//             <h3>Defense: {pokemon.defense}</h3>
//             <h3>Special Attack: {pokemon.specialAtt}</h3>
//             <h3>Special Defense: {pokemon.specialDef}</h3>
//             <h3>Speed: {pokemon.speed}</h3>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

