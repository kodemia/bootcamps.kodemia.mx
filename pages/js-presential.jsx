
import Career from '../components/Career'
import Details from '../components/Details'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import Investment from '../components/Investment'
import Metrics from '../components/Metrics'
import NavBar from '../components/NavBar'
import Program from '../components/Program'
import ReadyToTransform from '../components/ReadyToTransform'
import Support from '../components/Support'
import Workshops from '../components/Workshops'

const achievements = [
  {
    name: 'personalización de currículum',
    text: 'de forma estratégica mostrarás en esta herramienta tus habilidades y tu potencial como candidato ante una vacante'
  },
  {
    name: 'estilo de aprendizaje',
    text: 'Conocer tu estilo de aprendizaje te ayudará a asimilar mucho mejor todo lo que estás por aprender en tu nueva vida como developer'
  },
  {
    name: 'proyección profesional',
    text: 'conocerás todas las posibilidades de crecimiento que puedes tener en el sector Tech para que tomes las mejores decisiones de crecimiento; según tus objetivos y metas'
  },
  {
    name: 'estrategias de búsqueda de empleo',
    text: 'eres una persona única y diferente a otros candidatos por esto necesitas crear una estratégia de búsqueda de empleo acorde a tus fortalezas y metas profesionales'
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
    text: 'desde tu inscripción desarrollarás las bases a través de cursos online, presenciales y asesoría personalizada'
  },
  {
    image: '/images/kode-day.png',
    name: 'modulo Front End',
    period: 'semana 1 - 6',
    text: 'ahora crearás un sitio dinámico con HTML, CSS, Bootstrap, SASS y Javascript aplicando tu conocimiento en una página web dinámica y funcional'
  },
  {
    image: '/images/mentor.png',
    name: 'modulo Back End',
    period: 'semana 7 - 11',
    text: 'aprenderás a crear el funcionamiento de tu desarrollo en el servidor, utilizando Node, Mongo y Express: la base de datos y crearás tu propia API'
  },
  {
    image: '/images/koders.png',
    name: 'front End Reactivo',
    period: 'semana 12 - 15',
    text: 'crearás el Front End con ReactJS con componentes de código reutilizable, aprendiendo a ahorrar tiempo y logrando desarrollos más dinámicos'
  }
]

const paymentPlan = [
  {
    text: 'a meses sin intereses con tu tarjeta de crédito y con Paypal',
    name: 'a MSI con tarjeta de crédito'
  },
  {
    text: 'si haces tu pago en una sola exhibición recibe un 10% de descuento',
    name: '10% OFF con pago de contado'
  },
  {
    text: 'paga a 4 meses tu bootcamp sin intereses directamente con nosotros',
    name: 'diferido a 4 pagos'
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
      'Principios de UX/UI',
      'JamStack',
      'Scrum Fundamentals',
      'Xtreme Programming',
      'Github Avanzado',
      'Negocios TI',
      'AWS Cloud'
    ]
  },
  {
    subtitle: 'certificaciones',
    title: '2 certificaciones',
    bullets: [
      'Certificación SCRUM<br />Te acredita en la metodología de trabajo ágil SCRUM que te dará valor curricular<br /><br />',
      'Certificación IBM<br />Valida tus conocimientos en IBM Cloud y los microservicios que ofrece'
    ]
  }
]

const supportItems = [
  {
    icon: 'icon',
    title: 'title',
    text: 'text'
  },
  {
    icon: 'icon',
    title: 'title',
    text: 'text'
  },
  {
    icon: 'icon',
    title: 'title',
    text: 'text'
  },
  {
    icon: 'icon',
    title: 'title',
    text: 'text'
  }
]

export default function JsPresential () {
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
      <Career achievements={achievements} />
      <Investment paymentPlan={paymentPlan} />
      <Support supportItems={supportItems} />
      <ReadyToTransform />
      <Footer />
    </div>
  )
}
