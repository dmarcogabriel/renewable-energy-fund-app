import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFormik} from 'formik';
import {useAppDispatch} from '@hooks/useRedux';
import {login} from '@store/user/userSlice';
import {
  Container,
  AuthButton,
  Title,
  AuthFormWrapper,
  HintText,
  TextInput,
} from '@components/AuthTemplate.styles';
import {AuthStack} from '@constants/RouteNames';
import {AuthStackParamsList} from '@navigation/typings';
import {Header} from '@components/Header';
import {initialValues, loginSchema, ILoginData} from './loginValidation';

type IProps = NativeStackScreenProps<AuthStackParamsList, AuthStack.Login>;

export const LoginScreen = ({navigation}: IProps) => {
  const dispatch = useAppDispatch();
  const {setFieldValue, handleSubmit, dirty, isValid} = useFormik<ILoginData>({
    initialValues,
    validationSchema: loginSchema,
    onSubmit(formData) {
      dispatch(
        login({user: {email: formData.email, password: formData.password}}),
      );
    },
  });

  const handleChangeField = (field: keyof ILoginData) => (value: string) =>
    setFieldValue(field, value);

  return (
    <>
      <Header />
      <Container>
        <Title>Login</Title>
        <AuthFormWrapper>
          <TextInput label="E-mail" onChangeText={handleChangeField('email')} />
          <TextInput
            label="Password"
            placeholder="Minimum 8 characteres"
            secureTextEntry
            onChangeText={handleChangeField('password')}
          />
        </AuthFormWrapper>
        <AuthButton disabled={!dirty || !isValid} onPress={handleSubmit}>
          Login
        </AuthButton>
        <TouchableOpacity onPress={() => navigation.navigate(AuthStack.SignUp)}>
          <HintText>Don't have an account? Sign up here</HintText>
        </TouchableOpacity>
      </Container>
    </>
  );
};
