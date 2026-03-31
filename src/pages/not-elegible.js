import { info } from '../../info';

export default function ThankYou() {
  return (
    <section className="relative flex flex-col flex-grow justify-center pt-20 px-0">
      <div className="container md:w-1/2 flex flex-col items-center gap-8">
        <h2 className="ft-8 text-center">
          Aún no estás en el punto para obtener la certificación… pero sí estás en el punto perfecto para empezar.
        </h2>
        <p className="ft-4 text-center">
          Muchos de nuestros alumnos comienzan el curso mientras completan su experiencia o reciben su número de seguro social, para no empezar desde cero después.
          <br/><br/>
          👉 Llámanos y te decimos cómo aprovechar este tiempo a tu favor.
        </p>
        <div className="flex flex-col items-center justify-center gap-10">
          <a
            className="button hover:scale-105 bg-brand-2 hover:bg-brand-3 ft-4 flex justify-center items-center "
            href={info.surveyRedirect === '' ? `https://wa.me/${info.phoneNumber}` : info.surveyRedirect}
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
