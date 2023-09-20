import React from 'react';
import s from './Succes.module.scss'

const Success = () => {
    return (
        <>
            <div className={s.success}>
                <div className={s.container}>
                    <div className={s.success_content}>
                        <h1>Our Success</h1>
                        <div className={s.list}>
                            <div>
                                <img src="/s1.png" alt="" />
                                <h1>15</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <img src="/s1.png" alt="" />
                                <h1>15</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <img src="/s1.png" alt="" />
                                <h1>15</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <img src="/s1.png" alt="" />
                                <h1>15</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <img src="/s1.png" alt="" />
                                <h1>15</h1>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Success;