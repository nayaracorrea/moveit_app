import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import 'react-native-gesture-handler'
enableScreens()

import { enableScreens } from 'react-native-screens'

import Routes from './src/routes/index'

import { ChallengesProvider } from './src/contexts/ChallengesContext'

const App = () => {
 return (
   <ChallengesProvider>
      <NavigationContainer>
       <Routes />
      </NavigationContainer>
   </ChallengesProvider>

 )
}

export default App
