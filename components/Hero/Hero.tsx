import React from 'react';
import s from './Hero.module.scss'

const Hero = () => {
    return (
        <>
            <div className={s.hero_section}>
                <div className={s.container}>
                    <div className={s.content}>
                        <h1>
                            Your Law College name <br />
                            Building a Centre of excellence <br />
                            in Legal Education
                        </h1>
                        <p>Programmes Approved by Bar Council of Your Country</p>
                        <button>Enroll Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;