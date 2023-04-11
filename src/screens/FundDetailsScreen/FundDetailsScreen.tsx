import React from 'react';
import {View, ListRenderItem, ActivityIndicator} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import * as S from './FundDetailsScreen.styles';
import {IFundBreakdown} from '@models/IFundBreakdownInterface';
import {IFundData} from '@models/IFundInterface';
import {FundBreakdownItem} from './FundBreakdownItem';
import {Header} from '@components/Header';
import {HomeStackParamsList} from '@navigation/typings';
import {HomeStack} from '@constants/RouteNames';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {getFundDetails} from '@store/funds/fundsSlice';
import {selectFunds} from '@store/funds/fundsSelectors';

const CHART_OPTIONS: {id: keyof IFundData; label: string}[] = [
  {
    id: 'hour',
    label: '1h',
  },
  {
    id: 'day',
    label: '1d',
  },
  {
    id: 'week',
    label: '1w',
  },
  {
    id: 'month',
    label: '1m',
  },
  {
    id: 'year',
    label: '1y',
  },
  {
    id: 'all',
    label: 'All',
  },
];

const BREAKDOWN_OPTIONS = [
  {
    id: 'highlighted',
    label: 'Highlighted',
  },
  {
    id: 'value',
    label: 'Value',
  },
  {
    id: 'vintage',
    label: 'Vintage',
  },
  {
    id: 'registry',
    label: 'Registry',
  },
];

const MOCK_FUND_BREAKDOWN: IFundBreakdown[] = [
  {
    id: 'br1',
    cover: require('@assets/images/breakdowns/aspiradac_cover.png'),
    logo: require('@assets/images/breakdowns/aspiradac_logo.png'),
    description:
      'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.',
  },
  {
    id: 'br2',
    cover: require('@assets/images/breakdowns/climateworks_cover.png'),
    logo: require('@assets/images/breakdowns/climateworks_logo.png'),
    description:
      'uses renewable geothermal energy and waste heat to capture CO₂ directly from the air.',
  },
];

const PRODUCTS_COLOR: {[key: string]: string} = {
  wfnd: '#4A88D0',
  sfnd: '#EE8688',
  nfnd: '#0FDF8F',
};

