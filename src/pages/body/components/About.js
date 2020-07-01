import React from 'react';
import myPic from "../../../assets/images/c-bg.png";
import Slide from 'react-reveal/Slide';
export default function About() {
    return (
        <div className="about-wrapper" id="about">
            <Slide left>
            <div className="title">About</div>
            <div className="image">
                <img src={myPic} alt="my pic" />
            </div>
            </Slide>
            <Slide right>
            <div className="info"></div>
            </Slide>
        </div>
    )
}
