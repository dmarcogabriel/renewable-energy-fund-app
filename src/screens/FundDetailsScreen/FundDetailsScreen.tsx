import React from 'react';
import {View, ListRenderItem} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FundDetailsHeader} from './FundDetailsHeader';
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
import {FundBreakdownItem} from './FundBreakdownItem';
import AspiraDACCoverImg from '@assets/images/breakdowns/aspiradac_cover.png';
import AspiraDACLogoImg from '@assets/images/breakdowns/aspiradac_logo.png';
import ClimateworksCoverImg from '@assets/images/breakdowns/climateworks_cover.png';
import ClimateworksLogoImg from '@assets/images/breakdowns/climateworks_logo.png';

const CHART_OPTIONS: {id: string; label: string}[] = [
  {
    id: '1h',
    label: '1h',
  },
  {
    id: '1d',
    label: '1d',
  },
  {
    id: '1w',
    label: '1w',
  },
  {
    id: '1m',
    label: '1m',
  },
  {
    id: '1y',
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

export const FundDetailsScreen = () => {
  const renderItem: ListRenderItem<IFundBreakdown> = ({item: breakdown}) => (
    <FundBreakdownItem breakdown={breakdown} />
  );

  return (
    <>
      <FundDetailsHeader />
      <Container>
        <Row>{/* values */}</Row>
      </Container>
      <Content>
        <Charts
          data={[50, 80, 23, 10, -7, 20, 15, 44, 98]}
          svg={{stroke: '#000', strokeWidth: 2}}
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
                  <FundInfoAndStatsKeyText>$430.88m</FundInfoAndStatsKeyText>
                </FundInfoAndStatsValue>
                <FundInfoAndStatsValue>
                  <FundInfoAndStatsValueText>
                    Vintage Range <MCIcon name="alert-circle-outline" />
                  </FundInfoAndStatsValueText>
                  <FundInfoAndStatsKeyText>2019 - 2022</FundInfoAndStatsKeyText>
                </FundInfoAndStatsValue>
                <FundInfoAndStatsValue>
                  <FundInfoAndStatsValueText>
                    Price at Close <MCIcon name="alert-circle-outline" />
                  </FundInfoAndStatsValueText>
                  <FundInfoAndStatsKeyText>$17.68</FundInfoAndStatsKeyText>
                </FundInfoAndStatsValue>
              </FundInfoAndStatsLeftCol>
              <View>
                <FundInfoAndStatsValue>
                  <FundInfoAndStatsValueText>
                    Issue Date <MCIcon name="alert-circle-outline" />
                  </FundInfoAndStatsValueText>
                  <FundInfoAndStatsKeyText>18/04/2022</FundInfoAndStatsKeyText>
                </FundInfoAndStatsValue>
                <FundInfoAndStatsValue>
                  <FundInfoAndStatsValueText>
                    TER <MCIcon name="alert-circle-outline" />
                  </FundInfoAndStatsValueText>
                  <FundInfoAndStatsKeyText>0.15%</FundInfoAndStatsKeyText>
                </FundInfoAndStatsValue>
                <FundInfoAndStatsValue>
                  <FundInfoAndStatsValueText>
                    Price at Open <MCIcon name="alert-circle-outline" />
                  </FundInfoAndStatsValueText>
                  <FundInfoAndStatsKeyText>$17.74</FundInfoAndStatsKeyText>
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
                <FundBreakdownTabOptionText>Value</FundBreakdownTabOptionText>
              </FundBreakdownTabOption>
              <FundBreakdownTabOption>
                <FundBreakdownTabOptionText>Vintage</FundBreakdownTabOptionText>
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
              <PortfolioDescription color="#0FDF8F">8.41%</PortfolioDescription>
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
              Please note that prices are for reference only and may vary at the
              time of excecuting a buy or sell order. The information provided
              is not investment advice, and should not be used as a
              recommendation to buy or sell assets.
            </HintText>
          </AlertTextWrapper>
          <BuyButton mode="contained">Buy</BuyButton>
        </Container>
      </Content>
    </>
  );
};
