
export default function MeetOurKoders () {
  return (
    <section className='meet-our-koders'>
      <div className='container'>
        <div className='info-container'>
          <div className='title'>
            conoce la historia de Melissa
          </div>
          <div className='text'>
            Mel, nuestra koder de la octava generación, nos comparte {' '}
            cómo ha sido su experiencia hasta el momento en el Bootcamp, cuando {' '}
            comienzas desde cero.
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
    </section>
  )
}
