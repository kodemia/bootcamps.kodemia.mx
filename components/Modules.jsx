import Module from './Module'

export default function Modules ({ modules }) {
  return (
    <div className='modules'>
      {modules.map((module, index) => {
        return (
          <Module
            image={module.image}
            key={`module-${index}`}
            name={module.name}
            period={module.period}
            text={module.text}
          />
        )
      })}
    </div>
  )
}
