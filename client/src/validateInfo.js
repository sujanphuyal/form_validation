export default function validateInfo(values) {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = 'Username required..!!';
    }else if (values.name.length < 6) {
      errors.name = 'Username needs to be atleast 6 character long..!!';
    }
  
    if (!values.email) {
      errors.email = 'Email required..!!';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid..!!';
    }

    if (!values.number) {
      errors.number = 'Phone Number required..!!';
    } else if (!/(?:\+977[- ])?\d{2}-?\d{7,8}/.test(values.number)) {
      errors.number = 'Phone Number is invalid..!!';
    }

    if (!values.gender.trim()) {
      errors.gender = 'Please select your gender..!!';
    }
  
    return errors;
  }