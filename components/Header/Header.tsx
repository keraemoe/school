import React from 'react';
import s from './Header.module.scss'
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <div className={s.container}>
                <header className={s.header}>
                    <div className={s.logo}>
                        <Link href="/">
                            <img src="/logo.png" alt="Логотип" />
                        </Link>
                    </div>
                    <nav className={s.nav}>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/">Programmes</Link>
                            </li>
                            <li>
                                <Link href="/">Faculty </Link>
                            </li>
                            <li>
                                <Link href="/">Infrastructure</Link>
                            </li>
                            <li>
                                <Link href="/">Events</Link>
                            </li>
                            <li>
                                <Link href="/">Events</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </>
    );
};

export default Header;