import React from 'react';
import s from './Header.module.scss'

const Header = () => {
    return (
        <>
            <header className={s.container}>
                <div className={s.header}>
                    <div className={s.logo}>
                        <h1>Logo Here</h1>
                    </div>
                    <div className={s.nav}>
                        <ul>
                            <li>Home</li>
                            <li>News</li>
                            <li>Contact</li>
                            <li>About</li>
                        </ul>
                        <img src="/search.png" alt="search" />
                        <button>Login</button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;