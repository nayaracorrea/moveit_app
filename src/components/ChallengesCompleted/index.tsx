import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators'
import React, { useContext, useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
// import { Tooltip, Text, Button } from 'react-native-elements'
import Tooltip from 'rn-tooltip'

import ExperienceBar from '../../components/ExperienceBar'
import { ChallengesContext } from '../../contexts/ChallengesContext'

import {
  Container,
  Body,
  BoxLeft,
  Title,
  SubTitle,
  SeparatorContainer,
  Separator,
  BoxRight
} from './styles'


export const ChallengesCompleted = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const { currentExperience } = useContext(ChallengesContext)
  return (
    <Container>
      <Body>
        <BoxLeft>
          <Title>Desafios Completos</Title>
          <SubTitle>00</SubTitle>
        </BoxLeft>
        <SeparatorContainer>
          <Separator />
        </SeparatorContainer>
        <BoxRight>
          <Title>Seu XP</Title>
          <View style={{ flexDirection: 'row'}}>
          <Tooltip 
            popover={<ExperienceBar />}
            height={50}
            width={300}
          >
          <SubTitle>{currentExperience} <Text>ⓘ</Text></SubTitle>
          </Tooltip>
          
          </View>

        </BoxRight>
      </Body>
    </Container>
  )
}
