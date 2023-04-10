import React from 'react';
import {ListRenderItem} from 'react-native';
import {Text} from 'react-native-paper';
import {LineChart} from 'react-native-svg-charts';
import {IIconName, Icon} from '@components/Icon';
import CarbonCreditImg from '@assets/images/CarbonCredit.svg';
import UpIcn from '@assets/icons/Up.svg';
import DownIcn from '@assets/icons/Down.svg';
import {HomeHeader} from './HomeHeader';
import {
  Container,
  Title,
  FundsList,
  FundItemWrapper,
  FundItemFooter,
  FundPercentageWrapper,
  FundPercentageText,
  CarbonCreditCard,
  CarbonCreditCardSubtitle,
  CarbonCreditCardTitle,
  CarbonCreditContent,
} from './HomeScreen.styles';
import {HomeStack} from '@constants/RouteNames';
import {HomeStackParamsList} from '@navigation/typings';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type IProps = NativeStackScreenProps<HomeStackParamsList, HomeStack.Home>;

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
    id: 'wfnd',
    kind: 'wind',
    iconName: 'Wind',
    amount: 1032.23,
    title: 'Wind Funds',
    percent: 0.0351,
    color: '#4A88D0',
  },
  {
    id: 'sfnd',
    kind: 'solar',
    iconName: 'Sun',
    amount: 986.61,
    title: 'Solar Funds',
    percent: 0.0013,
    color: '#EE8688',
  },
  {
    id: 'nfnd',
    kind: 'nature',
    iconName: 'Nature',
    amount: 986.61,
    title: 'Nature Funds',
    percent: -0.0132,
    color: '#0FDF8F',
  },
];

export const HomeScreen = ({navigation}: IProps) => {
  const renderItem: ListRenderItem<IFund> = ({item: fund}) => (
    <FundItemWrapper
      onPress={() =>
        navigation.navigate(HomeStack.FundDetails, {
          title: fund.title,
          id: fund.id,
        })
      }>
      <Icon name={fund.iconName} color={fund.color} />
      <Text variant="titleSmall">{fund.title}</Text>
      <LineChart
        style={{height: 100}}
        data={[50, 80, 23, 10, -7, 20, 15, 44, 98]}
        svg={{stroke: fund.color, strokeWidth: 2}}
        contentInset={{top: 20, bottom: 20}}
      />
      <FundItemFooter>
        <Text variant="titleMedium">${fund.amount}</Text>
        <FundPercentageWrapper>
          {fund.percent >= 0 ? <UpIcn /> : <DownIcn />}
          <FundPercentageText
            variant="titleMedium"
            color={fund.percent >= 0 ? '#0FDF8F' : '#EE8688'}>
            {fund.percent * 100}
          </FundPercentageText>
        </FundPercentageWrapper>
      </FundItemFooter>
    </FundItemWrapper>
  );

  return (
    <>
      <HomeHeader />
      <Container>
        <Title>Funds</Title>
        <FundsList
          data={MOCK_DATA}
          keyExtractor={({id}) => id}
          renderItem={renderItem}
        />
        <CarbonCreditCard>
          <CarbonCreditContent>
            <CarbonCreditCardTitle>
              Learn more about carbon credits
            </CarbonCreditCardTitle>
            <CarbonCreditCardSubtitle>
              Check out our top tips!
            </CarbonCreditCardSubtitle>
          </CarbonCreditContent>
          <CarbonCreditImg />
        </CarbonCreditCard>
      </Container>
    </>
  );
};
