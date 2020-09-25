
export default function KodeAwards ({ name, period, text }) {
  return (
    <section className='kode-awards'>
      <div className='container'>
        <div className='card'>
          <div className='content'>
            <div className='period'>{period}</div>
            <div className=''>
              <div className='name'>{name}</div>
              <div
                className='text'
                dangerouslySetInnerHTML={{ __html: `${text}` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
