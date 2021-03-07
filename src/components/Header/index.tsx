import React from 'react'
import { View } from 'react-native'
import { Container, Title, Icon } from './styles'

interface HeaderProps {
 title: string
 onPress(): void
}

const Header = ({ title, onPress }: HeaderProps) => {
 return (
  <Container>
   <Icon size={25} name="menu" onPress={onPress} />
   <View>
    <Title>{title}</Title>
   </View>
  </Container>
 )
}

export default Header
