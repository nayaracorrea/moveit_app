import { exp } from 'react-native-reanimated'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 52%;
  align-items: center;
  justify-content: center;
`

export const Body = styled.View`
  width: 95%;
  height: 95%;
  background-color: #FFF;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  margin-top: 60px;
  color: #666666;
`

export const SubContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 70px;
`

export const BoxImage = styled.View`
  height: 100px;
  width: 30%;
  align-items: center;
  justify-content: center;
`

export const BoxText = styled.View`
  height: 100px;
  width: 70%;
  align-items: center;
  justify-content: center;
`

export const SubTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #666666;
`