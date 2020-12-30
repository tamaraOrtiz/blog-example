import * as yup from 'yup'

const email = yup
  .string()
  .required('validations:email.required')
  .email('validations:email.notValid')
const loginPassword = yup.string().required('validations:password.required')

export const LoginSchema = yup.object().shape({
  email,
  password: loginPassword,
})

export default {LoginSchema}
