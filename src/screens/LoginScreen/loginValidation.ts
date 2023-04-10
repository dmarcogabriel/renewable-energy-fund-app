import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email().defined(),
  password: yup.string().min(8).defined(),
});

export interface ILoginData extends yup.InferType<typeof loginSchema> {}

export const initialValues: ILoginData = {
  email: '',
  password: '',
};
