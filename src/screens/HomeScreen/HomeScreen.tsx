import React from 'react';
import {ListRenderItem} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {LineChart} from 'react-native-svg-charts';
import {IIconName, Icon} from '@components/Icon';
import CarbonCreditImg from '@assets/images/CarbonCredit.svg';
import {HomeHeader} from './HomeHeader';
import {
  Container,
  Title,
  FundsList,
  FundItemWrapper,
} from './HomeScreen.styles';

interface IFund {
  id: string;
  kind: 'wind' | 'nature' | 'solar';
  iconName: IIconName;
  amount: number;
  title: string;
  percent: number;
  color: string;
}

const MOCK_DATA: IFund[] = [
  {
    id: 'wind-fund',
    kind: 'wind',
    iconName: 'Wind',
    amount: 1032.23,
    title: 'Wind Funds',
    percent: 0.0351,
    color: '#4A88D0',
  },
  {
    id: 'solar-fund',
    kind: 'solar',
    iconName: 'Sun',
    amount: 986.61,
    title: 'Solar Funds',
    percent: 0.013,
    color: '#EE8688',
  },
  {
    id: 'nature-fund',
    kind: 'nature',
    iconName: 'Nature',
    amount: 986.61,
    title: 'Nature Funds',
    percent: 0.013,
    color: '#0FDF8F',
  },
];

export const HomeScreen = () => {
  const renderItem: ListRenderItem<IFund> = ({item: fund}) => (
    <FundItemWrapper>
      <Icon name={fund.iconName} color={fund.color} />
      <Text variant="titleLarge">{fund.title}</Text>
      <LineChart
        style={{height: 120}}
        data={[50, 80, 23, 10, -7, 20, 15, 44, 98]}
        svg={{stroke: fund.color, strokeWidth: 2}}
        contentInset={{top: 20, bottom: 20}}
      />
      <Text variant="headlineSmall">{`$ ${fund.amount} ${
        fund.percent * 100
      }`}</Text>
    </FundItemWrapper>
  );

  const renderCarbonCredit = () => <CarbonCreditImg />;

  return (
    <>
      <HomeHeader />
      <Container>
        <Title>Funds</Title>
        {/* Funds list here */}
        <FundsList
          data={MOCK_DATA}
          keyExtractor={({id}) => id}
          renderItem={renderItem}
        />
        <Card.Title
          title="Learn more about carbon credits"
          subtitle="Check out our top tips!"
          right={renderCarbonCredit}
        />
      </Container>
    </>
  );
};
