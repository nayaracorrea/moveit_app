import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Nav from './DrawerNavigation'

const Stack = createStackNavigator()

const Teste = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Nav' component={Nav} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Teste