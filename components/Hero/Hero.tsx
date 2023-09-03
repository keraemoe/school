import React from 'react';
import s from './Hero.module.scss'

const Hero = () => {
    return (
        <>
            <div className={s.hero}>
                <h1>
                    Take <b>student experience</b>
                    <br />
                    to the next level
                </h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy.</p>
                <button>Join Now</button>
            </div>
        </>
    );
};

export default Hero;