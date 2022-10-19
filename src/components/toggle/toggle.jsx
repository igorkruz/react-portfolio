import { useContext } from 'react';

import { ThemeContext } from '../../context';
import sun from '../../icons/sun.png'
import moon from '../../icons/moon.png'

import './toggle.scss';

const Toggle = () =>{

    const theme = useContext(ThemeContext);

    const handleClick = () =>{
        theme.dispatch({type:'TOGGLE'})
    }

    return(
        <div className="toggle">
            <img src={sun} alt="" className="toggle__img" />
            <img src={moon} alt="" className="toggle__img" />
            <div 
                className="toggle__btn"
                onClick={handleClick}
                style={{'left': theme.state.darkMode? 0 : 25}}
                >

                </div>
        </div>
    );
}

export default Toggle;