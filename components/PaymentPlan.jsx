import PaymentCondition from './PaymentCondition'

export default function PaymentPlan ({ paymentPlan }) {
  return (
    <div className='payment_plan'>
      {paymentPlan.map((paymentCondition, index) => {
        return (
          <PaymentCondition
            key={`paymentCondition-${index}`}
            name={paymentCondition.name}
            text={paymentCondition.text}
          />
        )
      })}
    </div>
  )
}
