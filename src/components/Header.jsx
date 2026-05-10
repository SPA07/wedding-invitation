
import headerImg from '../assets/header.png';

const Header = () => {
  return (
    /* Barra fija con tu color de fondo original */
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#4f3223] h-20 flex justify-center items-center">
      
      {/* Contenedor del Pergamino: Se posiciona relativo a la barra */}
      <div className="relative w-full max-w-lg h-32 flex items-center justify-center">
        
        {/* La imagen del pergamino (Sin fondo) */}
        <img 
          src={headerImg} 
          alt="Pergamino" 
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* El Texto: Encima de la imagen */}
        <h1 className="relative z-10 text-center text-xl sm:text-2xl text-[#6f4e37] font-serif pb-2">
          M & S
        </h1>
        
      </div>
    </header>
  );
};

export default Header;