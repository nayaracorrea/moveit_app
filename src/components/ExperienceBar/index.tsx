import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Divider } from 'react-native-elements'
import { ChallengesContext } from '../../contexts/ChallengesContext'

import {
 Container,
 InitialValueExpBar,
 FinalValueExpBar,
 LineExternalContainer,
 LineInternalContainer
} from './styles'


const ExperienceBar = () => {
  const { experienceToNextLevel, currentExperience } = useContext(ChallengesContext)

 return (
  <Container>
    <InitialValueExpBar>0</InitialValueExpBar>
    <LineExternalContainer>
      <LineInternalContainer style={{ width: currentExperience }} />
    </LineExternalContainer>
    <FinalValueExpBar>{experienceToNextLevel}</FinalValueExpBar>
  </Container>
 )
}

export default ExperienceBar
