import * as yup from 'yup';

export const practiceTestResultValidationSchema = yup.object().shape({
  score: yup.number().integer().required(),
  user_id: yup.string().nullable(),
  course_id: yup.string().nullable(),
});
