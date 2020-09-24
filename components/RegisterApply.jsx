import Navbar from '../components/NavBar'
import FormApply from './FormApply'

export default function RegisterApply ({ language, modality }) {
  return (
    <>
      <Navbar
        language={language}
        modality={modality}
      />
      <div className='register-apply'>
        <div className='container'>
          <section className='content'>
            <div className='info-section'>
              <p className='title'>
                Aplica al Bootcamp Full Stack con <span>{language}</span>
              </p>
              <p className='text'>
                Te contactaremos lo más pronto posible para coordinar una entrevista personal
              </p>
            </div>
            <div className='form-section'>
              <FormApply
                language={language}
                modality={modality}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
