import styled from 'styled-components/native';
import {Text, Card} from 'react-native-paper';

export const BreakdownCard = styled(Card)`
  width: 200px;
  margin: 0 8px;
  background: #ffffff;
`;

export const BreakdownCover = styled.Image`
  width: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const BreakdownLogo = styled.Image`
  margin: 8px 0;
`;

export const BreakdownDescription = styled(Text)`
  margin-bottom: 8px;
`;
