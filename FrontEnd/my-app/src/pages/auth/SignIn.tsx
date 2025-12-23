import React, { useRef } from 'react';
import '../../css/signin.css';

const SignIn = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent default form submission
    if (email.current && password.current) {
      console.log(email.current.value, password.current.value);
    }
  };
  return (
    <form className='SignInContainer' onSubmit={handleSubmit}>
      <label className='label'>Email:</label>
      <input
        type='email'
        autoFocus
        required
        placeholder='example@gmail.com'
        inputMode='email'
        ref={email}
      />

      <label className='label'>Password:</label>
      <input
        type='password'
        placeholder='xxxxxxx'
        inputMode='text'
        required
        ref={password}
      />

      <button type='submit'>Sign In</button>
    </form>
  );
};

export default SignIn;
