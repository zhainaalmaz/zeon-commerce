import { useState, useEffect } from 'react';

const UseForm = () => {
  const [values, setValues] = useState({
    username: '',
    surname: '',
    email: '',
    country: '',
    city: '',
    number: '',
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //   const submitOrder = async (userData) => {
  //     setIsSubmitting(true);
  //     await fetch('https://zeon-users-default-rtdb.firebaseio.com/users', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         user: userData,
  //       }),
  //     });
  //     setIsSubmitting(false);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

    // submitOrder();
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    errors,
  };
};

export default UseForm;

export function validate(values) {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }
  if (!values.surname.trim()) {
    errors.surname = 'Surname required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!regex.test(values.email)) {
    errors.email = 'This is not a valid email format';
  }
  if (!values.country.trim()) {
    errors.country = 'Country required';
  }

  if (!values.city.trim()) {
    errors.city = 'City required';
  }
  if (!values.number.trim()) {
    errors.number = 'Phone number required';
  } else if (!phoneRegex.test(values.number)) {
    errors.number = 'This is not a valid number format';
  }
  return errors;
}
