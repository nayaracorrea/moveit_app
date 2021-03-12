import React from 'react'
import { StyleSheet } from 'react-native'

import LevelUp from '../../assets/svg/level_up'

import {
  Container,
  Body,
  Title,
  SubContainer,
  BoxImage,
  BoxText,
  SubTitle
} from './styles'

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    
    elevation: 10,
  }
})

export const ChallengeBox = () => {
  const hasActiveChallenge = true

 return (
  <Container>
    <Body style={styles.shadow}>
      <Title>
        Inicie um ciclo para receber desafios a serem completados
      </Title>
      <SubContainer>
        <BoxImage>
          <LevelUp width="70%" height="70%" />
        </BoxImage>
        <BoxText>
          <SubTitle>
            Complete-os, ganhe experiência e avance de level
          </SubTitle>
        </BoxText>
      </SubContainer>
    </Body>
  </Container>
 )
}