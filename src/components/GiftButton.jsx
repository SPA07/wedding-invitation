// src/components/GiftButton.jsx

const GiftButton = ({
  href,
  text,
  backgroundImage,
  target = "_blank"
}) => {
  return (
    <div className="relative w-full max-w-md mx-auto mt-2 overflow-hidden rounded-lg shadow-md group transition-transform duration-200 active:scale-95">
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
        /* Cambié py-5 por py-2 para reducir la altura considerablemente */
        className="relative z-10 block text-center text-[#235b76] font-bold text-sm uppercase py-2 tracking-widest no-underline"
      >
        {text}
      </a>
    </div>
  );
};

export default GiftButton;