
export default function MeetOurKoders () {
  return (
    <div className='meet-our-koders'>
      <div className='container'>
        <div className='info-container'>
          <div className='title'>
            Conoce la historia de Melisa
          </div>
          <div className='text'>
            Les presentamos a Mell de la octava generación, que nos comparte cómo ha sido su experiencia hasta el momento
            en el Bootcamp, cuando no tienes conocimientos previos. Ella está por llegar a la recta final
            y presentar su proyecto en los Kodeawards.
          </div>
        </div>
        <div className='video-container'>
          <div className='video'>
            <video controls poster='/images/video-meet-our-koders.png'>
              <source
                src='/videos/meet_our_koders.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}
