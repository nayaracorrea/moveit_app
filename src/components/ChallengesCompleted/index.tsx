import React from 'react'

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
          <SubTitle>100</SubTitle>
        </BoxRight>
      </Body>
    </Container>
  )
}
