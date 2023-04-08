import styled from 'styled-components/native';
import {Text as RNPText} from 'react-native-paper';

export const Container = styled.View`
  padding: 16px;
  background: #ffffff;
  border-bottom-color: #f4f4f4;
  border-bottom-width: 1px;
`;

interface IRowProps {
  justifyContent?: string;
  marginVertical?: number;
}

export const Row = styled.View<IRowProps>`
  flex-direction: row;
  align-items: center;
  justify-content: ${({justifyContent = 'space-between'}) => justifyContent};
  margin: ${({marginVertical = 0}) => marginVertical}px 0;
`;

export const UserAvatarView = styled.View`
  border-radius: 20px;
  padding: 6px;
  align-items: center;
  justify-content: center;
  background: #f4f4f4;
`;

export const Text = styled(RNPText)``;
