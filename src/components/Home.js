import React from 'react';

import ProfilePictureIcon from '../assets/images/profilePicture.jpg';

export default function Home() {
    return (
        <div className="home-page-container">
            <div className="home-container__inner home-container__animated">
                <figure>
                    <img className="home-profile-pic" alt="Profile" src={ProfilePictureIcon} />
                </figure>
                <article>
                    <h1 className="home-title">Kumar Abhishek</h1>
                    <p className="home-description">Full-stack Developer | React + Python</p>
                </article>
            </div>
        </div>
    );
}
