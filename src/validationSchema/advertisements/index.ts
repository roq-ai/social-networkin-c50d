import * as yup from 'yup';

export const advertisementValidationSchema = yup.object().shape({
  ad_text: yup.string().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
