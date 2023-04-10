import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Container, TitleWrapper, Title, Subtitle} from './Header.styles';

interface IProps {
  title?: string;
  subtitle?: string;
  onGoBack?: () => void;
}

export const Header = ({title, subtitle, onGoBack}: IProps) => {
  return (
    <Container>
      {!!onGoBack && (
        <TouchableOpacity onPress={onGoBack}>
          <MIcon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      )}
      <TitleWrapper>
        {!!title && <Title>{title}</Title>}
        {!!subtitle && <Subtitle>{subtitle.toUpperCase()}</Subtitle>}
      </TitleWrapper>
      <View />
    </Container>
  );
};
