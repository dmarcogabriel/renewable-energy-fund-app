import * as yup from 'yup';

export const signUpSchema = yup.object({
  firstName: yup.string().defined(),
  lastName: yup.string().defined(),
  email: yup.string().email().defined(),
  password: yup.string().min(6).defined(),
});

export interface ISignUpData extends yup.InferType<typeof signUpSchema> {}

export const initialValues: ISignUpData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};
