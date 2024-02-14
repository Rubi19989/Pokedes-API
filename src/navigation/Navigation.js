import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome5"
import { Image } from 'react-native';
import img from '../assets/pokeball.webp'
import Pokedex from '../Screens/PokedexScreen';
import Favorito from '../Screens/FavoritoScreen';
import Account from '../Screens/AccountScreen';
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';


const Tab = createBottomTabNavigator();

const Navigation = () => {

    const renderPokeball = () => {
        return (
            <Image
                source={img}
                style={{ width: 75, height: 75, top: -15 }}
            />
        )
    }
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen
                    name="Favorite"
                    component={FavoriteNavigation}
                    options={{
                        tabBarLabel: "Favoritos",
                        tabBarIcon: ({ color, size }) => <Icon name="heart" color={color} size={size} />,
                        headerTitle: "Favoritos",
                        headerTitleAlign: "center",
                    }}
                />
                <Tab.Screen
                    name="Pokedexx"
                    component={PokedexNavigation}
                    options={{
                        tabBarLabel: "",
                        tabBarIcon: () => renderPokeball(),
                        headerTitle: "Pokedex",
                        headerTitleAlign: "center",
                    }}
                />
                <Tab.Screen
                    name="Accounts"
                    component={AccountNavigation}
                    options={{
                        tabBarLabel: "Mi cuenta",
                        tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />,
                        headerTitle: "Mi cuenta",
                        headerTitleAlign: "center"
                    }}
                />
            </Tab.Navigator>
        </>
    );
}



export default Navigation;