import React from 'react'
import { View, Text } from 'react-native'
import { Tooltip } from 'react-native-elements'

import {
 Container,
 InitialValueExpBar,
 FinalValueExpBar,
 LineExternalContainer,
 LineInternalContainer,
 CurrentExperience
} from './styles'

const ExperienceBar = () => {
 return (
  <Container>
   <InitialValueExpBar>0</InitialValueExpBar>
   <LineExternalContainer>
    <Tooltip
     popover={<CurrentExperience>Seu XP: 30xp</CurrentExperience>}
     toggleOnPress={true}
     skipAndroidStatusBar={true}
     backgroundColor="#3ea026"
     withPointer={true}
    >
     <LineInternalContainer />
    </Tooltip>
   </LineExternalContainer>
   <FinalValueExpBar>100xp</FinalValueExpBar>
  </Container>
 )
}

export default ExperienceBar
