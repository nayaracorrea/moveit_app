import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import CheckCircle from '../../assets/svg/check-circle'
import PlayArrow from '../../assets/svg/play_arrow'

import {
 Container,
 SecondContainer,
 FirstTime,
 SeparationTime,
 SecondTime,
 ButtonContainer,
 Button,
 ButtonText
} from './styles'

const Countdown = () => {
 return (
  <View style={{ flex: 1 }}>
   <View
    style={{
     height: '25%',
     backgroundColor: '#000',
     justifyContent: 'center',
     alignItems: 'center'
    }}
   >
    <View
     style={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
     }}
    >
     <Text style={{ color: '#fff' }}>
      Finalize um ciclo para receber um novo desafio
     </Text>
    </View>
   </View>

   <View
    style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}
   >
    <Container>
     <SecondContainer>
      <FirstTime>1</FirstTime>
      <SecondTime>2</SecondTime>
     </SecondContainer>
     <SeparationTime>:</SeparationTime>
     <SecondContainer>
      <FirstTime>1</FirstTime>
      <SecondTime>2</SecondTime>
     </SecondContainer>
    </Container>

    <ButtonContainer>
     <Button>
      <ButtonText>Iniciar novo ciclo</ButtonText>
      <PlayArrow width="40%" height="40%" />
     </Button>
    </ButtonContainer>
   </View>

   <View style={{ height: '25%', backgroundColor: '#000' }}></View>
  </View>
 )
}

export default Countdown
