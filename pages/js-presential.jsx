import Link from "next/link";

import Details from "../components/Details";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Metrics from "../components/Metrics";
import NavBar from "../components/NavBar";

const metrics = [
  {
    description: "Horas en clases y talleres complementarios",
    value: "+340",
  },
  {
    description: "Certificaciones de valor curricular e internacional",
    value: "2",
  },
  {
    description: "Horas de prácticas en desafíos y proyectos",
    value: "+180",
  },
  {
    description: "De colocación de egresados de Kodemia",
    value: "90%",
  },
];

const details = [
  {
    icon: "/icons/calendar.svg",
    description: "Del 19 de octubre al 1 de febrero",
    title: "Fechas",
  },
  {
    icon: "/icons/clock.svg",
    description: "Lunes a Viernes de 19 a 22 hrs",
    note: "7 sábados de 10 a 18 hrs | GMT-6",
    title: "Horarios",
  },
  {
    icon: "/icons/box.svg",
    description: "19 semanas de aprendizaje intensivo ",
    note: "340 horas 100% prácticas",
    title: "Programa",
  },
  {
    icon: "/icons/map-pin.svg",
    description: "Tonalá 10, col. Roma Norte, CDMX",
    note: "(Remoto por Covid-19)",
    title: "Lugar",
  },
];

export default function JsPresential() {
  return (
    <div>
      <NavBar />
      <Hero
        className="hero"
        apply="/apply"
        brochureDesktop="/brochures/JS_PRESENTIAL-D.pdf"
        brochureMobile="/brochures/JS_PRESENTIAL-M.pdf"
        image="/images/hero.png"
        languaje="Javascript"
        modality="Lifetime Bootcamp"
      >
        Transforma tu vida en <span>19 semanas</span> de aprendizaje intensivo,
        donde desarrollarás todas las habilidades para programar una aplicación
        web desde cero
      </Hero>
      <Metrics metrics={metrics} />
      <Details details={details} />
      <Introduction video="/images/video-testimonial.png">
        Nuestro Bootcamp es un entrenamiento intensivo que te llevará{" "}
        <span>desde cero hasta desarrollador Full Stack</span>. Lograrás crear
        una aplicación web completa empleando{" "}
        <span>UX/UI, metodología SCRUM, FrontEnd y BackEnd con Javascript</span>
        , desplegado en la nube, creando y consumiendo servicios de terceros
      </Introduction>
    </div>
  )
}
