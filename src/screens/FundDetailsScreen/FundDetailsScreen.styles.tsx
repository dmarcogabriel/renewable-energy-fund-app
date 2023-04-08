import styled, {css} from 'styled-components/native';
import {Text, Button} from 'react-native-paper';
import {FlatList} from 'react-native';
import {LineChart} from 'react-native-svg-charts';

export const Container = styled.View`
  background: #ffffff;
  padding: 0 20px;
`;

export const Content = styled.ScrollView``;

export const Charts = styled(LineChart)`
  height: 200px;
  background: #ffffff;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
interface IChartDisplayOptionProps {
  isSelected?: boolean;
}

export const ChartDisplayOption = styled(Button)<IChartDisplayOptionProps>`
  background: ${({isSelected}) => (isSelected ? '#F7EFFF' : 'transparent')};
`;

export const Section = styled.View``;

export const SectionTitle = styled(Text).attrs({variant: 'titleMedium'})`
  font-weight: bold;
  margin-bottom: 20px;
`;

export const FundInfoAndStatsWrapper = styled.View`
  flex-direction: row;
`;

export const FundInfoAndStatsLeftCol = styled.View`
  margin-right: 40px;
`;

export const FundInfoAndStatsValue = styled.View`
  margin-bottom: 16px;
`;

export const FundInfoAndStatsValueText = styled(Text)`
  color: #a0a0a0;
`;
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
  padding: 8px 4px;
`;

export const FundBreakdownTabOptionText = styled(Text)<IFundBreakdownTabProps>`
  line-height: 18px;
  color: ${({isSelected}) => (isSelected ? '#000000' : '#A0A0A0')};
  font-weight: bold;
`;

export const FundBreakdownList = styled.FlatList`
  margin-top: 20px;
` as unknown as typeof FlatList;

export const PortfolioTitle = styled(Text).attrs({variant: 'titleMedium'})`
  margin: 20px 0;
  font-weight: bold;
`;

export const PortfolioValue = styled(Text).attrs({variant: 'titleLarge'})`
  font-weight: bold;
`;

export const SellButton = styled(Button).attrs({mode: 'outlined'})`
  border-radius: 4px;
`;

export const RetireCreditsButton = styled(Button).attrs({mode: 'contained'})`
  border-radius: 4px;
  background: #0fdf8f;
`;

export const PortfolioDescription = styled(Text)<{color?: string}>`
  color: ${({color = '#000000'}) => color};
`;

export const HintText = styled(Text)`
  color: #a0a0a0;
`;

export const AlertTextWrapper = styled.View`
  padding: 10px;
  background: #f4f4f4;
  border-radius: 4px;
  margin: 40px 0 30px;
`;

export const BuyButton = styled(Button).attrs({mode: 'contained'})`
  border-radius: 4px;
`;
