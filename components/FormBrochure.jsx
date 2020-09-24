import React, { useState } from 'react'
import fetch from 'node-fetch'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import services from '../config/services.json'

export default function FormBrochure ({ language, modality }) {
  const router = useRouter()
  const { register, handleSubmit, errors } = useForm()
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async data => {
    setIsSubmitting(true)
    try {
      const resp = await fetch(services.apply.url, {
        method: 'POST',
        body: JSON.stringify({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          course: `${language}-${modality}`
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      if (!resp.ok) throw new Error('¡Algo salió mal! intentalo más tarde')
      setIsSubmitting(false)
      router.push('brochure/gracias')
    } catch (error) {
      setIsSubmitting(false)
      setSubmitError(error.message)
    }
  }

  return (
    <div className='register-form'>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label className='input-label' htmlFor='firstName'>Nombre</label>
        <input
          className='input-field'
          name='firstName'
          placeholder='Nombre'
          maxLength={80}
          ref={register({ required: 'Tu nombre es requerido' })}
          required
          type='text'
        />
        {errors.firstName &&
          <p> {errors.firstName.message} </p>}
        <label className='input-label' htmlFor='lastName'>Apellido</label>
        <input
          className='input-field'
          name='lastName'
          placeholder='Apellido'
          maxLength={100}
          ref={register({ required: 'Tu apellido es requerido' })}
          required
          type='text'
        />
        <label className='input-label' htmlFor='email'>Email</label>
        <input
          className='input-field'
          name='email'
          placeholder='correo@example.com'
          ref={
            register({
              required: 'Tu email es requerido',
              pattern: {
                message: 'Ingresa un email válido',
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              }
            })
          }
          required
          type='email'
        />
        <div className='pretty  p-bigger p-default p-curve p-smooth checkbox'>
          <input
            type='checkbox'
            name='termsAndConditions'
            ref={register({ required: 'Es necesario que aceptes los términos y condiciones' })}
            required
          />
          <div className='state p-info-o'>
            <label>
              Acepto los
              <a href='/' target='__blank'>
                términos y condiciones
              </a>
            </label>
          </div>
        </div>
        <input
          className='submit'
          type='submit'
          value={isSubmitting ? 'Enviando...' : 'Enviar'}
          disabled={isSubmitting}
        />
        {
          submitError &&
            <div className='error-message'>
              {submitError}
            </div>
        }
      </form>
    </div>
  )
}
