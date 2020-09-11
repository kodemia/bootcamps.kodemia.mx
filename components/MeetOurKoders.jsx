
export default function MeetOurKoders () {
  return (
    <div className='meet-our-koders'>
      <div className='container'>
        <div className='info-container'>
          <div className='title'>
            conoce la historia de Melisa
          </div>
          <div className='text'>
            les presentamos a Mell de la octava generación, que nos comparte {' '}
            cómo ha sido su experiencia hasta el momento en el Bootcamp, cuando {' '}
            no tienes conocimientos previos. Ella está por llegar a la recta final {' '}
            y presentar su proyecto en los Kodeawards
          </div>
        </div>
        <div className='video-container'>
          <div className='video'>
            <video controls poster='/images/video-meet-our-koders.png'>
              <source
                src='https://player.vimeo.com/external/440496401.sd.mp4?s=d21b55f368c4cb0f9fae3f1a1ecdd37fd9276eff&profile_id=165'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}
