import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 25%;
  align-items: center;
  justify-content: center;
`

export const Body = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`


export const BoxCount = styled.View`
  width: 60px;
  height: 90px;
  background-color: #FFF;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-right: 5px;
`

export const Time = styled.Text`
  font-size: 50px;
`

export const SeparatorContainer = styled.View`
  align-items: center;
  justify-content: center;
`

export const Separator = styled.Text`
  font-size: 60px;
  color: #000;
  margin-right: 4px;
  margin-left: -2px;
`

export const ButtonStart = styled.TouchableOpacity`
  width: 350px;
  height: 60px;
  background-color: #5965E0;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5%;
  flex-direction: row;
  border-radius: 20px;
`

export const TitleButton = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #FFF;
`

export const ButtonAbandon = styled.TouchableOpacity`
  width: 350px;
  height: 60px;
  background-color: #E83F5B;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5%;
  flex-direction: row;
  border-radius: 20px;
`

export const ButtonFinished = styled.TouchableOpacity`
  width: 350px;
  height: 60px;
  background-color: #FFF;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5%;
  flex-direction: row;
  border-radius: 20px;
  border-bottom-width: 4px;
  border-bottom-color: #4CD62B;
`

export const TitleButtonFinished = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #666666;
  margin-right: 4px;
`