import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  content_text: yup.string().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
