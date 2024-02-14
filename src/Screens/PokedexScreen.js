import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon';

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([]);
    console.log('pokemons---->', pokemons)

    const loadPokemons = async () => {
        try {
            const response = await getPokemonsApi();

            const pokemosArray = [];
            for await (const pokemon of response.results) {
                const pokemonDetalis = await getPokemonDetailsByUrlApi(pokemon.url)

                pokemosArray.push({
                    id: pokemonDetalis.id,
                    name: pokemonDetalis.name,
                    type: pokemonDetalis.type[0].type.name,
                    order: pokemonDetalis.order,
                    imagen: pokemonDetalis.sprites.other['official-artwork'].front_default
                })
            }

            setPokemons([...pokemons, ...pokemosArray]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadPokemons();
    }, []);

    return (
        <SafeAreaView>
            <Text>Pokedex</Text>
        </SafeAreaView>
    );
};

export default Pokedex;
