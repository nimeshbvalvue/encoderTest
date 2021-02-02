import React, { Component } from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Root/Screens/LoginScreen'
import ReportScreen from './Root/Screens/ReportScreen'
const Stack = createStackNavigator();

class Containers extends Component{
    render() {
       return(
         <View style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="LoginScreen"
                        component={LoginScreen} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="ReportScreen"
                        component={ReportScreen} />
                </Stack.Navigator>
            </NavigationContainer>
         </View>
       );
    }
}

export  default Containers;
