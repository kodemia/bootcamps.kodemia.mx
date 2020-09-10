const supportItems = [
  {
    icon: '/icons/users.svg',
    title: 'Mentoría personalizada',
    text: 'Trabajaremos en tus objetivos tanto del Bootcamp como personales que planteamos desde el día uno'
  },
  {
    icon: '/icons/heart.svg',
    title: 'Aprende en Comunidad',
    text: 'Buscamos formar las condiciones para generar una comunidad internacional de aprendizaje que esta contigo, antes, durante y después del Bootcamp'
  },
  {
    icon: '/icons/hack-the-job.svg',
    title: 'Hack the Job',
    text: 'Es un método de reclutamiento disruptivo para las empresas que buscan programadores. A partir de la semana 7 puedes participar en los retos y colocarte'
  },
  {
    icon: '/icons/video.svg',
    title: 'Kodemia Live',
    text: 'Si por alguna razón un día no puedes asistir, puedes ver la clase de manera remota en VIVO. Además  consultar tus clases pasadas OnDemand'
  }
]

export default function Support () {
  return (
    <section className='support'>
      <div className='container'>
        <header>
          <p className='title'>
            Soporte Kodemia
          </p>
          <p className='heading'>
            Además cuentas con <span>comunidad</span> y mucho más
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
