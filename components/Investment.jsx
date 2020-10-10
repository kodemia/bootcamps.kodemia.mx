import PaymentPlan from './PaymentPlan'

export default function Investment ({ investment, paymentPlan }) {
  return (
    <section className='investment'>
      <div className='container'>
        <div className='subtitle'>La inversión</div>
        <div className='title'>Encuentra la mejor opción de <span>financiamiento</span></div>
        <div className='description'>
          El Bootcamp tiene una inversión de{' '}<span>{investment}</span><br /><br />
          Si tus causas y deseo de prepararte superan tu capacidad de pago,{' '}
          no descartes la oportunidad, encontremos la solución juntos.
        </div>
        <PaymentPlan paymentPlan={paymentPlan} />
      </div>
    </section>
  )
}
