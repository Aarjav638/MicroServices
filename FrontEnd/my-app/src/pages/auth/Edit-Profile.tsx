import React, { useRef } from 'react';
import '../../css/signin.css';
import { Form, useActionData, useLoaderData, useNavigation } from 'react-router';

const EditProfile = () => {
  const data = useLoaderData()
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
const tel = useRef<HTMLInputElement>(null);
  const actionData = useActionData()
const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'
  console.log(actionData)

  return (
    <Form className='SignInContainer'  method='post'>
      <label className='label'>Username:</label>
      <input
        type='text'
        required
        placeholder='JohnWalker'
       pattern="^[a-zA-Z0-9]+$"
        inputMode='text'
        value={data}
        disabled={true}
        name='username'
      />
      <label className='label'>Name:</label>
      <input
        type='text'
        required
        placeholder='JohnWalker'
       pattern="^[a-zA-Z ]+$"
        inputMode='text'
        ref={name}
         name='name'
      />
      <label className='label'>Email:</label>
      <input
        type='email'
        required
        placeholder='example@gmail.com'
        inputMode='email'
        ref={email}
         name='email'
      />

      <label className='label'>Password:</label>
      <input
        type='password'
        placeholder='xxxxxxx'
        inputMode='text'
        required
        ref={password}
        name='password'
      />
       <label className='label'>Phone:</label>
      <input
        type='tel'
        placeholder='+919876543210'
        inputMode='tel'
        required
        ref={tel}
        name='phone'
      />

      <button type='submit'>{submitting?'Saving...':'Save'}</button>
    </Form>
  );
};

export default EditProfile;
