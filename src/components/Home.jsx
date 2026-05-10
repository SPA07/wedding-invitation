import Timer from './Timer';
import novios from '../assets/MyS.jpg';
import plantilla3 from '../assets/plantilla3.png';

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

      <div className="relative w-full max-w-4xl mx-auto mt-5">
  {/* Imagen base */}
  <img 
    src={plantilla3}
    alt="Plantilla"
    className="block w-full h-auto min-h-[450px] rounded-lg object-cover"
  />

  {/* Overlay corregido */}
  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
    
    {/* Contenedor con GAP: controla la separación total aquí */}
    <div className="flex flex-col gap-y-8"> 
      
      {/* Frase superior */}
      <h1 className="text-(--color-secondary) text-sm italic uppercase tracking-widest opacity-80">
        Con la bendición de Dios y nuestros padres
      </h1>

      {/* Bloque de Padres (Novia y Novio) con su propia separación interna */}
      <div className="flex flex-col gap-y-6">
        
        <div className="space-y-1">
          <h2 className="text-(--color-secondary) font-bold text-[10px] uppercase tracking-tighter">
            Padres de la novia
          </h2>
          <p className="text-(--color-secondary) text-base leading-tight">
            María Rosalba Morales Flores <br /> y Gerardo Medina Fernandez
          </p>
        </div>

        <div className="space-y-1">
          <h2 className="text-(--color-secondary) font-bold text-[10px] uppercase tracking-tighter">
            Padres del novio
          </h2>
          <p className="text-(--color-secondary) text-base leading-tight">
            Elias Pineda Durán <br /> y María del Carmen Arredondo García
          </p>
        </div>

      </div>

    </div>
  </div>
</div>
    </>
  )
}

export default Home