import Achievement from './Achievement'

export default function Achievements({ achievements }) {

  return (
    <div className='achievements'>
      { achievements.map((achievement, index) => {
        return (
          <Achievement
            key={`achievement-${index}`}
            name={achievement.name}
            text={achievement.text}
          />
        )
      })}
    </div>
  )
}