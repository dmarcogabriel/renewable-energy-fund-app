import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import {
  Container,
  TitleWrapper,
  Title,
  Subtitle,
} from './FundDetailsHeader.styles';
import {HomeStackParamsList} from '@navigation/typings';
import {HomeStack} from '@constants/RouteNames';

export const FundDetailsHeader = () => {
  const {goBack} = useNavigation();
  const route =
    useRoute<RouteProp<HomeStackParamsList, HomeStack.FundDetails>>();

  return (
    <Container>
      <TouchableOpacity onPress={goBack}>
        <MIcon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <TitleWrapper>
        <Title>{route.params.title}</Title>
        <Subtitle>{route.params.subtitle.toUpperCase()}</Subtitle>
      </TitleWrapper>
      <View />
    </Container>
  );
};
