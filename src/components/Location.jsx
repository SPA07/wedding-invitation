import GiftButton from './GiftButton';
import plantilla4 from '../assets/plantilla4.png';

const Location = () => {
    return (
        <div className="text-center mt-3 mb-5 flex justify-center flex-col items-center">
            <div className="w-full max-w-280px">
                <GiftButton
                    text="VER UBICACIÓN"
                    href="https://www.google.com/maps/place/Salón+para+Eventos:+Hacienda+San+Andrés/@19.4635636,-99.2348898,17z/data=!3m1!4b1!4m6!3m5!1s0x85d202528245e7a5:0x4961183f6f00e4e6!8m2!3d19.4635636!4d-99.2323149!16s%2Fg%2F1tmxfxhg?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
                    backgroundImage={plantilla4}
                />
            </div>
        </div>
    );
};

export default Location;