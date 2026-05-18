import { useInView } from 'react-intersection-observer';

// Le agregamos "className = ''" a los props recibidos
const ScrollAnimate = ({ children, delay = 'delay-0', className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      // Sumamos ${className} al final de los estilos del div contenedor
      className={`transition-all duration-1000 ease-out ${delay} ${className} ${
        inView 
          ? 'opacity-100 translate-y-0 filter blur-none' 
          : 'opacity-0 translate-y-12 filter blur-[2px]'
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimate;