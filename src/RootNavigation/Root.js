import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from '../RootNavigation/BottomTabs';
import Slider from '../Account/Slider';
import Login from '../Account/Login';
// import Home from '../Home/Home'
import Otp from '../Account/Otp';
 
 
const Stack = createStackNavigator();
 
 
export default class RouteNavigation extends React.Component {
  state = { skip: undefined, comp: '' };
 
  render() {
    return (
        <>
        <NavigationContainer>
         <Stack.Navigator
            initialRouteName='Slider'
            screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Slider" component={Slider} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />

               {/* <Stack.Screen name="BottomTabs" component={BottomTabs} /> */}
            {/* <Stack.Screen name="Home" component={Home} /> */}
            
          </Stack.Navigator> 

        </NavigationContainer>
      </>
     
    );
  }
}
