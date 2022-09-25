import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/component/login';
import AppNavigator from './src/routes/AppNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './src/constants/RootStackParamList';
import Home from './src/component/home';



const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '30',
    fontWeight: 'bold',
    marginBottom: '5%'
  },
  block: {
    width: '100',
    height: '50',
    backgroundColor: 'yellow',
    zindex: '100'
  }
});
