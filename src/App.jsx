import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from "./views/ProfileScreen";
import HomeScreen from "./views/HomeScreen";
import DetailsScreen from "./views/DetailsScreen";
import SettingsScreen from "./views/SettingsScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Icon = createMaterialBottomTabNavigator();

export default props=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{headerShown:false}}>
                <Tab.Screen name ="First">
                    {() => (
                        <SettingsStack.Navigator>                            
                            <SettingsStack.Screen name="Settings" component={SettingsScreen}/>
                                <SettingsStack.Screen name="Profile" component={ProfileScreen} />
                        </SettingsStack.Navigator>
                    )}
                </Tab.Screen>
                
                <Tab.Screen name="Second">
                    {() => (
                    <HomeStack.Navigator>
                        <HomeStack.Screen name="Home" component={HomeScreen} options={{
                            
                        }} />
                        <HomeStack.Screen name="Details" component={DetailsScreen} />
                    </HomeStack.Navigator>
                    )}
                </Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
        
        
    )
}