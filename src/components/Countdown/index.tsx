import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

import PlayArrow from '../../assets/svg/play_arrow'
import Abandon from '../../assets/svg/abandon'
import CheckCircle from '../../assets/svg/check-circle'

import {
  Container,
  Body,
  BoxCount,
  Time,
  SeparatorContainer,
  Separator,
  ButtonStart,
  ButtonAbandon,
  ButtonFinished,
  TitleButton,
  TitleButtonFinished
} from './styles'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import { CountdownContext } from '../../contexts/CountdownContext'

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
     width: 0,
     height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
 
    elevation: 7
  }
})



export const Countdown = () => {
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown 
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <Container>
      <Body>
        <BoxCount style={styles.shadow}>
          <Time>{minuteLeft}</Time>
        </BoxCount>
        <BoxCount style={styles.shadow}>
          <Time>{minuteRight}</Time>
        </BoxCount>
        <SeparatorContainer>
          <Separator>:</Separator>
        </SeparatorContainer>
        <BoxCount style={styles.shadow}>
          <Time>{secondLeft}</Time>
        </BoxCount>
        <BoxCount style={styles.shadow}>
          <Time>{secondRight}</Time>
        </BoxCount>
      </Body>

      { hasFinished ? (
          <ButtonFinished onPress={startCountdown} disabled>
            <TitleButtonFinished>Ciclo encerrado</TitleButtonFinished>
            <CheckCircle width={25} height={25} />
          </ButtonFinished>
      ) : (
        <>
          { isActive ? (
            <ButtonAbandon onPress={resetCountdown}>
              <TitleButton>Abandonar ciclo</TitleButton>
              <Abandon width={30} height={30} />
            </ButtonAbandon>
          ) : (
            <ButtonStart onPress={startCountdown}>
              <TitleButton>Iniciar um ciclo</TitleButton>
              <PlayArrow width={30} height={30} />
            </ButtonStart>
          )}
        </>
      )}






    </Container>
  )
}