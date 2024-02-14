import React from 'react';
import { Text, FlatList, StyleSheet, View } from 'react-native';
import PokemonCard from './PokemonCard';


const PokemonList = (props) => {

    const { pokemons } = props;
    console.log('pokemons --->', pokemons);

    const styles = StyleSheet.create({
        flatListContentContainer: {
            paddingHorizontal: 5,
        },
    });



    return (
        < FlatList
            data={pokemons}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            keyExtractor={({ id }) => String(id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} /> }
            contentContainerStyle={styles.flatListContentContainer}
        />
    )


}

export default PokemonList;