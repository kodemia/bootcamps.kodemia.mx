import Career from '../../components/Career'
import Details from '../../components/Details'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Introduction from '../../components/Introduction'
import Investment from '../../components/Investment'
import KodeAwards from '../../components/Kodeawards'
import MeetOurKoders from '../../components/MeetOurKoders'
import Metrics from '../../components/Metrics'
import NavBar from '../../components/NavBar'
import Program from '../../components/Program'
import ReadyToTransform from '../../components/ReadyToTransform'
import Scholarship from '../../components/Scholarship'
import Support from '../../components/Support'
import Testimonials from '../../components/Testimonials'
import Workshops from '../../components/Workshops'

const achievements = [
  {
    name: 'personalización de currículum',
    text: 'crearás una mejor impresión con una estrategia para mostrar tus habilidades y tu potencial en un CV de nivel profesional'
  },
  {
    name: 'estilo de aprendizaje',
    text: 'conocer tu estilo de aprendizaje te ayudará a asimilar todo lo que estás por aprender en tu nueva vida como developer'
  },
  {
    name: 'proyección profesional',
    text: 'conocerás todas las posibilidades de crecimiento que puedes tener en el sector Tech para que tomes las mejores decisiones según tus objetivos'
  },
  {
    name: 'estrategias de búsqueda de empleo',
    text: 'crearás una estrategia personalizada acorde a tus fortalezas y objetivos profesionales'
  }
]

const details = [
  {
    icon: '/icons/calendar.svg',
    description: 'del 19 de octubre al 1 de febrero',
    title: 'fechas'
  },
  {
    icon: '/icons/clock.svg',
    description: 'lunes a viernes de 19 a 22 hrs',
    note: '7 sábados de 10 a 18 hrs | GMT-6',
    title: 'horarios'
  },
  {
    icon: '/icons/box.svg',
    description: '19 semanas de aprendizaje intensivo',
    note: '340 horas 100% prácticas',
    title: 'programa'
  },
  {
    icon: '/icons/map-pin.svg',
    description: 'tonalá 10, col. Roma Norte, CDMX',
    note: '(Remoto por Covid-19)',
    title: 'lugar'
  }
]

const metrics = [
  {
    description: 'horas en clases y talleres complementarios',
    value: '+340'
  },
  {
    description: 'certificaciones de valor curricular e internacional',
    value: '2'
  },
  {
    description: 'horas de prácticas en desafíos y proyectos',
    value: '+180'
  },
  {
    description: 'de colocación de egresados de Kodemia',
    value: '90%'
  }
]

const modules = [
  {
    image: '/images/class-room.png',
    name: 'pre-Bootcamp',
    period: '+40 horas',
    text: 'desde tu inscripción desarrollarás las bases a través de cursos online y asesoría personalizada'
  },
  {
    image: '/images/kode-day.png',
    name: 'modulo Front End',
    period: 'semana 1 - 6',
    text: 'crearás tu primer sitio web dinámico y funcional aplicando tu conocimiento de HTML, CSS, Bootstrap, SASS y Javascript'
  },
  {
    image: '/images/mentor.png',
    name: 'modulo Back End',
    period: 'semana 7 - 11',
    text: 'aprenderás a crear todo el Back End del primer proyecto, bases de datos y tu propia API utilizando Node, Mongo y Express'
  },
  {
    image: '/images/koders.png',
    name: 'front End Reactivo',
    period: 'semana 12 - 15',
    text: 'crearás el Front End con ReactJS a través de componentes de código reutilizable, una estructura solicitada por cualquier compañía tecnológica del mundo'
  }
]

const paymentPlan = [
  {
    text: 'aceptamos VISA, Mastercard y Amercian Express',
    name: 'a MSI con tarjeta de crédito'
  },
  {
    text: 'con pago en una sola exhibición',
    name: '10% de descuento'
  },
  {
    text: 'sin intereses y sin intermediarios',
    name: 'diferido a 4 o 5 meses'
  },
  {
    text: 'puedes pagar a 12, 18, 24 y 36 meses con mensualidades desde $2,926',
    name: 'financiamiento hasta 36 meses'
  }
]

const workshops = [
  {
    subtitle: 'talleres',
    title: '7 talleres sabatinos',
    bullets: [
      'Fundamentos de diseño UX/UI',
      'JamStack',
      'Scrum Fundamentals',
      'Xtreme Programming',
      'Git y Github Avanzado',
      'Negocios en TI',
      'AWS Cloud'
    ]
  },
  {
    subtitle: 'certificaciones',
    title: '2 certificaciones',
    bullets: [
      'Certificación SCRUM<br />Te acredita en la metodología de trabajo ágil SCRUM que te dará valor curricular internacional<br /><br />',
      'Certificación IBM<br />IBM validará tus conocimientos en Cloud con valor curricular internacional'
    ]
  }
]

export default function JavascriptLifetime () {
  return (
    <div>
      <NavBar
        apply='/javascript-lifetime/aplicar'
        language='Javascript'
        modality='Lifetime'
      />
      <Hero
        className='hero'
        apply='/javascript-lifetime/aplicar'
        brochure='/javascript-lifetime/brochure'
        image='/images/hero.png'
        language='Javascript'
        modality='Lifetime Bootcamp'
      >
        Transforma tu vida en <span>19 semanas</span> de aprendizaje intensivo,
        desarrollarás todas las habilidades para programar una aplicación
        web desde cero con acceso de por vida a Kodemia
      </Hero>
      <Metrics metrics={metrics} />
      <Details details={details} />
      <Introduction language='Javascript' />
      <Program
        brochure='/javascript-lifetime/brochure'
        modules={modules}
      />
      <KodeAwards />
      <Workshops workshops={workshops} />
      <Career achievements={achievements} />
      <Testimonials />
      <Investment investment='$75,000 MXN (Incluye IVA) + Inscripción de $6,000.' paymentPlan={paymentPlan} />
      <Scholarship interview='/javascript-lifetime/entrevista' />
      <MeetOurKoders />
      <Support />
      <ReadyToTransform apply='/javascript-lifetime/aplicar' />
      <Footer />
    </div>
  )
}
