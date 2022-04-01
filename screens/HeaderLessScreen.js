import React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";

const HeaderLessScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Header가 없네</Text>
        <Button onPress={() => navigation.pop()} title={"뒤로가기"} />
      </View>
    </SafeAreaView>
  )
}

export default HeaderLessScreen

const styles = StyleSheet.create({})
