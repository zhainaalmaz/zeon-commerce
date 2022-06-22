import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../authForm/Form';
import { setUser } from '../../../store/userSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import cls from './Login.module.css';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/');
      })
      .catch(() => alert('Invalid user!'));
  };

  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <h4 className={cls.title}>Login</h4>
        <Form title="sign in" handleClick={handleLogin} />
        <div className={cls.signup_link}>
          <p>
            Don't have account?
            <NavLink className={cls.linkTo} to="/signup">
              SignUp
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
