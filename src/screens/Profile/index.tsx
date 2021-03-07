import React from 'react'
import { Text, View } from 'react-native'

import { RootDrawerParamList } from '../../routes/index'

import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

const Profile = () => {
 const navigation = useNavigation() as DrawerNavigationProp<
  RootDrawerParamList,
  'Profile'
 >

 return (
  <View style={{ flex: 1, justifyContent: 'space-between', paddingBottom: 20 }}>
   <Header title="Perfil" onPress={() => navigation.openDrawer()} />
  </View>
 )
}

export default Profile
