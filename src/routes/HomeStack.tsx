import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'

import Header from '../shared/Header'

const Stack = createStackNavigator()

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={ ({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title='Início' />
        }     
      }}/>
    </Stack.Navigator>
  )
}

export default MainStackNavigator