import Vimeo from '@u-wave/react-vimeo'

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
          <Vimeo
            // background
            className='video'
            showByline={false}
            // responsive={false}
            responsive
            frameborder='0'
            showTitle={false}
            video='440496401'
            height='360' // '360'
            width='540' // '540'
            allowfullscreen
          />
        </div>
      </div>
    </div>
  )
}
