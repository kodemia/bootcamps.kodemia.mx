
import { useState } from 'react'
import classnames from 'classnames'

const testimonials = [
  {
    employment: 'Desarrolladora Front End en Conekta',
    quote: 'Ofrecen un bootcamp muy completo, con excelentes mentores, buenos amigos y una gran comunidad',
    name: 'Rosa Ortega',
    photo: '/images/koder-frame-2.png',
    fontSize: 'big'
  },
  {
    employment: 'Desarrollador Full Stack en E-Drive',
    quote: 'El ambiente de trabajo y de comunidad es muy importante para el desarrollo de las personas y en kodemia lo encuentras de una manera inigualable. La mejor experiencia que me llevo, es la de comunidad y una comunidad que se preocupa y te procura aún cuando no eres alumno',
    name: 'Alejandro Cruz',
    photo: '/images/koder-frame-3.png',
    fontSize: 'medium'
  },
  {
    employment: 'Desarrollador Full Stack en E-Drive',
    quote: 'Excelente parrilla de mentores, su principal interés es que aprendas a aprender',
    name: 'Oscar Deleyja',
    photo: '/images/koder-frame-4.png',
    fontSize: 'big'
  }
]

export default function Testimonials () {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0)

  const next = () => {
    const nextIndex = (activeTestimonialIndex + 1) > (testimonials.length - 1)
      ? 0
      : activeTestimonialIndex + 1
    setActiveTestimonialIndex(nextIndex)
  }

  const previuos = () => {
    const previousIndex = (activeTestimonialIndex - 1) < 0
      ? testimonials.length - 1
      : activeTestimonialIndex - 1
    setActiveTestimonialIndex(previousIndex)
  }

  return (
    <section className='testimonials'>
      <div className='container'>
        {
          testimonials.map(({ employment, quote, name, photo, fontSize }, index) => {
            return (
              <div
                className={classnames(
                  'testimonial',
                  {
                    inactive: (activeTestimonialIndex !== index),
                    active: (activeTestimonialIndex === index)
                  }
                )}
                key={`testimonial-${index}`}
              >
                <div className='top'>
                  <img className='quote-mark' src='/icons/quote.svg' alt='quote mark' />
                  <div className={classnames('quote', fontSize)}>{quote}</div>
                </div>
                <div className='bottom'>
                  <div className='autor'>
                    <div className='photo'>
                      <img src={photo} alt={name} />
                    </div>
                    <div className='name'>{name}</div>
                    <div className='employment'>{employment}</div>
                  </div>
                </div>
              </div>
            )
          })
        }
        <div className='back-forward-buttons'>
          <div className='container-buttons'>
            <img
              className='back'
              src='/icons/back.svg'
              alt='back'
              onClick={() => previuos()}
            />
            <img
              className='forward'
              src='/icons/forward.svg'
              alt='forward'
              onClick={() => next()}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
