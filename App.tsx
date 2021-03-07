import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import 'react-native-gesture-handler'
enableScreens()

import { enableScreens } from 'react-native-screens'

import Routes from './src/routes/index'

import Navigator from './src/routes/MainNavigator'

const App = () => {
 return (
  <NavigationContainer>
   <Routes />
  </NavigationContainer>
 )
}

export default App
