import Metric from './Metric'

export default function Metrics ({ metrics }) {
  return (
    <div className='metrics'>
      <div className='container'>
        {metrics.map((metric, index) => {
          return (
            <Metric
              value={metric.value}
              description={metric.description}
              key={`metric-${index}`}
            />
          )
        })}
      </div>
    </div>
  )
}
