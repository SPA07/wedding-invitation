import Timer from './Timer';
import novios from '../assets/MyS.jpg';
import plantilla3 from '../assets/plantilla3.png';
import plantilla4 from '../assets/plantilla4.png';
import iglesia from '../assets/iglesia.avif';

const Home = () => {
  return (
    <>
      <div className='pt-10' >
        <img src={novios} alt="Montse&Salvador" className="rounded-lg mt-10" />
      </div>

      <Timer />

      <div className="relative w-full max-w-4xl mx-auto overflow-hidden mt-5">
        <img
          src={plantilla3}
          alt="Plantilla"
          className="block w-full h-auto rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-(--color-secondary) p-10 text-center text-sm">
            El amor es la única magia capaz de transformarlo todo, queremos invitarte a celebrar nuestra unión.
            Acompáñanos a dar el paso más importante de nuestras vidas y firmar nuestro 'Siempre'.
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-4xl mx-auto mt-5">

        <img
          src={plantilla3}
          alt="Plantilla"
          className="block w-full h-auto min-h-112.5 rounded-lg object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">

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
        </div>
      </div>

      <div className="text-center mt-5 flex justify-center flex-col items-center">
        <h2 className="text-[#6f4e37] text2xl font-bold">¿Dónde?</h2>
      </div>

      <div className="relative w-full max-w-4xl mx-auto mt-5">
        {/* Imagen de fondo (La Plantilla) con la altura extendida */}
        <img
          src={plantilla3}
          alt="Plantilla"
          className="block w-full h-auto min-h-90 rounded-lg object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
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
          </div>

          <img
            src={iglesia}
            alt="Iglesia"
            className="max-w-[80%] max-h-[50%] h-auto rounded-lg shadow-xl border-4 border-white/20 my-4"
          />

        </div>
      </div>
    </>
  )
}

export default Home