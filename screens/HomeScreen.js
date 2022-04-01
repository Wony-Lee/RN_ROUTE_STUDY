import React, {useEffect} from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({title: '홈'})
  },[navigation])
  return (
    <View>
      <Button
        title={"Detail 1 열기"}
        onPress={() => navigation.push('Detail', { id: 1 })}
      />
      <Button
        title={"Detail 2 열기"}
        onPress={() => navigation.push('Detail', { id: 2 })}
      />
      <Button
        title={"Detail 3 열기"}
        onPress={() => navigation.push('Detail', { id: 3 })}
      />
      <Button
        title={"HeaderLess"}
        onPress={() => navigation.push('HeaderLess')}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
