import Link from 'next/link';
import { info } from '../../../info';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { getCookie, setCookie } from 'cookies-next';
import { useState } from 'react';
import { restrictNumber, emailRegExp } from '../../utils/formValidators';
import fbEvent from '../../services/fbEvents';
import { Select } from './formAtoms';

export default function OptInForm({lastClick = ''}) {
  const [sending, setSending] = useState(false);
  const router = useRouter();
  const methods = useForm({mode: 'all'});
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = methods;

  const leadQualifier = ({experience, ssn}) => {
    return !(ssn === 'no' || experience === '0-3');
  };

  const onSubmit = (data) => {
    setSending(true);
    data.phone = data.phone.replace(/^(MX)?\+?(52)?\s?0?|\s|\(|\)|-|[a-zA-Z]/g, '');
    data.dateAdded = new Date().toLocaleString('en-US');
    data.origin = 'Notoriovs Landing';
    data.lastClick = lastClick;

    const qualified = leadQualifier(data);

    const _fbc = getCookie('_fbc');
    const _fbp = getCookie('_fbp');
    const payload = {...data, qualified, _fbc, _fbp};


    fetch(info.optInWebhook, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((result) => result.json())
      // Send FB Event
      .then(({id}) => {
        setCookie('lead', {...data});
        if (qualified) {
          fbEvent(
            'Lead',
            {email: data.email, phone: data.phone, externalID: id},
          );
          router.push(`/thankyou`);
        } else {
          fbEvent(
            'CompleteRegistration',
            {email: data.email, phone: data.phone, externalID: id},
          );
          router.push(`/not-elegible`);
        }
      })
      .catch(() => {
        router.push(`/thankyou`);
      });
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register(
            'fullName',
            {
              required: true,
            },
          )}
          className={errors.fullName && '!bg-red-200'}
          placeholder="Tu nombre"/>
        <input
          {...register(
            'email',
            {
              required: true,
              pattern: {
                value: emailRegExp,
                message: 'Revisa tu correo',
              },
            },
          )}
          className={errors.email && '!bg-red-200'}
          placeholder="Un email activo"/>
        <input
          {...register(
            'phone',
            {required: true, maxLength: 10, minLength: 10},
          )}
          className={errors.phone && '!bg-red-200'}
          onKeyDown={restrictNumber}
          placeholder="Teléfono móvil"/>

        <Select
          {...register(
            'contractorType',
            {required: true},
          )}
          placeholder="¿Qué tipo de contratista eres?"
          options={[
            {value: 'general', label: 'General'},
            {value: 'building', label: 'Edificación'},
            {value: 'residential', label: 'Residencial'},
            {value: 'air-conditioner', label: 'Aire Acondicionado'},
            {value: 'mechanical', label: 'Mecánico'},
            {value: 'plumbing', label: 'Plomero'},
            {value: 'roofing', label: 'Techos'},
            {value: 'glass', label: 'Vidrios y Cristales'},
            {value: 'drywall', label: 'Drywall'},
            {value: 'pool', label: 'Albercas'},
            {value: 'solar', label: 'Solar'},
            {value: 'other', label: 'Otro'},
          ]}
        />

        <Select
          {...register(
            'ssn',
            {required: true},
          )}
          placeholder="¿Ya cuentas con tu SSN?"
          options={[
            {value: 'yes', label: 'Sí'},
            {value: 'in-process', label: 'Está en trámite'},
            {value: 'no', label: 'No'},
          ]}
        />

        <Select
          {...register(
            'experience',
            {required: true},
          )}
          placeholder="¿Cuántos años tienes de experiencia?"
          options={[
            {value: '0-3', label: 'Menos de 3 años'},
            {value: '3-5', label: '3 a 5 años'},
            {value: '5-10', label: '5 a 10 años'},
            {value: '10+', label: 'Más de 10 años'},
          ]}
        />

        <button
          disabled={sending}
          className={`w-full ${sending ? '!bg-transparent' : 'hover:!bg-brand-3'}`}
        >{
          !sending
            ? 'Enviar →'
            : <span className="material-symbols-outlined animate-spin">progress_activity</span>
        }</button>

        <div className="mt-4">
          <p className="-ft-3 text-center text-white">Al dar clic aceptas nuestra&nbsp;
            <Link href={info.privacyNotice}>política de privacidad</Link>
          </p>
        </div>
      </form>
    </FormProvider>
  );
}