import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Text} from 'react-native-paper';

export const Container = styled.View`
  padding: 20px;
  background: #ffffff;
`;

export const Title = styled(Text)``;

export const FundItemWrapper = styled.View`
  background: #ffffff;
  border-color: #e6e6e6;
  border-width: 1px;
  border-radius: 4px;
  padding: 12px;
`;

export const FundsList = styled.FlatList.attrs({
  horizontal: true,
})`` as unknown as typeof FlatList;
