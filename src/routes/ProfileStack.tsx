import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import { TouchableOpacity } from 'react-native'
import Header from '../shared/Header'

const Stack = createStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={Profile} options={ ({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title='Perfil' />
        }     
      }}/>
    </Stack.Navigator>
  )
}

export default ProfileStack