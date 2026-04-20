import { info } from '../../info';

export default function ThankYou() {
  return (
    <section className="relative flex flex-col flex-grow justify-center pt-20 px-0">
      <div className="container md:w-1/2 flex flex-col gap-8">
        <h2 className="ft-8">
          Ya diste el primer paso hacia tu licencia!
        </h2>
        <p className="ft-5 font-bold">Por favor lee lo siguiente:</p>
        <p className="ft-2">
          Uno de nuestros asesores te llamará desde <a href="tel:+17863461521" className="text-brand-5 underline">+1 (786) 346-1521</a> para darte todos los detalles de tu curso.
          <br/><br/>
          Contéstanos hoy mismo y obtén <nobr className="text-brand-1 font-semibold">$50 de descuento</nobr> en tu inscripción.
        </p>
        <p className="ft-2">
          Si no logramos comunicarnos hoy, <b>el descuento expira</b> y tu solicitud entra en lista de espera.<br/><br/>
          Guarda el número.<br/>
          Vale la pena.
        </p>
        <div className="flex flex-col items-center justify-center gap-10">
          <a
            className="button hover:scale-105 bg-brand-2 hover:bg-brand-3 ft-4 flex justify-center items-center "
            href={info.surveyRedirect === '' ? `tel:+17863461521` : info.surveyRedirect}
            target="_blank"
          >
            <span className="material-icons">arrow_forward</span>Llámanos por teléfono
            <span className="text-white material-icons">arrow_back</span>
          </a>
        </div>
      </div>
    </section>
  );
}
