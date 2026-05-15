import Timer from './Timer';
import Location from './Location';
import novios from '../assets/MyS.jpg';
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
      <div className='pt-10'>
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
        <div className="flex flex-col gap-y-3 p-11 text-center items-center">

          <h1 className="text-(--color-secondary) text-lg leading-tight font-bold">
            Con la bendición de Dios y nuestros padres
          </h1>

          <div className="flex flex-col gap-y-6 w-full">
            <div className="space-y-1">
              <h2 className="text-(--color-secondary) text-[18px] tracking-tighter">
                Padres de la novia
              </h2>
              <p className="text-(--color-secondary) text-[12px] tracking-wide whitespace-nowrap">
                María Rosalba Morales Flores <br /> Gerardo Medina Fernandez
              </p>
            </div>

            <div className="space-y-1">
              <h2 className="text-(--color-secondary) text-[18px] tracking-tighter">
                Padres del novio
              </h2>
              <p className="text-(--color-secondary) text-[12px] tracking-tighter sm:tracking-wide min-w-max">
                María del Carmen Arredondo García <br /> Elias Pineda Durán
              </p>
            </div>
          </div>
        </div>
      </InfoCard>

      <div className="text-center mt-5 flex justify-center flex-col items-center">
        <h2 className="text-[#a24415] text-2xl font-bold">¿Dónde?</h2>
      </div>

      <InfoCard
        backgroundImage={plantilla4}
        minHeight="min-h-90"
        imageClassName="object-cover"
      >
        <h2 className="text-(--color-secondary) text-xl mb-2">
          Ceremonia Religiosa
        </h2>
        <div className="space-y-1">
          <h3 className="text-(--color-secondary) text-[13px] italic">
            Capilla San Andrés
          </h3>
          <p className="text-(--color-secondary) text-sm tracking-wide">
            30 Octubre 2026
          </p>
          <p className="text-(--color-secondary) text-sm tracking-wide">
            6:30 PM
          </p>
        </div>

        <img
          src={iglesia}
          alt="Iglesia"
          className="w-190px h-130px object-cover rounded-lg shadow-xl border-4 border-white/20 my-4"
        />
      </InfoCard>

      <InfoCard
        backgroundImage={plantilla4}
        minHeight="min-h-90"
        imageClassName="object-cover"
      >
        <h2 className="text-(--color-secondary) text-xl mb-2">
          Recepción
        </h2>
        <div className="space-y-1">
          <h3 className="text-(--color-secondary) italic text-[13px] tracking-tighter">
            Jardín los campos
          </h3>
        </div>
        <img
          src={jardin}
          alt="Jardín los campos"
          className="w-190px h-130px object-cover rounded-lg shadow-xl border-4 border-white/20 my-4"
        />
      </InfoCard>

      <Location />

      <InfoCard backgroundImage={plantilla4}>
        <h2 className="text-(--color-secondary) text-xl mb-5">
          Código de vestimenta
        </h2>
        <div className="flex justify-center gap-10">
          <Traje className="w-20 h-20 text-(--color-secondary)" />
          <Vestido className="w-20 h-20 text-(--color-secondary)" />
        </div>
        <h3 className="text-(--color-secondary) text-sm tracking-wide mt-5">
          Vestimenta formal, se reserva el color terracota para las damas de honor
        </h3>
      </InfoCard>

      <InfoCard
        backgroundImage={plantilla3}
        minHeight="min-h-80"
        imageClassName="object-cover"
      >
        <h2 className="text-(--color-secondary) mb-2">
          Mesa de regalos
        </h2>
        <p className="text-(--color-secondary) text-sm tracking-wide">
          Tu cariño y compañía significan todo para nosotros. Si además deseas tener un detalle, aquí encontrarás nuestra mesa de regalos.
        </p>
      </InfoCard>

      <div className="flex flex-col items-center">
        <GiftButton text="Amazon" href="https://www.amazon.com.mx/wedding/share/mys301026" backgroundImage={plantilla4} />
        <GiftButton text="Datos Bancarios" href="/DatosBancarios.pdf" backgroundImage={plantilla4} />
      </div>

      <InfoCard
        backgroundImage={plantilla3}
        minHeight="min-h-80"
        imageClassName="object-cover"
      >
        <h2 className="text-(--color-secondary) text-center mb-2">
          Confirmar asistencia
        </h2>

        <p className="text-(--color-secondary) text-sm text-center mb-6 max-w-[90%]">
          Estamos muy felices de celebrar este momento contigo y esperamos que puedas acompañarnos.
          Por favor, haznos saber si podrás asistir a nuestra boda. ¡Nos haría muchísima ilusión verte ahí!
        </p>
      </InfoCard>
      <div className="w-full flex justify-center">
        <GiftButton
          text="Confirmar Asistencia"
          href="https://docs.google.com/forms/d/e/1FAIpQLScGGnV2cI1lWdHW8OFkQsfk_D0MpK7RqZjV1QRoqC7ujvXJew/viewform?usp=publish-editor"
          backgroundImage={plantilla4}
        />
      </div>
    </>
  )
}

export default Home;