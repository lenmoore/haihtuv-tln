import {StatusBar} from 'expo-status-bar';
import {View, Text, Button, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
// https://www.atomlab.dev/tutorials/email-authentication-react-native-firebase auth tutorial
import {onAuthStateChanged, createUserWithEmailAndPassword} from 'firebase/auth';
import {signOut} from 'firebase/auth';

import {auth} from './firebase';
import LoginScreen from "./screens/auth/LoginScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";
import UserProfile from "./screens/auth/UserProfile";

// TODO NEXT UP:::: https://www.youtube.com/watch?v=drF8HbnW87w
// const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function SplashScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Getting token...</Text>
            todo: animation

        </View>
    );
}


export default function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    });

    console.log(auth);

    return <View style={{flex: 1}}>
        <NavigationContainer>
            {loggedIn === false ? (

                    <Tab.Navigator>
                        <Tab.Screen name="Login" component={LoginScreen} />
                        <Tab.Screen name="Signup" component={SignUpScreen} />
                    </Tab.Navigator>
            ) : (
                <Tab.Navigator>
                    <Tab.Screen name="UserProfile" component={UserProfile}/>
                </Tab.Navigator>
            )}

        </NavigationContainer>


    </View>;
}
const styles = StyleSheet.create({
    outer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner: {
        width: 240,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
    },
    error: {
        marginBottom: 20,
        color: 'red',
    }, link: {
        color: 'blue',
        marginBottom: 20,
    },
});
