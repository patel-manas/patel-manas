import React from 'react'
import landingImage from '../../../assets/images/code2.png';

export default function Landing() {
    return (
        <div className="intro-wrapper">
            <div className="intro">
                <div className="line-1">About me as a professional</div>
                <div className="line-2"><span>Front-end</span> Engineer</div>
                <div className="line-3">and <span>Enthusiast Learner</span></div>
                <section className="cta">
                    <div className="primary"><span>Contact</span></div>
                    <div className="secondary"><span>Download Me</span></div>
                </section>
            </div>
            <div className="hero-image">
                <img src={landingImage} alt="hero" height="400px"/>
            </div>
        </div>
    )
}
