import Module from './Module'

export default function Modules ({ modules }) {
  return (
    <div className='modules'>
      {modules.map((module, index) => {
        return (
          <Module
            image={module.image}
            period={module.period}
            text={module.text}
            name={module.name}
            key={`module-${index}`}
          />
        )
      })}
    </div>
  )
}
