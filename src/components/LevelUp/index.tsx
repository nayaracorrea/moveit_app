import React, { useContext } from 'react'
import { Image, Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native'

import Close from '../../assets/svg/close'
import LevelUpImage from '../../assets/svg/levelUp'
import { ChallengesContext } from '../../contexts/ChallengesContext'

import {
  Container,
  ModalFirstInternalContainer,
  ModalSecondInternalContainer,
  CloseButton,
  Header,
  FirstBody,
  FirstBodyInternal,
  SecondBody,
  Title,
  Congrats,
  Description
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

export const LevelUp = () => {
  const { level } = useContext(ChallengesContext)

  return (
    <Container>
      <Modal
        animationType='slide'
        transparent={true}
      >
        <ModalFirstInternalContainer>
          <ModalSecondInternalContainer style={styles.shadow}>
            <Header>
            <CloseButton>
              <Close width={50} height={50} />
            </CloseButton>
            </Header>
            <FirstBody>
              <FirstBodyInternal>
                <LevelUpImage height={250} width={250} />
                <Title>{level}</Title>
              </FirstBodyInternal>
            </FirstBody>
            <SecondBody>
                <Congrats>Parabéns</Congrats>
                <Description>Você alcançou um novo level.</Description>
            </SecondBody>
          </ModalSecondInternalContainer>
        </ModalFirstInternalContainer>
      </Modal>
    </Container>
  )
}