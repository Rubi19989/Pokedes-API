import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Pokedex from '../Screens/PokedexScreen';
// import Pokemon from '../Screens/Pokemon';


const Stack = createStackNavigator();

const PokedexNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='Pokedex'
                component={Pokedex}
            />
            {/* <Stack.Screen name='Pokemon' component={Pokemon}  /> */}
        </Stack.Navigator>
    );
}

export default PokedexNavigation;