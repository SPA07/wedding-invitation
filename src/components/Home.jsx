import Timer from './Timer';
import Location from './Location';
import babychava from '../assets/images/babychava.webp';
import babymontse from '../assets/images/babymontse.webp';
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
      <div className="pt-15 pb-6 flex justify-center items-center overflow-visible px-4">
        <div className="relative flex justify-center items-center gap-2 sm:gap-4 max-w-360px sm:max-w-420px w-full">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-14 h-4 bg-amber-100/70 backdrop-blur-[1px] -rotate-3 border border-dashed border-amber-200/40 shadow-sm z-30 pointer-events-none" />

          <div className="w-[47%] bg-white p-2 pb-4 rounded-sm shadow-xl border border-gray-100 -rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
            <div className="w-full aspect-3/4 overflow-hidden bg-gray-50 rounded-xs">
              <img
                src={babychava}
                alt="Salvador de niño"
                className="w-full h-full object-cover grayscale-10%"
              />
            </div>

          </div>

          <div className="w-[47%] bg-white p-2 pb-4 rounded-sm shadow-xl border border-gray-100 rotate-3 hover:rotate-0 transition-transform duration-300 z-20">
            <div className="w-full aspect-3/4 overflow-hidden bg-gray-50 rounded-xs">
              <img
                src={babymontse}
                alt="Montse de niña"
                className="w-full h-full object-cover grayscale-5%"
              />
            </div>
          </div>
        </div>
      </div>

      <Timer />

      <InfoCard backgroundImage={plantilla3}>
        <p className="text-(--color-secondary) p-4 sm:p-10 text-center text-sm italic">
          Sabemos que el amor es la única magia capaz de transformarlo todo, queremos invitarte a celebrar nuestra unión.
          Acompáñanos a dar el paso más importante de nuestras vidas y firmar nuestro 'Siempre'.
        </p>
      </InfoCard>

      <InfoCard
        backgroundImage={plantilla3}
        minHeight="min-h-112.5"
        imageClassName="object-cover"
      >

        <div className="flex flex-col gap-y-5 py-12 px-2 text-center items-center w-full">

          <h1 className="text-[#a24415] text-xl font-bold w-[90%] max-w-\[500px]\ leading-tight">
            Con la bendición de Dios y nuestros padres
          </h1>

          <div className="flex flex-col gap-y-4 w-full mt-2">
            <div className="space-y-1">
              <h2 className="font-ballet text-(--color-secondary) text-lg tracking-tighter">
                Padres de la novia
              </h2>
              <p className="text-(--color-secondary) text-sm leading-relaxed italic">
                María Rosalba Morales Flores <br /> Gerardo Medina Fernandez
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-ballet text-(--color-secondary) text-lg tracking-tighter">
                Padres del novio
              </h2>
              <p className="text-(--color-secondary) text-sm leading-relaxed italic">
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
        <h2 className="text-[#a24415] text-xl mb-2">
          Ceremonia Religiosa
        </h2>
        <div className="space-y-1">
          <h3 className="text-(--color-secondary) text-[13px] font-bold italic">
            Capilla San Andrés
          </h3>
          <p className="text-(--color-secondary) text-[12px] tracking-wide">
            30 Octubre 2026
          </p>
          <p className="text-(--color-secondary) text-[12px] tracking-wide">
            6:30 PM
          </p>
        </div>

        <img
          src={iglesia}
          alt="Iglesia"
          className="w-190px h-130px object-cover rounded-lg shadow-xl border-4 border-[#c46739] my-4"
        />
      </InfoCard>

      <InfoCard
        backgroundImage={plantilla4}
        minHeight="min-h-90"
        imageClassName="object-cover"
      >
        <h2 className="text-[#a24415] text-xl mb-2">
          Recepción
        </h2>
        <div className="space-y-1">
          <h3 className="text-(--color-secondary) italic text-[13px] font-bold tracking-tighter">
            Jardín los campos
          </h3>
        </div>
        <img
          src={jardin}
          alt="Jardín los campos"
          className="w-190px h-130px object-cover rounded-lg shadow-xl border-4 border-[#c46739] my-4"
        />
      </InfoCard>

      <Location />

      <InfoCard backgroundImage={plantilla4}>
        <h2 className="text-[#a24415] text-xl mb-5">
          Código de vestimenta
        </h2>
        <div className="flex justify-center gap-10">
          <Traje className="w-20 h-20 text-(--color-secondary)" />
          <Vestido className="w-20 h-20 text-(--color-secondary)" />
        </div>
        <h3 className="text-(--color-secondary) text-sm tracking-wide mt-5 italic">
          Vestimenta formal, se reserva el color terracota para las damas de honor
        </h3>
      </InfoCard>

      <InfoCard
        backgroundImage={plantilla3}
        minHeight="min-h-80"
        imageClassName="object-cover"
      >
        <h2 className="text-[#a24415] mb-2">
          Mesa de regalos
        </h2>
        <p className="text-(--color-secondary) text-sm tracking-wide italic">
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
        <h2 className="text-[#a24415] text-center mb-2">
          Confirmar asistencia
        </h2>

        <p className="text-(--color-secondary) text-sm text-center mb-6 max-w-[90%] italic">
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