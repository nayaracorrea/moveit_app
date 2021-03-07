import styled from 'styled-components/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const Container = styled.TouchableOpacity`
 /* flex: 1; */
 flex-direction: row;
 /* justify-content: center; */
 align-items: center;
 margin-left: 20px;
 width: 100%;
`

export const IconMenu = styled(MaterialCommunityIcons)`
 /* margin-top: 50px; */
 /* margin-left: 10px; */
 margin-top: 20px;
 margin-right: 15px;
`

export const CustomText = styled.Text`
 font-weight: 500;
 font-size: 20px;
 line-height: 24px;
 letter-spacing: 0.15px;
 color: #000;
 margin-top: 24px;
`
