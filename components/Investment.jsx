import PaymentPlan from './PaymentPlan'

export default function Investment ({ paymentPlan }) {
  return (
    <section className='investment'>
      <div className='container'>
        <div className='subtitle'>La inversión</div>
        <div className='title'>Encuentra la mejor opción de <span>financiamiento</span></div>
        <div className='description'>
          El Bootcamp Full Stack con Javascript tiene una inversión de{' '}
          <span>$75,000 MXN (Incluye IVA) + Inscripción de $6,000</span>.
          Si tus causas y deseo de prepararte superan tu capacidad de pago,{' '}
          no te preocupes ni descartes la oportunidad, encontremos la solución juntos.{' '}
          Ponte en contacto con nosotros, nos interesa mucho escucharte
        </div>
        <PaymentPlan paymentPlan={paymentPlan} />
      </div>
    </section>
  )
}
