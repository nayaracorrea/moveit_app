import { DrawerNavigationProp } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View, Button } from 'react-native'

import { RootDrawerParamList } from '../../routes/index'

import Header from '../../components/Header'
import ExperienceBar from '../../components/ExperienceBar'
import Countdown from '../../components/Countdown'
import ChallengeBox from '../../components/ChallengeBox'

const Home = () => {
 const navigation = useNavigation() as DrawerNavigationProp<
  RootDrawerParamList,
  'Home'
 >

 return (
  <View style={{ flex: 1 }}>
   <Header title="Home" onPress={() => navigation.openDrawer()} />

   <View style={{ padding: 20 }}>
    <ExperienceBar />

    <View
     style={{
      backgroundColor: '#c5c5c5',
      borderRadius: 15,
      marginTop: 25,
      height: '88%'
     }}
    >
     {/* <ChallengeBox /> */}
     <Countdown />
    </View>
   </View>
  </View>
 )
}

export default Home
