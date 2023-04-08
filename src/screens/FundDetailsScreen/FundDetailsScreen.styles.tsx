import styled, {css} from 'styled-components/native';
import {Text, Button} from 'react-native-paper';
import {FlatList} from 'react-native';

export const Container = styled.View`
  background: #ffffff;
  padding: 0 20px;
`;

export const Content = styled.ScrollView``;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ChartDisplayOption = styled(Button)``;

export const Section = styled.View``;

export const SectionTitle = styled(Text)``;

export const FundInfoAndStatsWrapper = styled.View`
  flex-direction: row;
`;

export const FundInfoAndStatsValue = styled.View`
  margin-bottom: 16px;
`;

export const FundInfoAndStatsValueText = styled(Text)``;
export const FundInfoAndStatsKeyText = styled(Text)``;

interface IFundBreakdownTabProps {
  isSelected?: boolean;
}

export const FundBreakdownTabOption = styled.View<IFundBreakdownTabProps>`
  ${({isSelected}) =>
    isSelected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: #770fdf;
    `}
`;

export const FundBreakdownTabOptionText = styled(Text)``;

export const FundBreakdownList =
  styled.FlatList`` as unknown as typeof FlatList;

export const PortfolioTitle = styled(Text)``;

export const PortfolioValue = styled(Text)``;

export const SellButton = styled(Button).attrs({mode: 'outlined'})``;

export const RetireCreditsButton = styled(Button).attrs({mode: 'contained'})``;

export const PortfolioDescription = styled(Text)``;

export const HintText = styled(Text)``;

export const AlertTextWrapper = styled.View``;

export const BuyButton = styled(Button).attrs({mode: 'contained'})``;
