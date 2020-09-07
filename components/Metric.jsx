
export default function Metric ({ description, value }) {
  return (
    <div className='metric'>
      <div className='value'>{value}</div>
      <div className='description'>{description}</div>
    </div>
  )
}
