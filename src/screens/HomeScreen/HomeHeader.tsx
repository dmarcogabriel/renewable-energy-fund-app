import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Icon} from '@components/Icon';
import {Container, UserAvatarView, Row, Text} from './HomeHeader.styles';

export const HomeHeader = () => (
  <Container>
    <Row marginVertical={8}>
      <UserAvatarView>
        <Icon name="User" />
      </UserAvatarView>
      <Text>Account: $1,457.23</Text>
      <MIcon name="bell" />
    </Row>
    <Row marginVertical={8}>
      <View>
        <Text>Portfolio</Text>
        <Row justifyContent="flex-start">
          <Text>$1,245.23</Text>
          <Text>31.82%</Text>
        </Row>
      </View>
      <Button mode="elevated">Earn Rewards</Button>
    </Row>
  </Container>
);
