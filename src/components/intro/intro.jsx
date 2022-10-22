import man from '../../img/man.png'

import './intro.scss'

const Intro = () => {
    return(
        <div className="intro">
            <div className="intro__left">
                <div className="intro__left-wrapper">
                    <h2 className="intro__left-title">Hello, My name is</h2>
                    <h1 className="intro__left-name">Igor Kruzhynskyi</h1>
                    <div className="intro__descr">
                        <div className="intro__descr-wrapper">
                            <div className="intro__descr-item">Web Developer</div>
                            <div className="intro__descr-item">HTML5/CSS3</div>
                            <div className="intro__descr-item">JavaScript</div>
                            <div className="intro__descr-item">React</div>
                            <div className="intro__descr-item">Redux</div>
                        </div>
                    </div>
                    <p className="intro__left-about">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum eum labore molestias a amet, aliquam vel praesentium porro in, delectus magni, quaerat accusantium? Assumenda dolor quidem nam nulla recusandae.
                    </p>
                </div>
            </div>

            <div className="intro__right">
                <div className="intro__right-bg"></div>
                <img src={man} alt="me" className="intro__right-img" />
            </div>
        </div>
    );
}

export default Intro;