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
import Seo from '../../components/Seo'
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
    description: 'del 8 de febrero al 25 de junio',
    title: 'fechas'
  },
  {
    icon: '/icons/clock.svg',
    description: 'lunes a viernes de 19 a 22 hrs',
    note: '7 sábados de 10 a 18 hrs  |  GMT-6',
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
    description: 'Clases en línea de manera remota',
    note: '',
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
    image: '/images/classroom.png',
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
    text: 'aceptamos VISA, Mastercard y American Express',
    name: 'a MSI con tarjeta de crédito'
  },
  {
    text: 'aplica por un financiamiento a Meses sin Intereses',
    name: '15 ó 18 MSI'
  },
  {
    text: 'cubre tu Bootcamp en pagos diferidos antes de concluir tu Bootcamp',
    name: 'pre-pago Kodemia'
  },
  {
    text: 'puedes pagar a 12, 18 y 24 meses con mensualidades desde $3,509',
    name: 'financiamiento hasta 24 meses'
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

export default function JavascriptLive () {
  return (
    <div>
      <Seo
        title='Kodemia | Javascript live'
        description='Conoce el bootcamp javascript live'
        image='/https://images.prismic.io/kodemia/2ad0c223-4117-436c-bb0c-5d8c7b249f4f_kodemia-seo-live.png?auto=compress,format'
      />
      <NavBar
        apply='/javascript-live/aplicar'
        language='Javascript'
        modality='Live'
      />
      <Hero
        className='hero'
        apply='/javascript-live/aplicar'
        brochure='/javascript-live/brochure'
        image='/images/hero_live.png'
        language='Javascript'
        modality='Bootcamp Live'
      >
        Transforma tu vida en <span>19 semanas</span> de aprendizaje intensivo,
        desarrollarás todas las habilidades para programar una aplicación
        web desde cero sin salir de casa
      </Hero>
      <Metrics metrics={metrics} />
      <Details details={details} />
      <Introduction language='Javascript' />
      <Program
        brochure='/javascript-live/brochure'
        modules={modules}
      />
      <KodeAwards
        brochure='/python-lifetime/brochure'
        name='KodeAwards, el desafío final'
        period='semana 7 - 17'
        text='Aplicarás todo el conocimiento en un proyecto real, desarrollando el MVP en equipo, con una metodología SCRUM
          para llevarlo a una web app funcional desplegada en la nube.<br /> Crearás el pitch de tu app, porque será
          evaluada por directores de desarrollo de empresas invitadas para reconocerte como Full Stack Developer.'
      />
      <Workshops workshops={workshops} />
      <Career achievements={achievements} />
      <Testimonials />
      <Investment
        investment='$69,900 MXN (Incluye IVA) + Inscripción de $3,500.'
        paymentPlan={paymentPlan}
      />
      <Scholarship interview='/javascript-live/entrevista' />
      <MeetOurKoders />
      <Support />
      <ReadyToTransform apply='/javascript-live/aplicar' />
      <Footer />
    </div>
  )
}
