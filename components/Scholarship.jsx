import Link from 'next/link'

export default function Scholarship () {
  return (
    <section className='scholarship'>
      <div className='container'>
        <div className='card'>
          <div className='content'>
            <div className='title'>Aplicar por una beca del 5% hasta el 15%</div>
            <div className='text'>
            Aplica a través de una entrevista personalizada, lo más importante es tu talento y actitud
            </div>
            <div className='button'>
              <Link href='/javascript-lifetime/entrevista'>
                <a className='interview'>Solicita una entrevista</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
