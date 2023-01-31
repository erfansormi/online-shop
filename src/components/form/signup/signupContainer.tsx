import React from 'react';
import { useRouter } from 'next/router';

// formik & yup
import { Formik } from 'formik';
import * as Yup from 'yup';

// icons
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

// mui
import Box from '@mui/material/Box';

// components
import Input from '../input/input';
import FormContainer from '../formContainer/formContainer';
import FormSwitcher from '../formSwitcher';
import SigninOtherWay from '../signinOtherWay';
import SubmitButton from '../submitButton';

// types
interface InitialValues {
  phone: string,
  email: string
}

interface Props {
  setSignupMethod: React.Dispatch<React.SetStateAction<"email" | "phone">>,
  signupMethod: "email" | "phone",
  initialValues: InitialValues,
  handleSubmit: (e: InitialValues) => void
}

const SignupContainer = ({ signupMethod, setSignupMethod, initialValues, handleSubmit }: Props) => {

  // validation
  const phoneSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(/^09[0-9]{9}$/, "Phone number is not valid!")
      .required('Phone number is required!'),
  });

  const emailSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required!")
      .email("Invalid email!"),
  });

  return (
    <FormContainer
      title={`Sign up`}
      subTitle={`with ${signupMethod == "email" ? "email address" : "phone number"}`}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={signupMethod == "phone" ? phoneSchema : emailSchema}
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
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            {/* input */}
            <div className='w-full'>
              <Input
                placeholder={`Enter ${signupMethod == "phone" ? "phone number" : "email address"}`}
                name={signupMethod}
                type={"text"}
                value={values[signupMethod]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors[signupMethod]}
                touched={touched[signupMethod]}
                useInForm
              />
            </div>

            {/* signup button */}
            <SubmitButton text="next" />

          </Box>
        )}
      </Formik>

      {/* signup to other way */}
      <SigninOtherWay
        title='Or signup with'
        buttonText={signupMethod == "email" ? "phone number" : "email"}
        Icon={signupMethod == "phone" ? <AiOutlineMail /> : <AiOutlinePhone />}
        handleClick={() => setSignupMethod(signupMethod == "email" ? "phone" : "email")}
      />

      {/* switch to login */}
      <FormSwitcher type="login" />
    </FormContainer>
  );
};

export default SignupContainer;