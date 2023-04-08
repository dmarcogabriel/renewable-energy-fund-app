import React from 'react';
import {
  Header,
  Container,
  LoginButton,
  Title,
  LoginFormWrapper,
  HintText,
} from './SignUpScreen.styles';

export const SignUpScreen = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Create your account</Title>
        <LoginFormWrapper>{/*  */}</LoginFormWrapper>
        <LoginButton>Create account</LoginButton>
        <HintText>
          {'Already have an account? '}
          <HintText isLink>Log in Here</HintText>
        </HintText>
      </Container>
    </>
  );
};
