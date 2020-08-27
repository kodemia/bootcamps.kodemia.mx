
export default function Metric ({ description, stats }) {
	
	return (
		<div className='metric'>
			<div className='container'>
				<div className='stats'>{stats}</div>
				<div className='description'>{description}</div>
			</div>
		</div>
	)
}
