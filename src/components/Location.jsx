const Location = () => {
    return (
        <div className="text-center mt-5 ">

            {/* Contenedor del botón con padding para que no toque los bordes del borde blanco si no quieres */}
            <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                /* w-full para el largo, py-1 para lo delgado, block para ocupar el ancho */
                className="block w-full bg-(--color-header) text-white py-1.5 rounded-lg text-xs font-semibold"
            >
                VER UBICACIÓN
            </a>

        </div>
    )
}

export default Location