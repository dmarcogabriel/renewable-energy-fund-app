import React from 'react';
import {View} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  TitleWrapper,
  Title,
  Subtitle,
} from './FundDetailsHeader.styles';

export const FundDetailsHeader = () => {
  return (
    <Container>
      <MIcon name="arrow-back" size={24} color="#000" />
      <TitleWrapper>
        <Title>Wind Fund</Title>
        <Subtitle>WFND</Subtitle>
      </TitleWrapper>
      <View />
    </Container>
  );
};
