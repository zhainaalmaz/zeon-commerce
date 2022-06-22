import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../authForm/Form';
import { setUser } from '../../../store/userSlice';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import cls from './SignUp.module.css';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/login');
      })
      .catch(console.error);
  };

  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <h4 className={cls.title}>Sign up</h4>
        <Form title="register" handleClick={handleRegister} />
        <div className={cls.signup_link}>
          <p>
            Already have account?
            <NavLink className={cls.linkTo} to="/login">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
