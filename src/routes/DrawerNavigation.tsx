import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import HomeStack from './HomeStack'
import { View } from 'react-native'
import ProfileStack from './ProfileStack'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerComp {...props} />}
    >
      <Drawer.Screen name='MainStackNavigator' component={HomeStack} />
      <Drawer.Screen name='ProfileStack' component={ProfileStack} />
    </Drawer.Navigator>
  )
}

export const CustomDrawerComp = (props) => {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flexGrow: 2}}>
        <DrawerItem label='Início' onPress={() => navigation.navigate('Home')} />
        <DrawerItem label='Perfil' onPress={() => navigation.navigate('Profile')} />
      </View>
    </DrawerContentScrollView>
  )
}

export default DrawerNavigation