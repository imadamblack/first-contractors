import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(0);

  const questions = [
    {
      q: "¿Cuál es el tiempo de entrega de los equipos?",
      a: "El proceso completo, desde la recepción del pedido hasta la puesta en marcha, toma aproximadamente 2 meses."
    },
    {
      q: "¿Qué incluye el soporte postventa?",
      a: "Ofrecemos servicio técnico eficiente con cobertura nacional, incluyendo capacitaciones y asesorías remotas o presenciales según sea necesario."
    },
    {
      q: "¿Es difícil operar el equipo?",
      a: "No, nuestros equipos están diseñados para ser intuitivos y fáciles de manejar. Además, proporcionamos capacitación completa al personal."
    },
    {
      q: "¿Qué sectores pueden beneficiarse de estos equipos?",
      a: "Nuestros equipos son ideales para los sectores alimenticio, farmacéutico e industrial, entre otros que requieran soluciones de envasado."
    },
    {
      q: "¿Qué pasa si necesito refacciones?",
      a: "Contamos con un amplio stock de piezas y envío rápido dentro de México."
    }
  ]

  return (
    <section className='bg-gray-100 py-12'>
      <div className='container'>
        {questions.map((q, i) =>
          <div key={`faq-${i}`} className="w-full shadow-sm mb-2">
            <p
              id={i}
              className="w-full p-4 font-bold bg-white mb-0 cursor-pointer rounded-lg border border-gray-200"
              onClick={(e) => setFaqOpen(e.target.id)}
            >
              <span className="font-bold mr-4 text-brand-1">›</span>{q.q}
            </p>
            <p className={`${faqOpen == i ? 'flex' : 'hidden'} bg-gray-200 p-12`}>
              {q.a}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}