import Timer from './Timer'
import novios from '../assets/MyS.jpg'
import plantilla from '../assets/plantilla.svg'

const Home = () => {
  return (
    <>
      <div className='pt-10' >
        <img src={novios} alt="Montse&Salvador" className="rounded-lg mt-5" />
      </div>
      <Timer />
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden mt-5">
        <img
          src={plantilla}
          alt="Plantilla"
          className="block w-full h-auto rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8">
          {/* <h2 className="text-xl sm:text-3xl md:text-4xl text-[#BF6A3F] drop-shadow-sm mb-2">
            ¡Nos casamos!
          </h2> */}
          <p className="text-[#23225a] text-center text-s sm:text-sm md:text-lg leading-relaxed max-w-[80%] md:max-w-[60%]">
           El amor es la única magia capaz de transformarlo todo, queremos invitarte a celebrar nuestra unión. Acompañanos a dar el paso más importante de nuestras vidas y firmar nuestro 'Siempre'.
          </p>

        </div>
      </div>
    </>
  )
}

export default Home