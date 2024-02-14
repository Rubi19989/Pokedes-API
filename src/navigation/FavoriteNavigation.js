import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Favorito from '../Screens/FavoritoScreen';


const Stack = createStackNavigator();

const FavoriteNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='Favorito'
                component={Favorito}    
            />
        </Stack.Navigator>
    );
}

export default FavoriteNavigation;