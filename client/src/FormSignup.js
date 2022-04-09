import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );


  return (
    <div className='form-content'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        Connect With Us..!!
        </h1>
    
        <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your name'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Phone Number</label>
          <input
            className='form-input'
            type='text'
            name='number'
            placeholder='Enter your Phone Number'
            value={values.number}
            onChange={handleChange}
          />
          {errors.number && <p>{errors.number}</p>}
        </div>

        <div className='form-inputs'>
        <label className='form-label'>Gender:
            <input type="radio" value="Male" name="gender" onChange={handleChange}/>Male &ensp;
            <input type="radio" value="Female" name="gender" onChange={handleChange} />Female &ensp;
            <input type="radio" value="Others" name="gender" onChange={handleChange} />Others
        </label>
        {errors.gender && <p>{errors.gender}</p>}
        </div>

        <div className='form-inputs'>
        <label className='form-label'>Hobbies:
            <input type="checkbox" value="Read" name="hobby" onChange={handleChange}/>Reading &ensp;
            <input type="checkbox" value="Travel" name="hobby" onChange={handleChange} />Travelling &ensp;
            <input type="checkbox" value="Music" name="hobby" onChange={handleChange} />Listening to music
        </label>
        </div>

        <button className='form-input-btn' type='submit' >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default FormSignup;