import Achievements from './Achievements'

export default function Career({ achievements }) {

  return (
    <div className='career'>
      <div className='container'>
        <div className='card'>
          <div className='card-container'>
            <div className='subtitle'>Desarrollo Profesional</div>
            <div className='title'>Parte de lo que lograrás con el <span>Career coach</span></div>
            <Achievements achievements={achievements} />
          </div>
        </div>
      </div>
    </div>
  )

}