import styled from 'styled-components/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import level from '../../assets/svg/level'

export const Container = styled.View`
 flex: 1;
 justify-content: space-between;
`

export const ImageUser = styled.Image`
 width: 80px;
 height: 80px;
 border-radius: 60px;
 margin-top: 30px;
 margin-bottom: -10px;
`

export const NameUser = styled.Text`
 font-weight: 500;
 font-size: 20px;
 line-height: 24px;
 letter-spacing: 0.15px;
 color: #000;
 margin-top: 24px;
`

export const LevelContainer = styled.View`
 flex-direction: row;
 /* width: 100%; */
 margin-left: -65px;
 margin-top: 10px;
`

export const LevelIconContainer = styled.View`
 /* margin-left: 30px; */
 /* position: absolute; */
 margin-right: 30px;
`

export const LevelUser = styled.Text`
 font-size: 18px;
 line-height: 20px;
 letter-spacing: 0.25px;
 color: #00000f;
 margin-bottom: 32px;
 margin-left: -60px;
 margin-top: 4px;
`

export const Body = styled.View``

export const Footer = styled.View`
 margin-bottom: 15px;
`

export const Logo = styled(MaterialCommunityIcons)`
 margin-top: 50px;
`

export const HeaderBody = styled.View`
 margin-left: 16px;
`
