
export default function Card({title, children}) {
  return (
    <div className="card-container">
      <div className="card-title">
				<h1>{title}</h1>
			</div>
			<div className='card-content'>
        {children}
			</div>
    </div>
  )
}
