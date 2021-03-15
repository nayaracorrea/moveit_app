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

export const ContainerXP = styled.View`
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: center;
`

export const XP = styled.Text`
  font-size: 20px;
  color: #5965E0;
  font-weight: 600;
`

export const LineContainer = styled.View`
  width: 100%;
  height: 5%;
  align-items: center;
  justify-content: center;
`

export const Line = styled.View`
  border-bottom-width: 3px;
  border-color: #DCDDE0;
  height: 30px;
  width: 85%;
`

export const BodyChallenge = styled.View`
  width: 100%;
  height: 90%;
  align-items: center;
  justify-content: flex-start;
  top: 20px;
`

export const DescriptionChallenge = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

export const FailedButton = styled.TouchableOpacity`
  width: 150px;
  height: 40px;
  background-color: #E83F5B;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

export const TitleButton = styled.Text`
  font-size: 16px;
  color: #FFF;
  font-weight: 600;
`

export const SuccededButton = styled.TouchableOpacity`
  width: 150px;
  height: 40px;
  background-color: #2ca70d;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`