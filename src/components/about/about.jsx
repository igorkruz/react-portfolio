import photoman from '../../img/photoman.jpg'
import award from '../../img/award.jpg'

import './about.scss'

const About = () =>{
    return(
        <div className="about">
            <div className="about__left">
                <div className="about__left-card bg"></div>
                <div className="about__left-card">
                    <img src={photoman} alt="" className="about__left-img" />
                </div>

            </div>
            <div className="about__right">
                <h1 className="about__right-title">Aobut Me</h1>
                <p className="about__right-sub">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, molestiae.</p>
                <p className="abou__right-descr">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem blanditiis possimus, dolor soluta quis, modi nesciunt iste pariatur veniam a esse nemo inventore assumenda vitae voluptate sequi distinctio deleniti ipsam?
                </p>

                <div className="about__award">
                    <img src={award} alt="" className="about__award-img" />
                    <div className="about__award-text">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima doloremque dolor maiores optio perspiciatis commodi in, magni corrupti quam?
                    
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
