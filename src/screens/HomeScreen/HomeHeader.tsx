import React from 'react';
import {View} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  UserAvatarView,
  Row,
  Text,
  RewardsButton,
  PortfolioAmount,
} from './HomeHeader.styles';
import Notifications from '@assets/icons/Notifications.svg';
import UserAvatar from '@assets/icons/UserAvatar.svg';
import Coins from '@assets/icons/Coins.svg';
import Up from '@assets/icons/Up.svg';

export const HomeHeader = () => (
  <Container>
    <Row marginVertical={8}>
      <UserAvatarView>
        <UserAvatar />
      </UserAvatarView>
      <Row justifyContent="flex-start">
        <Text bold>Account: $1,457.23</Text>
        <MIcon name="keyboard-arrow-down" color="#000" size={18} />
      </Row>
      <Notifications />
    </Row>
    <Row marginVertical={8}>
      <View>
        <Text>Portfolio</Text>
        <Row justifyContent="flex-start" alignItems="flex-end">
          <PortfolioAmount variant="titleLarge">$1,245.23</PortfolioAmount>
          <Text color="#0FDF8F">
            <Up />
            31.82%
          </Text>
        </Row>
      </View>
      <RewardsButton icon={Coins}>Earn Rewards</RewardsButton>
    </Row>
  </Container>
);
