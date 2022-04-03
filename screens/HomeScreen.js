import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';

const OpenDetailButton = () => {
  const navigation = useNavigation();
  return (
    <Button
      title={'이동'}
      onPress={() =>
        navigation.dispatch(StackActions.push('Detail', {id: 1}))
      }></Button>
  );
};

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
      <OpenDetailButton />
    </View>
  );
};

export default HomeScreen;
