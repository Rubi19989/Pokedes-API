import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function PokemonCard(props) {
    const { pokemon } = props;

    const styles = StyleSheet.create({
        card: {
            flex: 1,
            height: 130,
        },
        content: {
            flex: 1,
            padding: 5,
        },
        bgStyles: {
            flex: 1,
            borderRadius: 15,
            padding: 10,
        },
        number: {
            position: "absolute",
            right: 10,
            top: 10,
            color: "#fff",
            fontSize: 11,
        },
        name: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 15,
            paddingTop: 10,
        },
        image: {
            position: "absolute",
            bottom: 2,
            right: 2,
            width: 90,
            height: 90,
        },
    });

    const pokemonColor = getColorByPokemonType(pokemon.type);
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

    const goToPokemon = () => {
        console.log(`Vamos al pokemon: ${pokemon.name}`);
        console.log(pokemon);
    };

    return (
        <Pressable onPress={goToPokemon} style={styles.card}>
            {({ pressed }) => (
                <View style={[styles.content, pressed && { opacity: 0.5 }]}>
                    <View style={bgStyles}>
                        <Text style={styles.number}>
                            #{`${pokemon.order}`.padStart(3, 0)}
                        </Text>
                        <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                        <Image source={{ uri: pokemon.image }} style={styles.image} />
                    </View>
                </View>
            )}
        </Pressable>
    );
}
