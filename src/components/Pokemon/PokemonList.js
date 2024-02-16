import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import PokemonCard from './PokemonCard';


const PokemonList = (props) => {

    const { pokemons, loadPokemons } = props;
    console.log('pokemons --->', pokemons);

    const styles = StyleSheet.create({
        flatListContentContainer: {
            paddingHorizontal: 5,
        },
        spinner: {
            marginTop: 20,
            marginBottom: 60,
        }
    });


    const loadMore = () => {
        loadPokemons()
        console.log('Cargando los pokemons...')
    }


    return (
        < FlatList
            data={pokemons}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            keyExtractor={({ id }) => String(id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                <ActivityIndicator
                    size='large'
                    style={styles.spinner}
                    color='#AEAEAE'
                />
            }
        />
    )


}

export default PokemonList;