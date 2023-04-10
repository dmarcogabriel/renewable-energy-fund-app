import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAppDispatch} from '@hooks/useRedux';
import {login} from '@store/user/userSlice';
import {
  Header,
  Container,
  AuthButton,
  Title,
  AuthFormWrapper,
  HintText,
  TextInput,
} from '@components/AuthTemplate.styles';
import {AuthStack} from '@constants/RouteNames';
import {AuthStackParamsList} from '@navigation/typings';

type IProps = NativeStackScreenProps<AuthStackParamsList, AuthStack.Login>;

export const LoginScreen = ({navigation}: IProps) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(
      login({
        user: {
          email,
          password,
          firstName: 'Tester',
          lastName: 'Silva',
        },
      }),
    );
  };

  return (
    <>
      <Header />
      <Container>
        <Title>Login</Title>
        <AuthFormWrapper>
          <TextInput label="E-mail" onChangeText={setEmail} />
          <TextInput
            label="Password"
            placeholder="Minimum 8 characteres"
            secureTextEntry
            onChangeText={setPassword}
          />
        </AuthFormWrapper>
        <AuthButton onPress={handleLogin}>Login</AuthButton>
        <TouchableOpacity onPress={() => navigation.navigate(AuthStack.SignUp)}>
          <HintText>Don't have an account? Sign up here</HintText>
        </TouchableOpacity>
      </Container>
    </>
  );
};
