import styled from 'styled-components/native'

export const Container = styled.View`
 display: flex;
 align-items: center;
 color: #2e384d;
 flex-direction: row;
 justify-content: center;
`

export const SecondContainer = styled.View`
 display: flex;
 align-items: center;
 justify-content: space-between;

 flex-direction: row;

 background: #fff;
 box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
 border-radius: 10px;
 font-size: 10px;
 text-align: center;

 width: 100px;
`

export const FirstTime = styled.Text`
 border-right-width: 1px;
 border-right-color: #f0f1f3;
 font-size: 60px;
 flex: 1;
`

export const SecondTime = styled.Text`
 border-left-width: 1px;
 border-left-color: #f0f1f3;
 font-size: 60px;
 flex: 1;
 /* left: 2px; */
`

export const SeparationTime = styled.Text`
 font-size: 60px;
 margin: 0 1px;
`

export const ButtonContainer = styled.View`
 display: flex;
 align-items: center;
 justify-content: center;
 margin-top: 35px;
`

export const Button = styled.TouchableOpacity`
 width: 90%;
 height: 45px;
 align-items: center;
 justify-content: center;

 background: #5965e0;

 border: 0;
 border-radius: 5px;

 flex-direction: row;
`

export const ButtonText = styled.Text`
 font-size: 18px;
 font-weight: 600;

 color: #fff;
 margin-left: 50px;
 margin-right: -30px;
`
