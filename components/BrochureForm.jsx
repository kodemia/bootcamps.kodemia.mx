import React from 'react'
import { useForm } from 'react-hook-form'

export default function BrochureForm () {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)
  console.log(errors)

  return (
    <div className='brochure-form'>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label className='input-label' htmlFor='firstName'>Nombre</label>
        <input
          className='input-field'
          name='firstName'
          placeholder='Nombre'
          ref={register({ required: true, minLength: 1, maxLength: 80 })}
          type='text'
        />
        <label className='input-label' htmlFor='lastName'>Apellido</label>
        <input
          className='input-field'
          name='lastName'
          placeholder='Apellido'
          ref={register({ required: true, minLength: 1, maxLength: 100 })}
          type='text'
        />
        <label className='input-label' htmlFor='email'>Email</label>
        <input
          className='input-field'
          name='email'
          placeholder='correo@example.com'
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          type='email'
        />
        <label className='checkbox'>
          <input
            className='check'
            name='termsAndConditions'
            ref={register({ required: true })}
            type='checkbox'
          />
          <span>
            Acepto los{' '}
            <a href='/' target='__blank'>
              términos y condiciones
            </a>
          </span>
        </label>
        <input className='submit' type='submit' />
      </form>
    </div>


    // <form className='form' onSubmit={handleSubmit(onSubmit)}>
    //   <div className='register'>
    //     <label className='input-label' htmlFor='firstName'>Nombre</label>
    //     <input
    //       className='input'
    //       name='firstName'
    //       placeholder='Nombre'
    //       ref={register({ required: true, minLength: 1, maxLength: 80 })}
    //       type='text'
    //     />
    //   </div>
    //   <div className='register'>
    //     <label className='input-label' htmlFor='lastName'>Apellido</label>
    //     <input
    //       className='input'
    //       name='lastName'
    //       placeholder='Apellido'
    //       ref={register({ required: true, minLength: 1, maxLength: 100 })}
    //       type='text'
    //     />
    //   </div>
    //   <div className='register'>
    //     <label className='input-label' htmlFor='email'>Email</label>
    //     <input
    //       className='input'
    //       name='email'
    //       placeholder='correo@example.com'
    //       ref={register({ required: true, pattern: /^\S+@\S+$/i })}
    //       type='email'
    //     />
    //   </div>
    //   <label className='checkbox' htmlFor='termsAndConditions'>
    //     <input
    //       // className='check'
    //       name='termsAndConditions'
    //       ref={register({ required: true })}
    //       type='checkbox'
    //     />
    //     {/* Acepto los<a href='/' target='__blank'> {' '}términos y condiciones</a> */}
    //     <span>
    //       Acepto los{' '}
    //       <a href='/' target='__blank'>
    //         términos y condiciones
    //       </a>
    //     </span>
    //   </label>
    //   <input className='submit' type='submit' />
    // </form>
  )
}
