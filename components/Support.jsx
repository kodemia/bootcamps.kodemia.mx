const supportItems = [
  {
    icon: 'icon',
    title: 'title',
    text: 'text'
  },
  {
    icon: 'icon',
    title: 'title',
    text: 'text'
  },
  {
    icon: 'icon',
    title: 'title',
    text: 'text'
  },
  {
    icon: 'icon',
    title: 'title',
    text: 'text'
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
            Además cuentas con comunidad y mucho más
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
