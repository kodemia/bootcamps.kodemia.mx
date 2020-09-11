
import dateFormat from 'date-fns/format'

export default function Footer () {
  return (
    <footer className='footer'>
      <p>
        Kodemia® {dateFormat(new Date(), 'yyyy')}. Todos los derechos reservados  |  Política de privacidad
      </p>
      <p>
        Tonalá 10, Roma Norte, Cuauhtémoc, 03800 <br />
        Ciudad de México, México
      </p>
      <p>
        Orgullosamente hecho en México 🇲🇽
      </p>
    </footer>
  )
}
