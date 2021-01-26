import React, { useState } from 'react';
import Title from '../components/Title';
import Search from '../components/Search';
import { fetchPokemon } from '../API/getPokemon';
import PokemonData from '..//components/PokemonData';
import { Spinner, Alert } from 'react-bootstrap';
import './Home.css';


const Home = () => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const getPokemon = async (query) => {
    if(!query) {
      setErrorMsg('Please Enter A Pokemon Name')
      setError(true);
      return;
    } 

    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query);
        const results = await response.json();
        setPokemon(results);
        setLoading(false);
      } catch (err) {
        console.log(`${err}: Invalid Pokemon Name`);
        setLoading(false);
        setError(true);
        setErrorMsg('Pokemon Not Found');
        
      }
    }, 1000);
  }

  return (
    <div>
      <Title />
      {error ? (
        <Alert variant='danger'>
          {errorMsg}
        </Alert>
      ): null}
      <Search getPokemon={getPokemon}/>
      {loading ? (
        <div className="spinnerWrapperStyle">
          <Spinner className="spinnerStyle" animation="border" />
        </div>
      ) : null}
      {!loading && pokemon ? (
        <PokemonData pokeData={pokemon} />
      ): null}
    </div>
  )
}



export default Home