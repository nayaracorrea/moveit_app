import React, { useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import LevelUp from '../../assets/svg/level_up'
import BodyIcon from '../../assets/svg/body'
import EyeIcon from '../../assets/svg/eye'

import {
  Container,
  Body,
  Title,
  SubContainer,
  BoxImage,
  BoxText,
  SubTitle,
  ContainerXP,
  XP,
  LineContainer,
  Line,
  BodyChallenge,
  DescriptionChallenge,
  ButtonContainer,
  FailedButton,
  SuccededButton,
  TitleButton
} from './styles'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import { CountdownContext } from '../../contexts/CountdownContext'

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
  const { activeChallenge, resetChallenged, completeChallenge } = useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountdown()
  }

  function handleChallengedFailed() {
    resetChallenged()
    resetCountdown()
  }


 return (
  <Container>
    { activeChallenge.amount > 0 ? (
      <Body style={styles.shadow}>
        <ContainerXP>
          <XP> Ganhe {activeChallenge.amount} XP </XP>
          <LineContainer>
            <Line />
          </LineContainer>
          
        </ContainerXP>
        <BodyChallenge>
            { activeChallenge.type == 'body' ? (
              <BodyIcon width={130} height={130} />
            ) : (
              <EyeIcon width={130} height={130} />
            )}
            <DescriptionChallenge>{activeChallenge.description}</DescriptionChallenge>
            <ButtonContainer>
              <FailedButton onPress={handleChallengedFailed}>
                <TitleButton>Falhei</TitleButton>
              </FailedButton>
              <SuccededButton onPress={handleChallengeSucceeded}>
                <TitleButton>Completei</TitleButton>
              </SuccededButton>
            </ButtonContainer>
          </BodyChallenge>
      </Body>
    ) : (
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
    )}

  </Container>
 )
}