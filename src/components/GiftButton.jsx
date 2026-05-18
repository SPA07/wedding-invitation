import { useInView } from 'react-intersection-observer';

const GiftButton = ({
  href,
  text,
  backgroundImage,
  target = "_blank",
  delay = "delay-0"
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      className={`relative w-full max-w-md mx-auto mt-2 overflow-hidden rounded-lg shadow-md group transition-all duration-1000 ease-out active:scale-95 ${delay} ${
        inView 
          ? 'opacity-100 translate-y-0 filter blur-none' 
          : 'opacity-0 translate-y-12 filter blur-[2px]'
      }`}
    >
      <img
        src={backgroundImage}
        alt={`Fondo ${text}`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-300"></div>

      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className="relative z-10 block text-center text-[#a24415] font-bold text-sm uppercase py-2 tracking-widest no-underline"
      >
        {text}
      </a>
    </div>
  );
};

export default GiftButton;