export default function Module ({ image, name, period, text }) {
  return (
    <div className='module'>
      <div className='img-container'>
        <img className='image' src={image} alt='classroom' />
      </div>
      <div className='period'>{period}</div>
      <div className='name'>{name}</div>
      <div className='text'>{text}</div>
    </div>
  )
}
