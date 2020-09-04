export default function Module ({ image, period, text, title }) {

  return (
    <div className='module'>
      <div className='container'>
        <img className='image' src={image} alt='classroom'/>
        <div className='period'>{period}</div>
        <div className='title'>{title}</div>
        <div className='text'>{text}</div>
      </div>
    </div>
  )
}
