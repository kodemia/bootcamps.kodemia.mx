import Detail from './Detail'

export default function Details ({ details }) {

	return (
		<div className='details'>
			<div className='container'>
				{ details.map((detail, index) => {

					return (
						<Detail
							icon={detail.icon}
							title={detail.title}
							description={detail.description}
							note={detail.note}
							key={`detail-${index}`}
						/>
					)
				})}	
			</div>
		</div>
	)
}
