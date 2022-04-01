/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import {Button, Text, View} from "react-native";

const Drawer = createDrawerNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title={"Drawer 열기"}
        onPress={() => navigation.openDrawer()}
      />
      <Button
        title={"Setting 열기"}
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  )
}

const SettingScreen = ({navigation}) => {
  return (
    <View>
      <Text>Settings</Text>
      <Button
        title={"뒤로가기"}
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}


const App = () => {
  return (

    <NavigationContainer>
      <Text>Hello</Text>
      {/*<Drawer.Navigator*/}
      {/*  initialRouteName={"Home"}*/}
      {/*  drawerPosition={"left"}*/}
      {/*  backBehavior={"history"}*/}
      {/*>*/}
      {/*  <Drawer.Screen*/}
      {/*    name={"Home"}*/}
      {/*    component={HomeScreen}*/}
      {/*  />*/}
      {/*  <Drawer.Screen*/}
      {/*    name={"Setting"}*/}
      {/*    component={SettingScreen}*/}
      {/*  />*/}
      {/*</Drawer.Navigator>*/}
    </NavigationContainer>
  )
};

export default App;
