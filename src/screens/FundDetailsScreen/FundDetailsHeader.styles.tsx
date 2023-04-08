import styled from 'styled-components/native';
import {Text} from 'react-native-paper';

export const Container = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-bottom-width: 1px;
  border-bottom-color: #f4f4f4;
`;

export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled(Text).attrs({variant: 'bodyLarge'})``;

export const Subtitle = styled(Text).attrs({variant: 'bodySmall'})``;
