import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// formik & yup
import { Formik } from 'formik';
import * as Yup from 'yup';

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../redux/store';

// icons
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

// mui
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

// notification
import { toastify } from '../../utils/toastify/toastifyFunc';

// components
import Input from '../input/input';
import Loading from '../../utils/loading/loading';
import FormContainer from '../formContainer/formContainer';
import FormSwitcher from '../formSwitcher';
import SigninOtherWay from '../signinOtherWay';

// types
interface Props {
  setSignupMethod: React.Dispatch<React.SetStateAction<"email" | "phone">>,
  name: "phone" | "email",
}

const SignupContainer = ({ name, setSignupMethod }: Props) => {
  const router = useRouter();

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

  // initialValues
  interface InitialValues {
    phone: string,
    email: string
  }

  const initialValues = {
    phone: "",
    email: ""
  }

  // form submit
  const handleSubmit = (e: InitialValues) => {
    router.push("/auth/verify")
  }

  return (
    <FormContainer title={`Sign up with ${name == "phone" ? "phone number" : "email address"}`} className='mt-0'>
      <Formik
        initialValues={initialValues}
        validationSchema={name == "phone" ? phoneSchema : emailSchema}
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
                placeholder={`Enter your ${name}`}
                name={name}
                type={"text"}
                value={values[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors[name]}
                touched={touched[name]}
              />
            </div>

            {/* signup button */}
            <div className="mb-3 w-full">
              <Button
                type='submit'
                className="w-full h-10 rounded-md"
                variant={"contained"}
              >
                next
              </Button>
            </div>
          </Box>
        )}
      </Formik>

      {/* signup to other way */}
      <SigninOtherWay
        title='Or signup with'
        buttonText={`${name == "email" ? "phone number" : "email"}`}
        Icon={name == "phone" ? <AiOutlineMail /> : <AiOutlinePhone />}
        handleClick={() => setSignupMethod(name == "email" ? "phone" : "email")}
      />

      {/* switch to login */}
      <FormSwitcher type="login" />

      {/* loading */}
      {/* <Loading loading={loading} /> */}
    </FormContainer>
  );
};

export default SignupContainer;