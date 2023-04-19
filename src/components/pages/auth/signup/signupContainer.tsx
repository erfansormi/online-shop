import React from 'react';

// formik & yup
import { Formik } from 'formik';

// mui
import Box from '@mui/material/Box';

// data
import { signupInputs } from './signupData';

// components
import Input from '../../../data_entry/input/input';
import FormContainer from '../../../data_entry/formContainer/formContainer';
import FormSwitcher from '../../../data_entry/formSwitcher';
import SigninOtherWay from '../../../data_entry/signinOtherWay';
import SubmitButton from '../../../data_entry/submitButton';

// validation form
import { SignupSchema } from './signupValidation';

// types
import { SignupInitialValues } from '../../../../pages/auth/signup';

interface Props {
  initialValues: SignupInitialValues,
  handleSubmit: (e: SignupInitialValues) => void
}

const SignupContainer = ({ initialValues, handleSubmit }: Props) => {
  return (
    <FormContainer
      title={`Sign up`}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
          >

            {/* input */}
            {
              signupInputs.map((item, index) =>
                <Input
                  placeholder={item.placeholder}
                  name={item.name}
                  type={item.type}
                  value={values[item.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors[item.name]}
                  touched={touched[item.name]}
                  useInForm
                  key={index * 24}
                />
              )
            }

            {/* signup button */}
            <SubmitButton text="signup" />
          </Box>
        )}
      </Formik>

      {/* switch to login */}
      <FormSwitcher type="login" />
    </FormContainer>
  );
};

export default SignupContainer;