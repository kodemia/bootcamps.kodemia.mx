
import Career from '../components/Career'
import Details from '../components/Details'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import Metrics from '../components/Metrics'
import NavBar from '../components/NavBar'
import Program from '../components/Program'
import Workshops from '../components/Workshops'

const achievements = [
  {
    name: 'personalización de currículum',
    text: 'de forma estratégica mostrarás en esta herramienta tus habilidades y tu potencial como candidato ante una vacante'
  },
  {
    name: 'estilo de aprendizaje',
    text: 'conocer tu estilo de aprendizaje te ayudará a asimilar mucho mejor todo lo que estás por aprender en tu nueva vida como developer'
  },
  {
    name: 'proyección profesional',
    text: 'conocerás todas las posibilidades de crecimiento que puedes tener en el sector Tech para que tomes las mejores decisiones de crecimiento; según tus objetivos y metas'
  },
  {
    name: 'estrategias de búsqueda de empleo',
    text: 'Eres una persona única y diferente a otros candidatos por esto necesitas crear una estratégia de búsqueda de empleo acorde a tus fortalezas y metas profesionales'
  },

]

const details = [
  {
    icon: '/icons/calendar.svg',
    description: 'del 19 de octubre al 1 de febrero',
    title: 'fechas',
  },
  {
    icon: '/icons/clock.svg',
    description: 'lunes a viernes de 19 a 22 hrs',
    note: '7 sábados de 10 a 18 hrs | GMT-6',
    title: 'horarios',
  },
  {
    icon: '/icons/box.svg',
    description: '19 semanas de aprendizaje intensivo',
    note: '340 horas 100% prácticas',
    title: 'programa',
  },
  {
    icon: '/icons/map-pin.svg',
    description: 'tonalá 10, col. Roma Norte, CDMX',
    note: '(Remoto por Covid-19)',
    title: 'lugar',
  },
]

const metrics = [
  {
    description: 'horas en clases y talleres complementarios',
    value: '+340',
  },
  {
    description: 'certificaciones de valor curricular e internacional',
    value: '2',
  },
  {
    description: 'horas de prácticas en desafíos y proyectos',
    value: '+180',
  },
  {
    description: 'de colocación de egresados de Kodemia',
    value: '90%',
  },
]

const modules = [
  {
    image: '/images/class-room.png',
    name: 'pre-Bootcamp',
    period: '+40 horas',
    text: 'desde tu inscripción desarrollarás las bases a través de cursos online, presenciales y asesoría personalizada',
  },
  {
    image: '/images/kode-day.png',
    name: 'modulo Front End',
    period: 'semana 1 - 6',
    text: 'ahora crearás un sitio dinámico con HTML, CSS, Bootstrap, SASS y Javascript aplicando tu conocimiento en una página web dinámica y funcional',
  },
  {
    image: '/images/mentor.png',
    name: 'modulo Back End',
    period: 'semana 7 - 11',
    text: 'aprenderás a crear el funcionamiento de tu desarrollo en el servidor, utilizando Node, Mongo y Express: la base de datos y crearás tu propia API',
  },
  {
    image: '/images/koders.png',
    name: 'front End reactivo',
    period: 'semana 12 - 15',
    text: 'crearás el Front End con ReactJS con componentes de código reutilizable, aprendiendo a ahorrar tiempo y logrando desarrollos más dinámicos',
  }
]

const workshops = [
  {
    subtitle: 'talleres',
    title: '7 talleres sabatinos',
    bullets: [
      'principios de UX/UI',
      'jamStack',
      'scrum Fundamentals',
      'xtreme Programming',
      'github Avanzado',
      'negocios TI',
      'AWS Cloud'
    ]
  },
  {
    subtitle: 'certificaciones',
    title: '2 certificaciones',
    bullets: [
      'certificación SCRUM<br />Te acredita en la metodología de trabajo ágil SCRUM que te dará valor curricular<br /><br />',
      'certificación IBM<br />Valida tus conocimientos en IBM Cloud y los microservicios que ofrece'
    ]
  },
]

export default function JsPresential() {
  return (
    <div>
      <NavBar />
      <Hero
        className='hero'
        apply='/apply'
        brochureDesktop='/brochures/JS_PRESENTIAL-D.pdf'
        brochureMobile='/brochures/JS_PRESENTIAL-M.pdf'
        image='/images/hero.png'
        languaje='Javascript'
        modality='Lifetime Bootcamp'
      >
        Transforma tu vida en <span>19 semanas</span> de aprendizaje intensivo,
        donde desarrollarás todas las habilidades para programar una aplicación
        web desde cero
      </Hero>
      <Metrics metrics={metrics} />
      <Details details={details} />
      <Introduction video='/images/video-testimonial.png'>
        Nuestro Bootcamp es un entrenamiento intensivo que te llevará{' '}
        <span>desde cero hasta desarrollador Full Stack</span>. Lograrás crear
        una aplicación web completa empleando{' '}
        <span>UX/UI, metodología SCRUM, FrontEnd y BackEnd con Javascript</span>
        , desplegado en la nube, creando y consumiendo servicios de terceros
      </Introduction>
      <Program
        brochureDesktop='/brochures/JS_PRESENTIAL-D.pdf'
        brochureMobile='/brochures/JS_PRESENTIAL-M.pdf'
        modules={modules}
      />
      <Workshops workshops={workshops} />
      <Career achievements={achievements}/>
    </div>
  )
}
