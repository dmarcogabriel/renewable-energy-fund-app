import React from 'react';
import {Card} from 'react-native-paper';
import {IFundBreakdown} from '@models/IFundBreakdownInterface';

import {
  BreakdownLogo,
  BreakdownDescription,
  BreakdownCard,
  BreakdownCover,
} from './FundBreakdownItem.styles';

interface IProps {
  breakdown: IFundBreakdown;
}

export const FundBreakdownItem = ({breakdown}: IProps) => (
  <BreakdownCard>
    <BreakdownCover source={breakdown.cover} />
    <Card.Content>
      <BreakdownLogo source={breakdown.logo} />
      <BreakdownDescription>{breakdown.description}</BreakdownDescription>
      <BreakdownDescription>Read more</BreakdownDescription>
    </Card.Content>
  </BreakdownCard>
);
