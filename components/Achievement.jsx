

export default function Achievement({ name, text }) {

  return (
    <div className='achievement'>
      <div className='name'>{name}</div>
      <div className='text'>{text}</div>
    </div>
  )
}