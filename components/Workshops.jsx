import Workshop from './Workshop'

export default function Workshops ({ workshops }) {
  return (
    <div className='workshops'>
      <div className='container'>
        { workshops.map((workshop, index) => {
          return (
            <Workshop
              subtitle={workshop.subtitle}
              title={workshop.title}
              bullets={workshop.bullets}
              key={`workshop-${index}`}
            />
          )
        })}
      </div>
    </div>
  )
}
