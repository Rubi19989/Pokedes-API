import React from 'react';
import { Text, View, Image, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import getColorByPokemonType from '../../utils/getColorByPokemonType';


const PokemonCard = (props) => {

    const { pokemon } = props

    const bgStyles = { backgroundColor:  '#f0f'  }

    const goToPokemon = () => {
        console.log(`Vamos al pokemon: ${pokemon.name}`)
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 80,
        },
        card: {
            flex: 1,
            height: 130
        },
        spacing: {
            flex: 1,
            padding: 5
        },
        bgCard: {
            backgroundColor: "grey"
        },
        image: {
            position: "absolute",
            bottom: 2,
            right: 2,
            width: 90,
            height: 90
        },
        name: {
            color: "#fff",
            paddingTop: 10,
            fontSize: 15,
            fontWeight: "bold",
        },
        number: {
            position: "absolute",
            top: 10,
            right: 10,
            fontSize: 11,
            color: "#fff"
        }
    });

    return (
        <View style={styles.container}>
            <Pressable onPress={goToPokemon}>
                <SafeAreaView style={styles.card}>
                    <SafeAreaView style={styles.spacing}>
                        <SafeAreaView style={styles.bgCard}>
                            <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                            <Text style={styles.name}>{pokemon.name}</Text>
                            <Image source={{ uri: pokemon.image }} style={styles.image} />
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
            </Pressable>
        </View>
    );


}

export default PokemonCard;