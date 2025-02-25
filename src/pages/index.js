import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import i00 from '../../public/landing/00.png';
import i01 from '../../public/landing/01.png';
import i02 from '../../public/landing/02.png';
import i03 from '../../public/landing/03.png';
import i04 from '../../public/landing/04.png';
import i05 from '../../public/landing/05.png';
import i06 from '../../public/landing/06.png';
import i07 from '../../public/landing/07.png';
import i08 from '../../public/landing/08.png';
import i09 from '../../public/landing/09.png';
import t01 from '../../public/landing/TESTIMONIO1.png';
import t02 from '../../public/landing/TESTIMONIO2.png';
import t03 from '../../public/landing/TESTIMONIO3.png';
import t04 from '../../public/landing/TESTIMONIO4.png';
import t05 from '../../public/landing/TESTIMONIO5.png';
import t06 from '../../public/landing/TESTIMONIO6.png';
import ico01 from '../../public/landing/icons/01.png';
import ico02 from '../../public/landing/icons/02.png';
import ico03 from '../../public/landing/icons/03.png';
import ico04 from '../../public/landing/icons/04.png';
import ico05 from '../../public/landing/icons/05.png';
import Faqs from '../components/faqs';

export default function Home() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Empieza hoy, da clic',
    description: 'Inscríbete este mes y obtén $60 de descuento en tu inscripción',
  };

  return (
    <>
      <section className="relative min-h-[80vh] w-full flex flex-col md:justify-end items-center bg-brand-1">

        <div className="relative min-h-[24rem] flex-grow w-full md:absolute top-0 inset-x-0 bottom-1/2 md:bottom-0">
          <div
            className="w-full h-full absolute bg-gradient-to-t from-brand-1 md:from-black via-transparent to-transparent md:opacity-60 z-10"/>
          <Image src={i00} layout="fill" className="object-cover object-right"/>
        </div>

        <div className="container w-full text-center lg:text-left text-white z-10 p-8">
          <h1
            className="md:w-2/3 relative font-bold ft-11 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]">
            No arriesgues tu futuro ni tu empleo, obtén tu licencia de contratista
          </h1>
          <p className="ft-3 mt-4">Certifícate y trabaja legalmente en Florida</p>
          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start mt-12">
            <Link href="#contact">
              <a onClick={() => setLastClick('hero')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 md:text-left">{cta.description}</p>
            <p className="material-icons animate-bounce"><span className="ft-9">expand_more</span></p>
          </div>

        </div>
      </section>

      <section className="reading-container grid grid-cols-1 md:grid-cols-2 my-16">
        <p className="ft-2">
          Obtener tu licencia de contratista no tiene por qué ser más complicado que un lunes en la obra.
          <br/><br/>
          Aquí encuentras el plan que funciona: clases virtuales, simulacros reales y todo el apoyo que necesitas para
          cumplir con los requisitos legales y avanzar en tu carrera.
        </p>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="4 razones por las que tu licencia está más cerca de lo que crees"
        description="Te damos la ruta más directa para obtener tu licencia y tengas todo lo necesario para aprobar"
        image={i02}
      />
      <section className="my-16">
        <div className="px-8 md:px-20 mb-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16">
          <div className="flex flex-col bg-brand-2 rounded-3xl p-12">
            <h3 className="text-white order-1 md:order-2 mb-8">Exámenes estatales, sin rodeos</h3>
            <div className="relative h-[24rem] rounded-2xl overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={i04} className="object-cover"/>
            </div>
            <p className="text-white order-3">Con simulacros precisos y material actualizado, te preparamos para que
              pases tu
              examen fácil y rápido</p>
          </div>
          <div className="flex flex-col bg-brand-2 rounded-3xl p-12">
            <h3 className="text-white order-1 md:order-2 mb-8">Estudia sin sacrificar tu jornada laboral</h3>
            <div className="relative h-[24rem] rounded-2xl overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={i05} className="object-cover"/>
            </div>
            <p className="text-white order-3">Programas se adaptan a ti con clases virtuales para que las tomes fuera de
              tus
              jornadas laborales</p>
          </div>
          <div className="flex flex-col bg-brand-2 rounded-3xl p-12">
            <h3 className="text-white order-1 md:order-2 mb-8">Asesoría que te respalda</h3>
            <div className="relative h-[24rem] rounded-2xl overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={i06} className="object-cover"/>
            </div>
            <p className="text-white order-3">Desde el primer clic hasta recibir tu licencia, estamos contigo para
              despejar dudas y
              evitar errores.</p>
          </div>
          <div className="flex flex-col bg-brand-2 rounded-3xl p-12">
            <h3 className="text-white order-1 md:order-2 mb-8">Haz que tu licencia trabaje para ti</h3>
            <div className="relative h-[24rem] rounded-2xl overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={i07} className="object-cover"/>
            </div>
            <p className="text-white order-3">Conviértete en un profesional certificado, aumenta tu valor en el mercado
              y accede a
              mejores oportunidades</p>
          </div>
        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center">
            <Link href="#contact">
              <a onClick={() => setLastClick('benefits')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Testimonios"
        title={`Miles de contratistas ya confiaron en <nobr>1st Contractors School</nobr> y ahora están listos para cualquier proyecto`}
        image={i08}
      />
      <section className="container my-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative w-full rounded-2xl shadow-lg border border-brand-3 overflow-hidden">
            <Image src={t01}/>
          </div>
          <div className="relative w-full rounded-2xl shadow-lg border border-brand-3 overflow-hidden">
            <Image src={t02}/>
          </div>
          <div className="relative w-full rounded-2xl shadow-lg border border-brand-3 overflow-hidden">
            <Image src={t03}/>
          </div>
          <div className="relative w-full rounded-2xl shadow-lg border border-brand-3 overflow-hidden">
            <Image src={t04}/>
          </div>
          <div className="relative w-full rounded-2xl shadow-lg border border-brand-3 overflow-hidden">
            <Image src={t05}/>
          </div>
          <div className="relative w-full rounded-2xl shadow-lg border border-brand-3 overflow-hidden">
            <Image src={t06}/>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Detalles"
        title="Sin rodeos ni complicaciones: este es nuestro método para ayudarte a obtener tu licencia"
        image={i01}
      />
      <section className="px-20 my-16">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          <div
            className="flex xl:flex-col justify-start items-start w-full rounded-2xl overflow-hidden border border-gray-400">
            <div className="relative p-12 w-1/3 xl:w-full">
              <div className="relative mx-auto w-2/3 pt-[60%]">
                <Image src={ico01} layout="fill" objectFit="contain"/>
              </div>
            </div>
            <div className="p-8 w-2/3 xl:w-full">
              <h3 className="ft-3">Clases virtuales</h3>
              <p className="ft-2 mb-8 font-bold">Flexibles y diseñadas para adaptarse a tus horarios laborales</p>
            </div>
          </div>
          <div
            className="flex xl:flex-col justify-start items-start w-full rounded-2xl overflow-hidden border border-gray-400">
            <div className="relative p-12 w-1/3 xl:w-full">
              <div className="relative mx-auto w-2/3 pt-[60%]">
                <Image src={ico02} layout="fill" objectFit="contain"/>
              </div>
            </div>
            <div className="p-8 w-2/3 xl:w-full">
              <h3 className="ft-3">Soporte continuo</h3>
              <p className="ft-2 mb-8 font-bold">No te dejamos a medias; estamos contigo hasta el final</p>
            </div>
          </div>
          <div
            className="flex xl:flex-col justify-start items-start w-full rounded-2xl overflow-hidden border border-gray-400">
            <div className="relative p-12 w-1/3 xl:w-full">
              <div className="relative mx-auto w-2/3 pt-[60%]">
                <Image src={ico03} layout="fill" objectFit="contain"/>
              </div>
            </div>
            <div className="p-8 w-2/3 xl:w-full">
              <h3 className="ft-3">Materiales directos y objetivos</h3>
              <p className="ft-2 mb-8 font-bold">Solo lo que necesitas para prepararte, sin desperdiciar tiempo</p>
            </div>
          </div>
          <div
            className="flex xl:flex-col justify-start items-start w-full rounded-2xl overflow-hidden border border-gray-400">
            <div className="relative p-12 w-1/3 xl:w-full">
              <div className="relative mx-auto w-2/3 pt-[60%]">
                <Image src={ico04} layout="fill" objectFit="contain"/>
              </div>
            </div>
            <div className="p-8 w-2/3 xl:w-full">
              <h3 className="ft-3">Educación continua</h3>
              <p className="ft-2 mb-8 font-bold">Mantén tu licencia al día y cumple con los requisitos estatales</p>
            </div>
          </div>
          <div
            className="flex xl:flex-col justify-start items-start w-full rounded-2xl overflow-hidden border border-gray-400">
            <div className="relative p-12 w-1/3 xl:w-full">
              <div className="relative mx-auto w-2/3 pt-[60%]">
                <Image src={ico05} layout="fill" objectFit="contain"/>
              </div>
            </div>
            <div className="p-8 w-2/3 xl:w-full">
              <h3 className="ft-3">Simulacros reales</h3>
              <p className="ft-2 mb-8 font-bold">Familiarízate con el examen antes de enfrentarlo</p>
            </div>
          </div>

        </div>
        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('models')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Garantías"
        title="La prueba está en los resultados: así respaldamos tu éxito"
        image={i03}
      />
      <section className="py-16 bg-black">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-12 rounded-xl bg-brand-2 flex items-center">
            <p className="ft-2 text-white text-center">Miles de casos de éxito en la obtención de sus licencias.</p>
          </div>
          <div className="p-12 rounded-xl bg-brand-2 flex items-center">
            <p className="ft-2 text-white text-center">+25 años de experiencia ayudando a que los contratistas se
              certifiquen.</p>
          </div>
          <div className="p-12 rounded-xl bg-brand-2 flex items-center">
            <p className="ft-2 text-white text-center">Personal preparado y certificado para guiarte hacia tu
              certificación.</p>
          </div>
        </div>

        <div className="reading-container flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('target')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 !mt-0 text-white text-center">{cta.description}</p>
        </div>

      </section>

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-1 bg-brand-1 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="!font-bold text-white">
              Empieza ahora y obtén $60 de descuento en tu inscripción
            </h2>
            <div className="mt-20 mb-12">
              <p className="ft-1 text-white">
                Compártenos tus datos para contactarte y comiences tu curso lo más pronto posible.
              </p>
            </div>
            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
