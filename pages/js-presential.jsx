import Link from 'next/link'

import NavBar from '../components/NavBar'
import Hero from '../components/Hero'

export default function JsPresential() {
	return (
		<>
		<NavBar />
		<Hero
			className='hero'
			brochureDesktop = '/brochures/JS_PRESENTIAL-D.pdf'
			brochureMobile = '/brochures/JS_PRESENTIAL-M.pdf'
			apply='/apply'
			image = '/images/hero.png'
			languaje = 'Javascript'
			modality = 'Modo presencial'
		>
			Transforma tu vida en <span>19 semanas</span> de aprendizaje intensivo, 
			donde desarrollarás todas las habilidades para programar 
			una aplicación web desde cero
		</Hero> 
		<h5>
		<Link href = "/" >
			<a > Back to home </a>
		</Link>
		</h5>
		</>
	)
}