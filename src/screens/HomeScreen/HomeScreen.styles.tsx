import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Text} from 'react-native-paper';

export const Container = styled.View`
  padding: 20px;
  background: #ffffff;
`;

export const Title = styled(Text).attrs({variant: 'titleMedium'})`
  font-weight: bold;
  margin-bottom: 20px;
`;

export const FundItemWrapper = styled.TouchableOpacity`
  background: #ffffff;
  border-color: #e6e6e6;
  border-width: 1px;
  border-radius: 4px;
  padding: 12px;
  margin: 0 8px;
  width: 150px;
`;

export const FundItemFooter = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FundPercentageWrapper = styled.View`
  margin-left: 4px;
  flex-direction: row;
  align-items: center;
`;

interface IFundPercentageTextProps {
  color: string;
}

export const FundPercentageText = styled(Text).attrs({
  variant: 'titleMedium',
})<IFundPercentageTextProps>`
  color: ${({color = '#000000'}) => color};
`;

export const FundsList = styled.FlatList.attrs({
  horizontal: true,
})`` as unknown as typeof FlatList;

export const CarbonCreditCard = styled.View`
  margin: 20px 0;
  background: #770fdf;
  border-radius: 10px;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CarbonCreditContent = styled.View`
  width: 60%;
`;

export const CarbonCreditCardTitle = styled(Text).attrs({
  variant: 'titleMedium',
})`
  font-weight: bold;
  color: #ffffff;
`;

export const CarbonCreditCardSubtitle = styled(Text).attrs({
  variant: 'titleSmall',
})`
  color: #ffffff;
`;
