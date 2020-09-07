
export default function Workshop({ bullets, subtitle, title }) {

  return (
    <div className="workshop">
      <div className='subtitle'>{subtitle}</div>
      <div className='title'>{title}</div>
      <div className='bullets'>
        { bullets.map((bullet, index) => (
            <div
              className='bullet'
              dangerouslySetInnerHTML={{__html:`✓ ${bullet}`}}
              key={`bullet-${index}`}
            >
            </div>
          )
        )}
      </div>
    </div>
  )
}