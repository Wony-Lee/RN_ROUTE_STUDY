import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import {Button, Text, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {SafeAreaContext} from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();


const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title={"Detail 1 열기"}
        onPress={() => navigation.push('Detail', { id : 1})}
      />
    </View>
  )
}

const SearchScreen = () => {
  return <Text>Search</Text>
}

const NotificationScreen = () => {
  return <Text>Notification</Text>
}

const MessageScreen = () => {
  return <Text>Message</Text>
}

const MainScreen = () => {
  return (

    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{

        tabBarIndicatorStyle: {
          backgroundColor: '#009688'
        },
        tabBarActiveTintColor:'#009688'
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          title:'홈',
          tabBarIcon:({color}) => (
            <Icon name={"home"} color={color} size={24}/>
          ),
        }}
      />
      <Tab.Screen
        name={"Search"}
        component={SearchScreen}
        options={{
          title:'검색',
          tabBarIcon:({color}) => (
            <Icon name={"search"} color={color} size={24}/>
          ),
        }}
      />
      <Tab.Screen
        name={"Notification"}
        component={NotificationScreen}
        options={{
          title:'알림',
          tabBarIcon:({color}) => (
            <Icon name={"notification"} color={color} size={24}/>
          ),
        }}
      />
      <Tab.Screen
        name={"Message"}
        component={MessageScreen}
        options={{
          title:'메세지',
          tabBarIcon:({color}) => (
            <Icon name={"message"} color={color} size={24}/>
          ),
        }}
      />
    </Tab.Navigator>

  )
};

export default MainScreen;
