
import Link from 'next/link'

export default function ReadyToTransform () {
  return (
    <section className='ready-to-transform'>
      <div className='container'>
        <div className='card'>
          <div className='card-container'>
            <div className='text'>
            ¿Listo para <span>transformar</span> <br /> tu vida programando?
            </div>
            <div className='button-container'>
              <Link href='/'>
                <a className='button'>
                Aplica al Bootcamp hoy
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
