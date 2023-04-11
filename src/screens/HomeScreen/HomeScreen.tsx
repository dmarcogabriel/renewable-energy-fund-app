import React from 'react';
import {ListRenderItem} from 'react-native';
import {Text} from 'react-native-paper';
import {SvgProps} from 'react-native-svg';
import CarbonCreditImg from '@assets/images/CarbonCredit.svg';
import UpIcn from '@assets/icons/Up.svg';
import DownIcn from '@assets/icons/Down.svg';
import WindIcn from '@assets/icons/Wind.svg';
import SolarIcn from '@assets/icons/Solar.svg';
import NatureIcn from '@assets/icons/Nature.svg';
import {HomeHeader} from './HomeHeader';
import {
  Container,
  Title,
  FundsList,
  FundItemWrapper,
  FundItemFooter,
  FundPercentageWrapper,
  FundPercentageText,
  FundChart,
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
  Icon: React.FC<SvgProps>;
  amount: number;
  title: string;
  percent: number;
  color: string;
  iconColor: string;
  data: number[];
}

const MOCK_DATA: IFund[] = [
  {
    id: 'wfnd',
    kind: 'wind',
    Icon: WindIcn,
    amount: 1032.23,
    title: 'Wind Funds',
    percent: 0.0351,
    color: '#4A88D0',
    iconColor: '#4A88D0',
    data: [6, 7, -5, 15, 10, -18, -12, -20, 3, -9],
  },
  {
    id: 'sfnd',
    kind: 'solar',
    Icon: SolarIcn,
    amount: 986.61,
    title: 'Solar Funds',
    percent: 0.0013,
    color: '#EE8688',
    iconColor: '#F0A719',
    data: [-8, 18, -3, 14, -16, 9, 15, -2, 7, 1],
  },
  {
    id: 'nfnd',
    kind: 'nature',
    Icon: NatureIcn,
    amount: 986.61,
    title: 'Nature Funds',
    percent: -0.0132,
    color: '#0FDF8F',
    iconColor: '#0FDF8F',
    data: [10, 11, -3, -18, -1, -12, -16, 7, -20, -9],
  },
];

export const HomeScreen = ({navigation}: IProps) => {
  const renderItem: ListRenderItem<IFund> = ({item: fund}) => {
    const Icon = fund.Icon;

    return (
      <FundItemWrapper
        onPress={() =>
          navigation.navigate(HomeStack.FundDetails, {
            title: fund.title,
            id: fund.id,
          })
        }>
        <Icon color={fund.iconColor} />
        <Text variant="titleSmall">{fund.title}</Text>
        <FundChart
          data={fund.data}
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
  };

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
