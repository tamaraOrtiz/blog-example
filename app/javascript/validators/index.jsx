import * as yup from 'yup'

const email = yup
  .string()
  .required('validations:email.required')
  .email('validations:email.notValid')
const loginPassword = yup.string().required('validations:password.required')
const articlePublishedAt = yup
  .date()
  .required('validations:publishedAt.required')
const articleTitle = yup
  .string()
  .required('validations:title.required')
  .min(4, 'validations:title.min')
export const LoginSchema = yup.object().shape({
  email,
  password: loginPassword,
})
export const ArticleSchema = yup.object().shape({
  title: articleTitle,
  publishedAt: articlePublishedAt
})
export default {LoginSchema}
