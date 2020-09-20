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
          maxLength={80}
          ref={register({ required: true })}
          type='text'
        />
        <label className='input-label' htmlFor='lastName'>Apellido</label>
        <input
          className='input-field'
          name='lastName'
          placeholder='Apellido'
          maxLength={100}
          ref={register({ required: true })}
          type='text'
        />
        <label className='input-label' htmlFor='email'>Email</label>
        <input
          className='input-field'
          name='email'
          placeholder='correo@example.com'
          ref={
            register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })
          }
          type='email'
        />
        <div className='pretty  p-bigger p-default p-curve p-smooth checkbox'>
          <input type='checkbox' name='termsAndConditions' ref={register({ required: true })} />
          <div className='state p-info-o'>
            <label>
              Acepto los
              <a href='/' target='__blank'>
                términos y condiciones
              </a>
            </label>
          </div>
        </div>
        <input className='submit' type='submit' />
      </form>
    </div>
  )
}
