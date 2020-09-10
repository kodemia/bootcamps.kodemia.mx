
const testimonials = [
  {
    employment: 'Desarrolladora Front End en Iterando',
    quote: 'El bootcamp de Kodemia marcó una diferencia en mi vida, tanto a nivel profesional como a nivel personal. Cada uno de los mentores cuenta con mucho conocimiento y una gran experiencia que comparten dentro y fuera del aula. Todos en Kodemia están comprometidos en ayudarte a lograr tus objetivos. Además, la comunidad es un gran apoyo durante todo éste proceso de aprendizaje y desarrollo; siempre hay alguien dispuesto a apoyarte.',
    name: 'Brenda Gonzalez',
    photo: '/images/koder-frame-1.png'
  },
  // {
  //   employment: 'Desarrolladora Front End en Coneckta',
  //   quote: 'Ofrecen un bootcamp muy completo, con excelentes mentores, buenos amigos y una gran comunidad',
  //   name: 'Rosa Ortega',
  //   photo: '/images/koder-frame-2.png'
  // },
  // {
  //   employment: 'Desarrollador Full Stack en E-Drive',
  //   quote: 'El ambiente de trabajo y de comunidad es muy importante para el desarrollo de las personas y en kodemia lo encuentras de una manera inigualable. La mejor experiencia que me llevo, es la de comunidad y una comunidad que se preocupa y te procura aún cuando no eres alumno',
  //   name: 'Alejandro Cruz',
  //   photo: '/images/koder-frame-3.png'
  // },
  // {
  //   employment: 'Desarrollador Full Stack en E-Drive',
  //   quote: 'Excelente parrilla de mentores, su principal interés es que aprendas a aprender',
  //   name: 'Oscar Deleyja',
  //   photo: '/images/koder-frame-4.png'
  // }
]

export default function Testimonials () {
  return (
    <section className='testimonials'>
      <div className='container'>
        {
          testimonials.map(({ employment, quote, name, photo }, index) => {
            return (
              <div className='testimonial' key={`testimonial-${index}`}>
                <div className='top'>
                  <img className='quote-mark' src='/icons/quote.svg' alt='quote mark' />
                  <div className='quote'>{quote}</div>
                </div>
                <div className='bottom'>
                  <div className='autor'>
                    <div className='photo'>
                      <img src={photo} alt={name} />
                    </div>
                    <div className='name'>{name}</div>
                    <div className='employment'>{employment}</div>
                  </div>
                  <div className='back-forward-buttons'>
                    <img className='back' src='/icons/back.svg' alt='back' />
                    <img className='forward' src='/icons/forward.svg' alt='forward' />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
