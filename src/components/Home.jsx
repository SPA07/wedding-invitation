import Timer from './Timer'
import novios from '../assets/MyS.jpg'
import plantilla2 from '../assets/plantilla2.svg'

const Home = () => {
  return (
    <>
      <div className='pt-7 border-red-500' >
        <img src={novios} alt="Montse&Salvador" />
      </div>
      <Timer />
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden mt-5">
        <img
          src={plantilla2}
          alt="Plantilla 2"
          className="block w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8">
          <h2 className="text-xl sm:text-3xl md:text-4xl text-[#BF6A3F] drop-shadow-sm mb-2">
            ¡Nos casamos!
          </h2>
          <p className="text-[#BF6A3F] text-center text-xs sm:text-sm md:text-lg leading-relaxed max-w-[80%] md:max-w-[60%]">
           El amor es la única magia capaz de transformarlo todo, queremos invitarte a celebrar nuestra unión. Acompañanos a dar el paso más importante de nuestras vidas y firmar nuestro 'Siempre'.
          </p>

        </div>
      </div>
    </>
  )
}

export default Home