export const FundDetailsScreen = () => {
  const navigation = useNavigation();
  const route =
    useRoute<RouteProp<HomeStackParamsList, HomeStack.FundDetails>>();
  const dispatch = useAppDispatch();
  const {fund, isLoading} = useAppSelector(selectFunds);
  const [selectedDateChart, setSelectedDateChart] =
    React.useState<keyof IFundData>('all');
  const [selectedBreakdownId, setSelectedBreakdownId] = React.useState(
    BREAKDOWN_OPTIONS[0].id,
  );

  React.useEffect(() => {
    dispatch(getFundDetails({fundId: route.params.id}));
  }, [dispatch, route.params.id]);

  const handleSelectChartOption = (optionId: keyof IFundData) => {
    setSelectedDateChart(optionId);
  };

  const renderItem: ListRenderItem<IFundBreakdown> = ({item: breakdown}) => (
    <FundBreakdownItem breakdown={breakdown} />
  );

  return (
    <>
      <Header
        onGoBack={navigation.goBack}
        title={route.params.title}
        subtitle={route.params.id}
      />
      {isLoading && !fund ? (
        <ActivityIndicator />
      ) : (
        <>
          <S.Container>
            <S.Row>{/* values */}</S.Row>
          </S.Container>
          <S.Content>
            <S.Charts
              data={fund?.data[selectedDateChart] || []}
              svg={{stroke: PRODUCTS_COLOR[route.params.id], strokeWidth: 2}}
              contentInset={{top: 20, bottom: 20}}
            />
            <S.Container>
              <S.Row>
                {CHART_OPTIONS.map(chartOption => (
                  <S.ChartDisplayOption
                    key={chartOption.id}
                    onPress={() => handleSelectChartOption(chartOption.id)}
                    isSelected={chartOption.id === selectedDateChart}>
                    {chartOption.label}
                  </S.ChartDisplayOption>
                ))}
              </S.Row>
              <S.Section>
                <S.SectionTitle>Info & Stats</S.SectionTitle>
                <S.FundInfoAndStatsWrapper>
                  <S.FundInfoAndStatsLeftCol>
                    <S.FundInfoAndStatsValue>
                      <S.FundInfoAndStatsValueText>
                        AUM <MCIcon name="alert-circle-outline" />
                      </S.FundInfoAndStatsValueText>
                      <S.FundInfoAndStatsKeyText>{`$${fund?.infoAndStats.aum}m`}</S.FundInfoAndStatsKeyText>
                    </S.FundInfoAndStatsValue>
                    <S.FundInfoAndStatsValue>
                      <S.FundInfoAndStatsValueText>
                        Vintage Range <MCIcon name="alert-circle-outline" />
                      </S.FundInfoAndStatsValueText>
                      <S.FundInfoAndStatsKeyText>
                        {`${fund?.infoAndStats.vintageRange.min} - ${fund?.infoAndStats.vintageRange.max}`}
                      </S.FundInfoAndStatsKeyText>
                    </S.FundInfoAndStatsValue>
                    <S.FundInfoAndStatsValue>
                      <S.FundInfoAndStatsValueText>
                        Price at Close <MCIcon name="alert-circle-outline" />
                      </S.FundInfoAndStatsValueText>
                      <S.FundInfoAndStatsKeyText>{`$${fund?.infoAndStats.priceAtClose}`}</S.FundInfoAndStatsKeyText>
                    </S.FundInfoAndStatsValue>
                  </S.FundInfoAndStatsLeftCol>
                  <View>
                    <S.FundInfoAndStatsValue>
                      <S.FundInfoAndStatsValueText>
                        Issue Date <MCIcon name="alert-circle-outline" />
                      </S.FundInfoAndStatsValueText>
                      <S.FundInfoAndStatsKeyText>
                        {fund?.infoAndStats.issueDate}
                      </S.FundInfoAndStatsKeyText>
                    </S.FundInfoAndStatsValue>
                    <S.FundInfoAndStatsValue>
                      <S.FundInfoAndStatsValueText>
                        TER <MCIcon name="alert-circle-outline" />
                      </S.FundInfoAndStatsValueText>
                      <S.FundInfoAndStatsKeyText>{`${fund?.infoAndStats.ter}%`}</S.FundInfoAndStatsKeyText>
                    </S.FundInfoAndStatsValue>
                    <S.FundInfoAndStatsValue>
                      <S.FundInfoAndStatsValueText>
                        Price at Open <MCIcon name="alert-circle-outline" />
                      </S.FundInfoAndStatsValueText>
                      <S.FundInfoAndStatsKeyText>{`$${fund?.infoAndStats.priceAtOpen}`}</S.FundInfoAndStatsKeyText>
                    </S.FundInfoAndStatsValue>
                  </View>
                </S.FundInfoAndStatsWrapper>
              </S.Section>
              <S.Section>
                <S.SectionTitle>Fund Breakdown</S.SectionTitle>
                <S.Row>
                  {BREAKDOWN_OPTIONS.map(breakdownOption => (
                    <S.FundBreakdownTabOption
                      key={breakdownOption.id}
                      isSelected={breakdownOption.id === selectedBreakdownId}
                      onPress={() =>
                        setSelectedBreakdownId(breakdownOption.id)
                      }>
                      <S.FundBreakdownTabOptionText
                        isSelected={breakdownOption.id === selectedBreakdownId}>
                        {breakdownOption.label}
                      </S.FundBreakdownTabOptionText>
                    </S.FundBreakdownTabOption>
                  ))}
                </S.Row>
                <S.FundBreakdownList
                  horizontal
                  data={MOCK_FUND_BREAKDOWN}
                  keyExtractor={breakdown => breakdown.id}
                  renderItem={renderItem}
                />
              </S.Section>
              <S.Section>
                <S.PortfolioTitle>Your Portfolio</S.PortfolioTitle>
                <S.Row>
                  <S.PortfolioValue>18 Credits</S.PortfolioValue>
                  <S.PortfolioValue>$328.14</S.PortfolioValue>
                </S.Row>
                <S.Row>
                  <S.PortfolioDescription color="#0FDF8F">
                    8.41%
                  </S.PortfolioDescription>
                  <S.PortfolioDescription color="#A0A0A0">
                    Last purchase 28d ago
                  </S.PortfolioDescription>
                </S.Row>
                <S.Row>
                  <S.SellButton>Sell</S.SellButton>
                  <S.RetireCreditsButton>Retire credits</S.RetireCreditsButton>
                </S.Row>
                <S.HintText>
                  You've previously retired 28 credits of this asset
                </S.HintText>
              </S.Section>
              <S.AlertTextWrapper>
                <S.HintText>
                  Please note that prices are for reference only and may vary at
                  the time of excecuting a buy or sell order. The information
                  provided is not investment advice, and should not be used as a
                  recommendation to buy or sell assets.
                </S.HintText>
              </S.AlertTextWrapper>
              <S.BuyButton mode="contained">Buy</S.BuyButton>
            </S.Container>
          </S.Content>
        </>
      )}
    </>
  );
};
