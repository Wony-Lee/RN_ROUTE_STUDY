import React, {useCallback, useEffect} from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Button, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const OpenDetailButton = () => {
  const navigation = useNavigation();
  return (
    <Button title={'이동'} onPress={() => navigation.push('Detail', {id: 1})} />
  );
};

const HomeScreen = () => {
  useFocusEffect(
    useCallback(() => {
      console.log('메인 화면');
      return () => {
        console.log('다른 화면');
      };
    }, []),
  );

  return (
    <View>
      <Text>Home</Text>
      <OpenDetailButton />
    </View>
  );
};

const Tab = createMaterialBottomTabNavigator();
const SearchScreen = () => {
  return <Text>Search</Text>;
};

const NotificationScreen = () => {
  return <Text>Notification</Text>;
};

const MessageScreen = () => {
  return <Text>Message</Text>;
};

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showIcon: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color}) => (
            <Icon name={'home'} color={color} size={24} />
          ),
          tabBarColor: 'black',
          tabBarBadge: 'new',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({color}) => (
            <Icon name={'search'} color={color} size={24} />
          ),
          tabBarColor: 'gray',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: '알림',
          tabBarIcon: ({color}) => (
            <Icon name={'notifications'} color={color} size={24} />
          ),
          tabBarColor: 'green',
          tabBarBadge: 30,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: '메세지',
          tabBarIcon: ({color}) => (
            <Icon name="message" color={color} size={24} />
          ),
          tabBarColor: 'blue',
          tabBarBadge: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
