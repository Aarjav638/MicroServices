import React, { useRef, useState } from 'react';
import '../../css/signin.css';

const Register = () => {
  const [username,setUserName]=useState('')
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
const generateUsername = (name: string) => {
    const base = name.replace(/\s+/g, '').toLowerCase();
    const randomSuffix = Math.random().toString(36).substring(2, 7);
    return base + randomSuffix;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.value;
    if (inputName) {
      const generated = generateUsername(inputName);
      setUserName(generated);
    } else {
      setUserName('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent default form submission
    if (email.current && password.current&&username) {
      console.log(email.current.value, password.current.value,username);
    }
  };
  return (
    <form className='SignInContainer' onSubmit={handleSubmit}>
      <label className='label'>Username:</label>
      <input
        type='text'
        required
        placeholder='JohnWalker'
       pattern="^[a-zA-Z0-9]+$"
        inputMode='text'
        value={username}
        disabled={true}
      />
      <label className='label'>Name:</label>
      <input
        type='text'
        required
        placeholder='JohnWalker'
       pattern="^[a-zA-Z ]+$"
        inputMode='text'
        ref={name}
        onChange={handleNameChange}
      />
      <label className='label'>Email:</label>
      <input
        type='email'
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

      <button type='submit'>Register</button>
    </form>
  );
};

export default Register;
