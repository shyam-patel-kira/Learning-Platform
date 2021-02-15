import { useState, useEffect } from 'react';
// import axios from 'axios';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    // username: '',
    email: '',
    password: '',
    // password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  // const data = {
  //   email: this.email,
  //   password: this.password
  // }

  // axios.post('http://localhost:3000/login', data)
  //     .then(res => {
  //       console.log(res)
  //     })

      

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;