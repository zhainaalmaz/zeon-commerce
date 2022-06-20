import React from 'react';
import { Link } from 'react-router-dom';
import { SignUp } from '../../../components/auth/SignUp';

const RegisterPage = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignUp />
      <p>
        Already have account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
