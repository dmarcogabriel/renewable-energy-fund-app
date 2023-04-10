import React from 'react';
import {View, ListRenderItem, ActivityIndicator} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import {
  Container,
  Content,
  Row,
  ChartDisplayOption,
  SectionTitle,
  FundInfoAndStatsWrapper,
  FundInfoAndStatsValue,
  FundInfoAndStatsKeyText,
  FundInfoAndStatsValueText,
  FundBreakdownTabOption,
  FundBreakdownTabOptionText,
  PortfolioTitle,
  PortfolioValue,
  PortfolioDescription,
  HintText,
  Section,
  AlertTextWrapper,
  BuyButton,
  FundBreakdownList,
  Charts,
  FundInfoAndStatsLeftCol,
  SellButton,
  RetireCreditsButton,
} from './FundDetailsScreen.styles';
import {IFundBreakdown} from '@models/IFundBreakdownInterface';
import {IFundData} from '@models/IFundInterface';
import {FundBreakdownItem} from './FundBreakdownItem';
import AspiraDACCoverImg from '@assets/images/breakdowns/aspiradac_cover.png';
import AspiraDACLogoImg from '@assets/images/breakdowns/aspiradac_logo.png';
import ClimateworksCoverImg from '@assets/images/breakdowns/climateworks_cover.png';
import ClimateworksLogoImg from '@assets/images/breakdowns/climateworks_logo.png';
import {Header} from '@components/Header';
import {HomeStackParamsList} from '@navigation/typings';
import {HomeStack} from '@constants/RouteNames';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {getFundDetails} from '@store/funds/fundsSlice';
import {selectFunds} from '@store/funds/fundsSelectors';

