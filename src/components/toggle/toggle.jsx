import sun from '../../icons/sun.png'
import moon from '../../icons/moon.png'

import './toggle.scss';

const Toggle = () =>{

    return(
        <div className="toggle">
            <img src={sun} alt="" className="toggle__img" />
            <img src={moon} alt="" className="toggle__img" />
            <div className="toggle__btn"></div>
        </div>
    );
}

export default Toggle;