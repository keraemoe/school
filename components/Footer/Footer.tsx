import React from 'react';
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <>
            <footer className={s.footer}>
                <div className={s.container}>
                    <div className={s.footer_content}>
                        <div className={s.logo}>
                            <h1>Logo here</h1>
                        </div>
                        <div className={s.nav}>
                            <nav>
                                <h2>My Account</h2>
                                <h1>Sign In</h1>
                                <h1>Dashboard</h1>
                                <h1>Monitor Progress</h1>
                                <h1>Compare Success</h1>
                                <h1>My Topics</h1>
                            </nav>
                            <nav>
                                <h2>About SBA </h2>
                                <h1>Company Information</h1>
                                <h1>Resources</h1>
                                <h1>Our Success</h1>
                                <h1>Meet The Experts</h1>
                            </nav>
                            <nav>
                                <h2>Support</h2>
                                <h1>Contact Us</h1>
                            </nav>
                            <nav>
                                <h2>Newsletter</h2>
                                <h1>Join our mailing list to stay up to date with world</h1>
                            </nav>
                        </div>
                    </div>
                    <hr />
                    <div className={s.under_footer}>
                        <h1>© 2023 Single Best | All Rights Reserved</h1>
                        <form className={s.btn}  >
                            <input type="email" placeholder='Email address' />
                            <button value="send" type='submit' >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;