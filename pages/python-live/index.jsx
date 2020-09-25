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
    description: 'del 19 de octubre al 15 de febrero',
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
    description: '21 semanas de aprendizaje intensivo',
    note: '380 horas 100% prácticas',
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
    period: 'semana 7 - 15',
    text: 'aprenderás a crear todo el Back End del primer proyecto, bases de datos y tu propia API utilizando Python, Django y PostgreSQL'
  },
  {
    image: '/images/koders.png',
    name: 'modulo Cloud',
    period: 'semana 15 - 17',
    text: 'desplegarás en Cloud tu aplicación completa con tu dominio e integrarás las API’s de AI disponibles en la plataforma de IBM'
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
    title: '9 talleres sabatinos',
    bullets: [
      'Fundamentos de diseño UX/UI',
      'Scrum Fundamentals',
      'Xtreme Programming',
      'Git y Github Avanzado',
      'Negocios en TI',
      'AWS Cloud',
      'Numpy',
      'Flask',
      'Selenium'
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

export default function PythonLive () {
  return (
    <div>
      <Seo
        title='Kodemia | Python live'
        description='Conoce el bootcamp python live'
        image='https://images.prismic.io/kodemia/2ad0c223-4117-436c-bb0c-5d8c7b249f4f_kodemia-seo-live.png?auto=compress,format'
      />
      <NavBar
        apply='/python-live/aplicar'
        language='Python'
        modality='Live'
      />
      <Hero
        className='hero'
        apply='/python-live/aplicar'
        brochure='/python-live/brochure'
        image='/images/hero_live.png'
        language='Python'
        modality='Bootcamp Live'
      >
        Transforma tu vida en <span>21 semanas</span> de aprendizaje intensivo,
        desarrollarás todas las habilidades para programar una aplicación
        web desde cero sin salir de casa
      </Hero>
      <Metrics metrics={metrics} />
      <Details details={details} />
      <Introduction language='Python' />
      <Program
        brochure='/python-live/brochure'
        modules={modules}
      />
      <KodeAwards
        name='KodeAwards, el desafío final'
        period='semana 7 - 19'
        text='Aplicarás todo el conocimiento en un proyecto real, desarrollando el MVP en equipo, con una metodología SCRUM
          para llevarlo a una web app funcional desplegada en la nube.<br /> Crearás el pitch de tu app, porque será
          evaluada por directores de desarrollo de empresas invitadas para reconocerte como Full Stack Developer'
      />
      <Workshops workshops={workshops} />
      <Career achievements={achievements} />
      <Testimonials />
      <Investment investment='$69,500 MXN (Incluye IVA) + Inscripción de $5,950.' paymentPlan={paymentPlan} />
      <Scholarship interview='/python-live/entrevista' />
      <MeetOurKoders />
      <Support />
      <ReadyToTransform apply='/python-live/aplicar' />
      <Footer />
    </div>
  )
}
