import React from 'react'
import { Text, View, Button } from 'react-native'


const Home = ({ navigation }) => {

  const pressHandler = () => {
    navigation.navigate('Profile')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  )
}

export default Home