
export default function PaymentCondition ({ name, text }) {
  return (
    <div className='payment-condition'>
      <div className='name'>{name}</div>
      <div className='text'>{text} </div>
    </div>
  )
}
