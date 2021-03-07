import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Raniking from '../screens/Ranking'
import { TouchableOpacity } from 'react-native'
import Header from '../shared/Header'

const Stack = createStackNavigator()

const RankingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Ranking' component={Raniking} options={ ({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title='Ranking' />
        }     
      }}/>
    </Stack.Navigator>
  )
}

export default RankingStack