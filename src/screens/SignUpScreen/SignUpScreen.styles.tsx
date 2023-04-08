import styled, {css} from 'styled-components/native';
import {Text, Button} from 'react-native-paper';

export const Header = styled.View``;

export const Container = styled.View``;

export const Title = styled(Text)``;

export const LoginFormWrapper = styled.View``;

export const LoginButton = styled(Button).attrs({mode: 'contained'})`
  border-radius: 4px;
`;

export const HintText = styled(Text)<{isLink?: boolean}>`
  color: #a0a0a0;
  align-self: center;
  ${({isLink}) =>
    isLink &&
    css`
      color: #000000;
      text-decoration: underline;
    `};
`;
