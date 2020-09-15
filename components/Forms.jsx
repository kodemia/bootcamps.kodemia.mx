import React from 'react'
import { useForm } from 'react-hook-form'

export default function Forms() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)
  console.log(errors)

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <input
        className='input'
        type='text'
        placeholder='First name'
        name='First name'
        ref={register({ required: true, maxLength: 80 })}
      />
      <input
        className='input'
        type='text'
        placeholder='Last name'
        name='Last name'
        ref={register({ required: true, maxLength: 100 })}
      />
      <input
        className='input'
        type='text'
        placeholder='Email'
        name='Email'
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {/* <div className='terms-conditions'> */}
      <label className='checkbox-label' htmlFor='conditions'>
        <input
          className='check'
          id='conditions'
          type='checkbox'
          placeholder='Acepto los términos y condiciones'
          name='Acepto los términos y condiciones'
          ref={register({ required: true })}
        />
        <span className='checkmark' />
          Acepto los términos y condiciones
      </label>
      {/* </div> */}
      <input className='submit' type='submit' />
    </form>
  )
}
