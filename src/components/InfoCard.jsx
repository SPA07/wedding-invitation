

const InfoCard = ({
  backgroundImage,
  children,
  minHeight = "h-auto",
  imageClassName = ""
}) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-3 overflow-hidden">
      <img
        src={backgroundImage}
        alt="Plantilla"
        className={`block w-full ${minHeight} rounded-lg ${imageClassName}`}
      />

      {/* Contenedor de Contenido */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;