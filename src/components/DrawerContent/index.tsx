import React, { useContext } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import MenuItem from '../MenuItem'
import {
 Container,
 NameUser,
 LevelUser,
 Body,
 Footer,
 Logo,
 HeaderBody,
 ImageUser,
 LevelContainer,
 LevelIconContainer
} from './styles'

import Level from '../../assets/svg/level'
import { ChallengesContext } from '../../contexts/ChallengesContext'

const DrawerContent = (
 props: DrawerContentComponentProps
): React.ReactElement => {
 const menuItems = [
  {
   label: 'Principal',
   route: 'Home',
   icon: 'home'
  },
  {
   label: 'Perfil',
   route: 'Profile',
   icon: 'account-circle'
  }
 ]

  const { level } = useContext(ChallengesContext)

 return (
  <Container>
   <Body>
    <HeaderBody>
     <ImageUser source={{ uri: 'https://github.com/nayaracorrea.png' }} />
     <NameUser>Nayara Corrêa</NameUser>
     <LevelContainer>
      <Level width="40%" height="40%" />
      <LevelUser>Level {level}</LevelUser>
     </LevelContainer>
    </HeaderBody>
    {menuItems.map((item) => (
     <MenuItem
      stack={props}
      key={item.route}
      icon={item.icon}
      routeName={item.route}
      label={item.label}
     />
    ))}
   </Body>
   <Footer>
    <MenuItem
     stack={props}
     onPress={() => console.log('Teste')}
     icon="power"
     label="Sair"
    />
   </Footer>
  </Container>
 )
}

const styles = StyleSheet.create({
 levelIcon: {
  left: 20,
  position: 'absolute'
 }
})

export default DrawerContent
