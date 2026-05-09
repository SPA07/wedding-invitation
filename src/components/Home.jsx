import Timer from './Timer';
import novios from '../assets/MyS.jpg';
import plantilla3 from '../assets/plantilla3.png';
import tailwind from 'tailwindcss';

const Home = () => {
  return (
    <>
      <div className='pt-10' >
        <img src={novios} alt="Montse&Salvador" className="rounded-lg mt-5" />
      </div>
      <Timer />
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden mt-5">
        <img
          src={plantilla3}
          alt="Plantilla"
          className="block w-full h-auto rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-(--color-secondary) p-20 text-center text-sm">
            El amor es la única magia capaz de transformarlo todo, queremos invitarte a celebrar nuestra unión.
            Acompáñanos a dar el paso más importante de nuestras vidas y firmar nuestro 'Siempre'.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home