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
      const resp = await fetch('https://httpstat.us/200', {
        method: 'POST',
        body: JSON.stringify({ ...data, language, modality }),
        headers: { 'Content-Type': 'application/json' }
      })
      if (!resp.ok) throw new Error('¡Algo salió mal! intentalo más tarde')
      setIsSubmitting(false)
      router.push('aplicar/gracias')
    } catch (error) {
      setIsSubmitting(false)
      setSubmitError(error.message)
    }
  }

  return (
    <div className='register-form apply-form'>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label className='input-label' htmlFor='firstName'>Nombre</label>
        <input
          className='input-field'
          name='firstName'
          maxLength={80}
          placeholder='Nombre'
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
          maxLength={100}
          placeholder='Apellido'
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
              alwaysDefaultMask
              defaultMask='..-....-....'
              country='mx'
              countryCodeEditable={false}
              localization={es}
              placeholder='55 3333 5555'
              preferredCountries={['mx', 'co', 'pe', 've', 'ar']}
              regions={['america']}
              type='tel'
              inputProps={{
                autoFocus: false,
                name: 'phone',
                pattern: '^[\\+]?[(]?[0-9]{2,}[)]?[-\\s\\.]?[0-9]{2,}[-\\s\\.]?[0-9]{2,}[-\\s\\.]?[0-9]{2,}$',
                required: true
              }}
            />
          )}
        />
        <label className='input-label' htmlFor='contact-media'>¿Dónde nos conociste?</label>
        <select
          className='input-field custom-select'
          name='contact-media'
          ref={register({ required: 'Es requerido seleccionar una opción' })}
          required
        >
          <option value='Facebook'>Facebook</option>
          <option value='Instagram'>Instagram</option>
          <option value='Youtube'>Youtube</option>
          <option value='Twitter'>Twitter</option>
          <option value='Otro'>Otro</option>
        </select>
        <label className='input-label' htmlFor='application-motive'>¿Por qué quieres aplicar a Kodemia?</label>
        <textarea
          className='input-field field-area'
          name='application-motive'
          placeholder='Quiero aprender...'
          ref={
            register({
              required: true,
              maxLength: 500
            })
          }
          required
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

// import React from 'react'
// import Link from 'next/link'
// import { useForm } from 'react-hook-form'

// export default function FormInterview () {
//   const { register, handleSubmit, errors } = useForm()
//   const onSubmit = data => console.log(data)
//   console.log(errors)

//   return (
//     <div className='register-form brochure-form'>
//       <form className='form' onSubmit={handleSubmit(onSubmit)}>
//         <label className='input-label' htmlFor='firstName'>Nombre</label>
//         <input
//           className='input-field'
//           name='firstName'
//           placeholder='Nombre'
//           maxLength={80}
//           ref={register({ required: true })}
//           type='text'
//         />
//         <label className='input-label' htmlFor='lastName'>Apellido</label>
//         <input
//           className='input-field'
//           name='lastName'
//           placeholder='Apellido'
//           maxLength={100}
//           ref={register({ required: true })}
//           type='text'
//         />
//         <label className='input-label' htmlFor='email'>Email</label>
//         <input
//           className='input-field'
//           name='email'
//           placeholder='correo@example.com'
//           ref={
//             register({
//               required: true,
//               pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//             })
//           }
//           type='email'
//         />
//         <label className='input-label' htmlFor='phone'>Teléfono con WhatsApp</label>
//         <input
//           className='input-field'
//           name='phone'
//           placeholder='55 3333 5555'
//           ref={
//             register({
//               required: true,
//               minLength: 10,
//               maxLength: 13
//             })
//           }
//           type='tel'
//         />
//         <label className='input-label' htmlFor='contact-media'>¿Dónde nos conociste?</label>
//         <select className='input-field' name='contact-media' ref={register({ required: true })}>
//           <option value='Facebook'>Facebook</option>
//           <option value='Instagram'>Instagram</option>
//           <option value='Youtube'>Youtube</option>
//           <option value='Twitter'>Twitter</option>
//           <option value='Otro'>Otro</option>
//         </select>
//         <label className='input-label' htmlFor='phone'>¿Por qué quieres aplicar a Kodemia?</label>
//         <textarea
//           className='input-field'
//           name='application-motive'
//           placeholder='Quiero aprender ...'
//           ref={
//             register({
//               required: true,
//               maxLength: 200
//             })
//           }
//         />
//         <div className='pretty  p-bigger p-default p-curve p-smooth checkbox'>
//           <input type='checkbox' name='termsAndConditions' ref={register({ required: true })} />
//           <div className='state p-info-o'>
//             <label>
//               Acepto los
//               <a href='/' target='__blank'>
//                 términos y condiciones
//               </a>
//             </label>
//           </div>
//         </div>
//         <Link href='/javascript-lifetime/aplicar/gracias'>
//           <input className='submit' type='submit' />
//         </Link>
//       </form>
//     </div>
//   )
// }
