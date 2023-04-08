import styled from 'styled-components/native';
import {Text, Button, TextInput as RNPTextInput} from 'react-native-paper';

export const Header = styled.View`
  height: 75px;
  background: #ffffff;
  border-bottom-color: #f4f4f4;
  border-bottom-width: 1px;
`;

export const Container = styled.View`
  background: #ffffff;
  flex: 1;
  padding: 20px;
`;

export const Title = styled(Text).attrs({variant: 'titleLarge'})`
  align-self: center;
  margin: 20px 0 35px;
  font-weight: bold;
`;

export const LoginFormWrapper = styled.View``;

export const TextInput = styled(RNPTextInput).attrs({
  textColor: '#000000',
  labelColor: '#A0A0A0',
})`
  background: #f4f4f4;
  border: none;
  border-radius: 4px;
  margin: 8px 0;
`;

export const LoginButton = styled(Button).attrs({mode: 'contained'})`
  border-radius: 4px;
  margin-top: 30px;
`;

export const HintText = styled(Text)`
  align-self: center;
  margin-top: 12px;
  color: #a0a0a0;
`;
