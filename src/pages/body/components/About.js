import React from 'react';
import myPic from "../../../assets/images/my-pic-new.png";

export default function About() {
    return (
        <div className="about-wrapper" id="about">
            <div className="title">About</div>
            <div className="image">
                <img src={myPic} alt="my pic" />
            </div>
            <div className="info"></div>
        </div>
    )
}
