import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;

  justify-content: center;
  align-items: center;

`

export const ModalFirstInternalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(242, 243, 245, 0.8);
`

export const ModalSecondInternalContainer = styled.View`
  height: 55%;
  width: 85%;
  background-color: #fff;

  border-radius: 10px;
  
  align-items: center;
  justify-content: flex-start;
`

export const CloseButton = styled.TouchableOpacity`
  height: 50px;
  width: 50px;

  align-items: center;
  justify-content: center;

  background-color: #C6C6C6;
`

export const Header = styled.View`
  width: 100%;
  height: 12%;

  align-items: flex-end;
  justify-content: center;
`

export const FirstBody = styled.View`
  width: 100%;
  height: 44%;

  align-items: center;
  justify-content: center;
`

export const FirstBodyInternal = styled.View`
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`

export const SecondBody = styled.View`
  width: 100%;
  height: 44%;

  align-items: center;
  justify-content: center;
`


export const Title = styled.Text`
  font-size: 140px;
  font-weight: 600;
  color: #5965E0;
  top: -50px;
  margin-top: -150px;
`

export const Congrats = styled.Text`
  font-size: 50px;
  font-weight: bold;

`

export const Description = styled.Text`
  font-size: 25px;
  text-align: center;
`
