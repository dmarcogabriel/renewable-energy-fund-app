import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Header,
  Container,
  LoginButton,
  Title,
  LoginFormWrapper,
  HintText,
} from './SignUpScreen.styles';
import {AuthStack} from '@constants/RouteNames';
import {AuthStackParamsList} from '@navigation/typings';

type IProps = NativeStackScreenProps<AuthStackParamsList, AuthStack.SignUp>;

export const SignUpScreen = ({navigation}: IProps) => {
  return (
    <>
      <Header />
      <Container>
        <Title>Create your account</Title>
        <LoginFormWrapper>{/*  */}</LoginFormWrapper>
        <LoginButton>Create account</LoginButton>
        <TouchableOpacity onPress={navigation.goBack}>
          <HintText>
            {'Already have an account? '}
            <HintText isLink>Log in Here</HintText>
          </HintText>
        </TouchableOpacity>
      </Container>
    </>
  );
};
