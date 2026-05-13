import Timer from './Timer';
import Location from './Location';
import novios from '../assets/MyS.jpg';
import plantilla1 from '../assets/plantilla1.png';
import plantilla3 from '../assets/plantilla3.png';
import plantilla4 from '../assets/plantilla4.png';
import iglesia from '../assets/iglesia.avif';
import jardin from '../assets/jardin.avif';
import InfoCard from './InfoCard';
import GiftButton from './GiftButton';
import { IconVestido as Vestido, IconTraje as Traje } from './Icons';

const Home = () => {
  return (
    <>
      <div className='pt-10' >
        <img src={novios} alt="Montse&Salvador" className="rounded-lg mt-2" />
      </div>

      <Timer />

      <InfoCard backgroundImage={plantilla3}>
        <p className="text-(--color-secondary) p-4 sm:p-10 text-center text-sm">
          El amor es la única magia capaz de transformarlo todo, queremos invitarte a celebrar nuestra unión.
          Acompáñanos a dar el paso más importante de nuestras vidas y firmar nuestro 'Siempre'.
        </p>
      </InfoCard>

      <InfoCard
        backgroundImage={plantilla3}
        minHeight="min-h-112.5"
        imageClassName="object-cover"
      >
        <div className="flex flex-col gap-y-5">
          <h1 className="text-(--color-secondary) italic tracking-widest font-bold">
            Con la bendición de Dios y nuestros padres
          </h1>

          <div className="flex flex-col gap-y-6">
            <div className="space-y-1">
              <h2 className="text-(--color-secondary) font-bold text-[13px] tracking-tighter">
                Padres de la novia
              </h2>
              <p className="text-(--color-secondary) text-base leading-tight">
                María Rosalba Morales Flores <br /> Gerardo Medina Fernandez
              </p>
            </div>

            <div className="space-y-1">
              <h2 className="text-(--color-secondary) font-bold text-[13px] tracking-tighter">
                Padres del novio
              </h2>
              <p className="text-(--color-secondary) text-base leading-tight">
                María del Carmen Arredondo García <br /> Elias Pineda Durán
              </p>
            </div>
          </div>
        </div>
      </InfoCard>

      <div className="text-center mt-5 flex justify-center flex-col items-center">
        <h2 className="text-[#6f4e37] text-2xl font-bold">¿Dónde?</h2>
      </div>

      <InfoCard
        backgroundImage={plantilla4}
        minHeight="min-h-90"
        imageClassName="object-cover"
      >
        <h2 className="text-(--color-secondary) text-xl font-serif italic tracking-widest mb-2">
          Ceremonia Religiosa
        </h2>
        <div className="space-y-1">
          <h3 className="text-(--color-secondary) text-lg font-serif italic">
            Capilla San Andrés
          </h3>
          <p className="text-(--color-secondary) text-sm font-Ballet italic tracking-wide">
            30 Octubre 2026
          </p>
          <p className="text-(--color-secondary) text-sm font-Ballet italic tracking-wide">
            6:30 PM
          </p>
        </div>
        <img
          src={iglesia}
          alt="Iglesia"
          className="max-w-[80%] max-h-[50%] h-auto rounded-lg shadow-xl border-4 border-white/20 my-4"
        />
      </InfoCard>

      <InfoCard
        backgroundImage={plantilla4}
        minHeight="min-h-90"
        imageClassName="object-cover"
      >
        <h2 className="text-(--color-secondary) text-xl font-serif italic tracking-widest mb-2">
          Recepción
        </h2>
        <div className="space-y-1">
          <h3 className="text-(--color-secondary) font-bold text-[13px] tracking-tighter">
            Jardín los campos
          </h3>
        </div>
        <img
          src={jardin}
          alt="Jardín los campos"
          className="max-w-[80%] max-h-[50%] h-auto rounded-lg shadow-xl border-4 border-white/20 my-4"
        />
      </InfoCard>

      <Location />


      <InfoCard backgroundImage={plantilla4}>
        <h2 className="text-(--color-secondary) text-xl font-serif italic tracking-widest mb-2">
          Código de vestimenta
        </h2>
        <div className="flex justify-center gap-10">
          <Traje className="w-20 h-20 text-(--color-secondary)" />
          <Vestido className="w-20 h-20 text-(--color-secondary)" />
        </div>
        <h3 className="text-(--color-secondary) text-sm font-Ballet italic tracking-wide">
          Vestimenta formal, se reserva el color terracota para las damas de honor
        </h3>
      </InfoCard>
      <InfoCard backgroundImage={plantilla1}>
        <h2 className="text-(--color-secondary) text-xl font-serif italic tracking-widest mb-2">
          Mesa de regalos
        </h2>
        <p className="text-(--color-secondary) text-sm font-Ballet italic tracking-wide">
          Tu cariño y compañía significan todo para nosotros. Si además deseas tener un detalle, aquí encontrarás nuestra mesa de regalos.
        </p>
      </InfoCard>

      <div className="flex flex-col">
        <GiftButton
          text="Amazon"
          href="https://amazon.com.mx/..."
          backgroundImage={plantilla4}
        />

        <GiftButton
          text="Liverpool"
          href="https://mesa.liverpool.com.mx/..."
          backgroundImage={plantilla4}
        />

        <GiftButton
          text="Datos Bancarios"
          href="#seccion-banco"
          backgroundImage={plantilla4}
        />
      </div>

      <InfoCard
        backgroundImage={plantilla1}
        minHeight="min-h-80"
        imageClassName="object-cover"
      >
        <h2 className="text-(--color-secondary) font-serif italic text-center mb-4 mt-4">
          Confirmar asistencia
        </h2>

        <p className="text-(--color-secondary) text-sm font-serif text-center mb-2 max-w-[90%]">
          Estamos muy felices de celebrar este momento contigo y esperamos que puedas acompañarnos.
          Por favor, haznos saber si podrás asistir a nuestra boda. ¡Nos haría muchísima ilusión verte ahí!
        </p>

        <div className="w-[80%] flex justify-center"> {/* Contenedor para centrar el botón y controlar su ancho */}
          <GiftButton
            text="Llenar Formulario"
            href="TU_URL_DE_GOOGLE_FORMS_AQUI"
            backgroundImage={plantilla4}
          />
        </div>
      </InfoCard>
    </>
  )
}

export default Home