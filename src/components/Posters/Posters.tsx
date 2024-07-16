import pngIcon from '@/assets/png.png';
import jpgIcon from '@/assets/jpg.jpg';
import SvgIcon from '@/assets/svg.svg';

export const Posters: React.FC = () => {
    return (
        <div>
            <div>
                <img
                    src={pngIcon} alt='png.png'
                    width={100}
                    height={100}
                />
                <img
                    src={jpgIcon} alt='jpg.jpg'
                    width={100}
                    height={100}
                />
            </div>
            <div>
                <SvgIcon
                    width={100}
                    height={100}
                    color="red"
                />
            </div>
        </div>
    )
}