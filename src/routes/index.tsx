import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import DrawerContent from '../components/DrawerContent'
import Profile from '../screens/Profile'

export type RootDrawerParamList = {
 Home: undefined
 Profile: undefined
}

const Drawer = createDrawerNavigator<RootDrawerParamList>()

const DrawerNavigation: React.FC = () => {
 return (
  <Drawer.Navigator
   screenOptions={{
    headerShown: false
   }}
   drawerContent={(props) => <DrawerContent {...props} />}
   drawerStyle={{ width: '80%' }}
  >
   <Drawer.Screen name="Home" component={Home} />
   <Drawer.Screen name="Profile" component={Profile} />
  </Drawer.Navigator>
 )
}

export default DrawerNavigation
