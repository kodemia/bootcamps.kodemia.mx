import Link from 'next/link'

export default function Scholarship () {
  return (
    <div className='scholarship'>
      <div className='container'>
        <div className='card'>
          <div className='title'>aplicar por una beca del 5% hasta el 15%</div>
          <div className='text'>
            otorgamos becas basadas en tu actitud y tu talento.
             Puedes aplicar a través de una entrevista personalizada,
             durante la entrevista te diremos si es la resolución de tu solicitud
          </div>
          <div className='button'>
            <Link href='/interview'>
              <a className='interview'>Agenda una entrevista</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
