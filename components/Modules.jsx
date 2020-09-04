import Module from './Module'

export default function Modules ({ modules }) {

  return (
    <div className='modules'>
      <div className='container'>
        { modules.map((module, index) => {
          return (
            <Module
              image={module.image}
              period={module.period}
              text={module.text}
              title={module.title}
              key={`module-${index}`}
            />
          )
        })

        }
      </div>
    </div>
  )
}