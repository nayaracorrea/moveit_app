import { DrawerNavigationProp } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { RootDrawerParamList } from '../../routes/index'

import { Header } from '../../components/Header'
import { ChallengesCompleted } from '../../components/ChallengesCompleted'
import { Countdown } from '../../components/Countdown'
import { ChallengeBox } from '../../components/ChallengeBox'


import {
  Container,
  Body
} from './styles'
import { CountdownProvider } from '../../contexts/CountdownContext'


const Home = () => {
 const navigation = useNavigation() as DrawerNavigationProp<
  RootDrawerParamList,
  'Home'
 >

 return (
  <Container>
    <Header title="Home" onPress={() => navigation.openDrawer()} /> 
    
    <CountdownProvider>
      <Body>
       <ChallengesCompleted />
       <Countdown />
       <ChallengeBox /> 
      </Body>
    </CountdownProvider>

  </Container>
 )
}

export default Home
