import React from 'react';
import { Text, View, Image, Pressable, StyleSheet } from 'react-native';


const PokemonCard = (props) => {

    const { pokemon } = props

    const goToPokemos = () => {
        console.log(`Vamos al pokemon: ${pokemon.name}`)
    }
    const styles = StyleSheet.create({
        card: {
            flex: 1,
            backgroundColor: "#a4d1b3",
            margin: 8,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
            padding: 10,
            minWidth: 100, 
        },
        image: {
            width: '40%',
            aspectRatio: 1, 
            borderRadius: 50, 
        },
        text: {
            textAlign: 'center', 
            marginTop: 5, 
        }
    });

    return (
        <Pressable onPress={goToPokemos}>
            <View style={styles.card} >
                <Text>{pokemon.name}</Text>
                <Image source={{ uri: pokemon.image }} style={styles.image} />
            </View>
        </Pressable>
    );


}

export default PokemonCard;