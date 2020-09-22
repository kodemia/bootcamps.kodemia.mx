import React, { useState } from 'react'
import fetch from 'node-fetch'
import { useRouter } from 'next/router'

import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import es from 'react-phone-input-2/lang/es.json'

export default function FormInterview ({ language, modality }) {
  const router = useRouter()
  const { register, handleSubmit, errors, control } = useForm()
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async data => {
    setIsSubmitting(true)
    try {
      const resp = await fetch('https://httpstat.us/400', {
        method: 'POST',
        body: JSON.stringify({ ...data, language, modality }),
        headers: { 'Content-Type': 'application/json' }
      })
      if (!resp.ok) throw new Error('¡Algo salió mal! intentalo más tarde')
      setIsSubmitting(false)
      router.push('entrevista/gracias')
    } catch (error) {
      setIsSubmitting(false)
      setSubmitError(error.message)
    }
  }

  return (
    <div className='register-form brochure-form'>
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
        <label className='input-label' htmlFor='phone'>Teléfono con WhatsApp</label>
        <Controller
          name='phone'
          control={control}
          as={(
            <PhoneInput
              className='input-field'
              country='mx'
              regions={['america']}
              preferredCountries={['mx', 'co', 'pe', 've', 'ar']}
              localization={es}
              countryCodeEditable={false}
              placeholder='55 3333 5555'
              type='tel'
              defaultMask='..-....-....'
              alwaysDefaultMask
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: false,
                pattern: '^[\\+]?[(]?[0-9]{2,}[)]?[-\\s\\.]?[0-9]{2,}[-\\s\\.]?[0-9]{2,}[-\\s\\.]?[0-9]{2,}$'
              }}
            />
          )}
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
