import React, { useEffect, useState } from 'react'
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

let countdownTimeout: NodeJS.Timeout;

export const Countdown = () => {
  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time == 0) {
      setHasFinished(true)
      setIsActive(false)
    }
  }, [isActive, time])

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