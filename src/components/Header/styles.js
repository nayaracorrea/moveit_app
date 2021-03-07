import styled from 'styled-components/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const Container = styled.View`
 flex-direction: row;
 height: 65px;
 background-color: #5965e0;
 width: 100%;
 align-items: center;
 justify-content: center;
`

export const Title = styled.Text`
 font-weight: bold;
 font-size: 20px;
 letter-spacing: 1px;
 color: #fff;
`

export const Icon = styled(MaterialCommunityIcons)`
 position: absolute;
 left: 20px;
 color: #fff;
`
