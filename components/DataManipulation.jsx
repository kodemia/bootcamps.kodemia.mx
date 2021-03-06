
export default function dataManipulation ({ isHideOnDesktop, isHideOnMobile }) {
  return (
    <section className={
        `data-manipulation
        ${isHideOnDesktop ? 'is-hide-on-desktop' : ''}
        ${isHideOnMobile ? 'is-hide-on-mobile' : ''}`
    }
    >
      <div className='container'>
        <div className='card'>
          <div className='content'>
            <div className='subtitle'>Data manipulation</div>
            <div className='title'>Data Manipulation</div>
            <div className='technologies'>
              <img className='pandas' src='/icons/pandas-logo.svg' alt='pandas tool' />
              <img className='scrapy' src='/icons/scrapy-logo.svg' alt='scrapy framework' />
            </div>
            <div className='text'>
              Con Pandas vas a analizar, justificar y tomar decisiones de tu desafío final para los KodeAwards.
              <br /><br />
              Y con Scrapy harás web scraping que te permitirá extraer datos de otros sitios e integrarlos en el análisis de tu desafío final.
              <br /><br />
              Con este módulo crearás experiencia real laboral en el análisis de datos sumado a tus habilidades como desarrollador web.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
