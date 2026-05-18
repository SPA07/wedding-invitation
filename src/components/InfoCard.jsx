import ScrollAnimate from "./ScrollAnimate";

const InfoCard = ({
  backgroundImage,
  children,
  minHeight = "h-auto",
  imageClassName = "",
  containerClassName = "",
  delay = "delay-0" 
}) => {
  return (
    <ScrollAnimate delay={delay}>
      <div className={`relative mx-auto mt-3 overflow-hidden ${containerClassName}`}>
        <img
          src={backgroundImage}
          alt="Plantilla"
          className={`block w-full ${minHeight} rounded-lg ${imageClassName}`}
        />

        {/* Contenedor de Contenido */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-7 text-center">
          {children}
        </div>
      </div>
    </ScrollAnimate>
  );
};

export default InfoCard;