
export default function Detail ({ icon, description, title, note }) {

	return (
		<div className='detail'>
			<div className='header'>
				<img className='icon' src={icon} />
				<div className='title'>{title}</div>
			</div>
			<div className='description'>{description}</div>
			{note ?
				<div className='note'>{note}</div>
				: ''}
		</div>
	)
}