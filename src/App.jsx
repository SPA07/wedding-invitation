import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos la carga. 2.5 segundos es ideal para que se aprecie el detalle
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#BF6A3F]">
        <div className="relative flex items-center justify-center">
          {/* Círculo exterior decorativo */}
          <div className="absolute w-24 h-24 border-2 border-[#e8e8e7]/20 rounded-full"></div>
          
          {/* Spinner principal (Anillo de oro) */}
          <div className="w-24 h-24 border-t-4 border-r-4 border-[#e8e8e7] rounded-full animate-spin"></div>
          
          {/* Corazón o Inicial en el centro */}
          <div className="absolute animate-pulse text-[#e8e8e7] text-2xl font-serif italic">
            M & S
          </div>
        </div>
        
        {/* Texto con espaciado elegante */}
        <p className="mt-10 text-[#e8e8e7] text-sm tracking-[0.5em] font-light uppercase animate-pulse">
          Nuestra Boda
        </p>
      </div>
    );
  }

  return (
    <div className='p-10 pt-5'>
      <Header />
      <Home />
    </div>
  );
}

export default App;