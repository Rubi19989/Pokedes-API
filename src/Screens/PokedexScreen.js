import React, { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/Pokemon/PokemonList';

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setNextUrl] = useState(null)
    console.log('pokemons --->', pokemons);

    const loadPokemons = async () => {
        try {
            const response = await getPokemonsApi(nextUrl);
            setNextUrl(response.next)
            const pokemonPromises = response.results.map(pokemon => getPokemonDetailsByUrlApi(pokemon.url));
            const pokemonDetails = await Promise.all(pokemonPromises);
            const formattedPokemons = pokemonDetails.map(pokemon => ({
                id: pokemon.id,
                name: pokemon.name,
                type: pokemon.types[0].type.name,
                order: pokemon.order,
                image: pokemon.sprites.other['official-artwork'].front_default,
            }));
            setPokemons(formattedPokemons);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadPokemons();
    }, []);

    return (
        <SafeAreaView>
            <PokemonList pokemons={pokemons} loadPokemons={loadPokemons}/>
        </SafeAreaView>
    );
};

export default Pokedex;
