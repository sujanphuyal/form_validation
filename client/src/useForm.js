import { useState, useEffect } from 'react';
import Axios from 'axios';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    hobby: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addUser = ()=>{
    Axios.post('http://localhost:5000/user',{
      name:values.name,
      email:values.email,
      phone:values.phone,
      gender:values.gender,
      hobby:values.hobby
    }).then(()=>{
      console.log("data inserted successfully");
    })
  }

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
    console.log(values);
    addUser();

  };
  
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    // [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;