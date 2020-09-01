import Link from 'next/link'

import Hero from '../components/Hero'
import Metric from '../components/Metric'
import Metrics from '../components/Metrics'
import NavBar from '../components/NavBar'

const metrics = [
	{
		description: 'Horas en clases y talleres complementarios',
		value: '+340'
	},
	{
		description:'Certificaciones de valor curricular e internacional',
		value:'2'
	},
	{
		description: 'Horas de prácticas en desafíos y proyectos',
		value: '+180'	
	},
	{
		description: 'De colocación de egresados de Kodemia',
		value: '90%'
	}
]

export default function JsPresential() {
	return (
		<>
		<NavBar />
		<Hero
			className='hero'
			apply='/apply'
			brochureDesktop = '/brochures/JS_PRESENTIAL-D.pdf'
			brochureMobile = '/brochures/JS_PRESENTIAL-M.pdf'
			image = '/images/hero.png'
			languaje = 'Javascript'
			modality = 'Modo presencial'
		>
			Transforma tu vida en <span>19 semanas</span> de aprendizaje intensivo, 
			donde desarrollarás todas las habilidades para programar 
			una aplicación web desde cero
		</Hero>
		<Metrics metrics={metrics} />

		<h5>
		<Link href = "/" >
			<a > Back to home </a>
		</Link>
		</h5>
		</>
	)
}