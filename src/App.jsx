import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una carga de 2 segundos para asegurar que 
    // las fuentes y el background se procesen bien
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 1. Pantalla de carga (Spinner)
  if (loading) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#BF6A3F] text-[#e8e8e7]">
      {/* Corazón latiendo con escala */}
      <div className="text-5xl animate-bounce mb-4">❤️</div>
      
      {/* Frase personalizada */}
      <p className="mt-4 text-2xl font-serif italic text-center px-6">
        "El amor está en los detalles..."
      </p>
      <span className="text-xs tracking-[0.3em] uppercase mt-2 opacity-60">
        Preparando tu invitación
      </span>
    </div>
  );
}

  // 2. Contenido de la aplicación
  return (
    <>
      <div className='p-10 pt-5'>
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;