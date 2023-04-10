import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Checkbox, Snackbar} from 'react-native-paper';
import {useFormik} from 'formik';
import {
  Container,
  AuthButton,
  Title,
  TextInput,
  AuthFormWrapper,
  HintText,
} from '@components/AuthTemplate.styles';
import {Header} from '@components/Header';
import {AuthStack} from '@constants/RouteNames';
import {AuthStackParamsList} from '@navigation/typings';
import {TermsInputWrapper} from './SignUpScreen.styles';
import {initialValues, signUpSchema, ISignUpData} from './signUpValidations';

type IProps = NativeStackScreenProps<AuthStackParamsList, AuthStack.SignUp>;

export const SignUpScreen = ({navigation}: IProps) => {
  const [isTermsChecked, setIsTermsChecked] = React.useState(false);
  const [isAccountCreated, setIsAccountCreated] = React.useState(false);
  const {setFieldValue, dirty, isValid, handleSubmit} = useFormik<ISignUpData>({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit() {
      setIsAccountCreated(true);
    },
  });

  const handleChange = (field: keyof ISignUpData) => (value: string) =>
    setFieldValue(field, value);

  const handlePressTerms = () => setIsTermsChecked(prevProps => !prevProps);

  return (
    <>
      <Header onGoBack={navigation.goBack} />
      <Container>
        <Title>Create your account</Title>
        <AuthFormWrapper>
          <TextInput
            label="First Name"
            onChangeText={handleChange('firstName')}
          />
          <TextInput
            label="Last Name"
            onChangeText={handleChange('lastName')}
          />
          <TextInput label="Email" onChangeText={handleChange('email')} />
          <TextInput
            label="Password"
            onChangeText={handleChange('password')}
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
          />
          <TermsInputWrapper>
            <Checkbox
              onPress={handlePressTerms}
              status={isTermsChecked ? 'checked' : 'unchecked'}
            />
            <HintText>
              {'I am over 18 years of age and I have read and agree to the '}
              <HintText isLink>Terms of Service</HintText>
              {' and '}
              <HintText isLink>Privacy policy</HintText>
              {'.'}
            </HintText>
          </TermsInputWrapper>
        </AuthFormWrapper>
        <AuthButton
          disabled={isAccountCreated || !isTermsChecked || !dirty || !isValid}
          onPress={handleSubmit}>
          Create account
        </AuthButton>
        <TouchableOpacity onPress={navigation.goBack}>
          <HintText>
            {'Already have an account? '}
            <HintText isLink>Log in Here</HintText>
          </HintText>
        </TouchableOpacity>
      </Container>
      <Snackbar
        visible={isAccountCreated}
        onDismiss={navigation.goBack}
        duration={3000}>
        Account created successfuly!
      </Snackbar>
    </>
  );
};
