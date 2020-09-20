const supportItems = [
  {
    icon: '/icons/users.svg',
    title: 'mentoría personalizada',
    text: 'trabajaremos en tus objetivos tanto del Bootcamp como personales que planteamos desde el día uno'
  },
  {
    icon: '/icons/heart.svg',
    title: 'aprende en Comunidad',
    text: 'buscamos formar las condiciones para generar una comunidad internacional de aprendizaje que esta contigo, antes, durante y después del Bootcamp'
  },
  {
    icon: '/icons/hack-the-job.svg',
    title: 'hack the Job',
    text: 'es un método de reclutamiento disruptivo para las empresas que buscan programadores. A partir de la semana 7 puedes participar en los retos y colocarte'
  },
  {
    icon: '/icons/video.svg',
    title: 'kodemia Live',
    text: 'si por alguna razón un día no puedes asistir, puedes ver la clase de manera remota en VIVO. Además  consultar tus clases pasadas OnDemand'
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
