import { useState } from 'react';
import Button from '../../../ui/Button';
import cls from './Form.module.css';

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className={cls.layout}>
      <form className={cls.form}>
        <div className={cls.form_input}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>
        <div className={cls.form_input}>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
          />
        </div>
        <Button
          style={{ height: '44px', marginTop: 70 }}
          onClick={() => handleClick(email, pass)}
        >
          {title}
        </Button>
      </form>
    </div>
  );
};

export { Form };
