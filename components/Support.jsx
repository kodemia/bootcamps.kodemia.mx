const supportItems = [
  {
    icon: '/icons/users.svg',
    title: 'mentoría personalizada',
    text: 'trabajaremos en tus objetivos del Bootcamp y en los personales que planteamos desde el día uno.'
  },
  {
    icon: '/icons/heart.svg',
    title: 'aprende en Comunidad',
    text: 'formamos las condiciones para generar una comunidad internacional de aprendizaje que esta contigo, antes, durante y después del Bootcamp.'
  },
  {
    icon: '/icons/hack-the-job.svg',
    title: 'hack the Job',
    text: 'es un método de reclutamiento disruptivo para las empresas que buscan programadores. A partir de la semana 7 participarás en los retos y podrás incorporarte de inmediato al sector laboral.'
  },
  {
    icon: '/icons/video.svg',
    title: 'kodemia Live',
    text: 'asiste a la clase en vivo desde cualquier parte del mundo y consulta todas tus clases en la plataforma.'
  }
]

export default function Support () {
  return (
    <section className='support'>
      <div className='container'>
        <header>
          <p className='title'>
            soporte Kodemia
          </p>
          <p className='heading'>
            además cuentas con <span>comunidad</span> y mucho más
          </p>
        </header>
        <div className='items'>
          {
            supportItems.map(({ icon, title, text }, index) => {
              return (
                <article
                  className='item'
                  key={`support-item-${index}`}
                >
                  <div className='icon'>
                    <img src={icon} alt={title} />
                  </div>
                  <div className='title'>
                    {title}
                  </div>
                  <div className='text'>
                    {text}
                  </div>
                </article>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