const CHART_OPTIONS: {id: string; label: string}[] = [
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

const MOCK_FUND_BREAKDOWN: IFundBreakdown[] = [
  {
    id: 'br1',
    cover: AspiraDACCoverImg,
    logo: AspiraDACLogoImg,
    description:
      'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.',
  },
  {
    id: 'br2',
    cover: ClimateworksCoverImg,
    logo: ClimateworksLogoImg,
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

  React.useEffect(() => {
    dispatch(getFundDetails({fundId: route.params.id}));
  }, [dispatch, route.params.id]);

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
          <Container>
            <Row>{/* values */}</Row>
          </Container>
          <Content>
            <Charts
              data={fund?.data[selectedDateChart]!}
              svg={{stroke: PRODUCTS_COLOR[route.params.id], strokeWidth: 2}}
              contentInset={{top: 20, bottom: 20}}
            />
            <Container>
              <Row>
                {CHART_OPTIONS.map(chartOption => (
                  <ChartDisplayOption key={chartOption.id}>
                    {chartOption.label}
                  </ChartDisplayOption>
                ))}
              </Row>
              <Section>
                <SectionTitle>Info & Stats</SectionTitle>
                <FundInfoAndStatsWrapper>
                  <FundInfoAndStatsLeftCol>
                    <FundInfoAndStatsValue>
                      <FundInfoAndStatsValueText>
                        AUM <MCIcon name="alert-circle-outline" />
                      </FundInfoAndStatsValueText>
                      <FundInfoAndStatsKeyText>{`$${fund?.infoAndStats.aum}m`}</FundInfoAndStatsKeyText>
                    </FundInfoAndStatsValue>
                    <FundInfoAndStatsValue>
                      <FundInfoAndStatsValueText>
                        Vintage Range <MCIcon name="alert-circle-outline" />
                      </FundInfoAndStatsValueText>
                      <FundInfoAndStatsKeyText>
                        {`${fund?.infoAndStats.vintageRange.min} - ${fund?.infoAndStats.vintageRange.max}`}
                      </FundInfoAndStatsKeyText>
                    </FundInfoAndStatsValue>
                    <FundInfoAndStatsValue>
                      <FundInfoAndStatsValueText>
                        Price at Close <MCIcon name="alert-circle-outline" />
                      </FundInfoAndStatsValueText>
                      <FundInfoAndStatsKeyText>{`$${fund?.infoAndStats.priceAtClose}`}</FundInfoAndStatsKeyText>
                    </FundInfoAndStatsValue>
                  </FundInfoAndStatsLeftCol>
                  <View>
                    <FundInfoAndStatsValue>
                      <FundInfoAndStatsValueText>
                        Issue Date <MCIcon name="alert-circle-outline" />
                      </FundInfoAndStatsValueText>
                      <FundInfoAndStatsKeyText>
                        {fund?.infoAndStats.issueDate}
                      </FundInfoAndStatsKeyText>
                    </FundInfoAndStatsValue>
                    <FundInfoAndStatsValue>
                      <FundInfoAndStatsValueText>
                        TER <MCIcon name="alert-circle-outline" />
                      </FundInfoAndStatsValueText>
                      <FundInfoAndStatsKeyText>{`${fund?.infoAndStats.ter}%`}</FundInfoAndStatsKeyText>
                    </FundInfoAndStatsValue>
                    <FundInfoAndStatsValue>
                      <FundInfoAndStatsValueText>
                        Price at Open <MCIcon name="alert-circle-outline" />
                      </FundInfoAndStatsValueText>
                      <FundInfoAndStatsKeyText>{`$${fund?.infoAndStats.priceAtOpen}`}</FundInfoAndStatsKeyText>
                    </FundInfoAndStatsValue>
                  </View>
                </FundInfoAndStatsWrapper>
              </Section>
              <Section>
                <SectionTitle>Fund Breakdown</SectionTitle>
                <Row>
                  <FundBreakdownTabOption isSelected>
                    <FundBreakdownTabOptionText isSelected>
                      Highlighted
                    </FundBreakdownTabOptionText>
                  </FundBreakdownTabOption>
                  <FundBreakdownTabOption>
                    <FundBreakdownTabOptionText>
                      Value
                    </FundBreakdownTabOptionText>
                  </FundBreakdownTabOption>
                  <FundBreakdownTabOption>
                    <FundBreakdownTabOptionText>
                      Vintage
                    </FundBreakdownTabOptionText>
                  </FundBreakdownTabOption>
                  <FundBreakdownTabOption>
                    <FundBreakdownTabOptionText>
                      Registry
                    </FundBreakdownTabOptionText>
                  </FundBreakdownTabOption>
                </Row>
                <FundBreakdownList
                  horizontal
                  data={MOCK_FUND_BREAKDOWN}
                  keyExtractor={breakdown => breakdown.id}
                  renderItem={renderItem}
                />
              </Section>
              <Section>
                <PortfolioTitle>Your Portfolio</PortfolioTitle>
                <Row>
                  <PortfolioValue>18 Credits</PortfolioValue>
                  <PortfolioValue>$328.14</PortfolioValue>
                </Row>
                <Row>
                  <PortfolioDescription color="#0FDF8F">
                    8.41%
                  </PortfolioDescription>
                  <PortfolioDescription color="#A0A0A0">
                    Last purchase 28d ago
                  </PortfolioDescription>
                </Row>
                <Row>
                  <SellButton>Sell</SellButton>
                  <RetireCreditsButton>Retire credits</RetireCreditsButton>
                </Row>
                <HintText>
                  You've previously retired 28 credits of this asset
                </HintText>
              </Section>
              <AlertTextWrapper>
                <HintText>
                  Please note that prices are for reference only and may vary at
                  the time of excecuting a buy or sell order. The information
                  provided is not investment advice, and should not be used as a
                  recommendation to buy or sell assets.
                </HintText>
              </AlertTextWrapper>
              <BuyButton mode="contained">Buy</BuyButton>
            </Container>
          </Content>
        </>
      )}
    </>
  );
};
