import React from 'react';
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <>
            <div className={s.container}>
                <footer className={s.footer}>
                    <div className={s.socialIcons}>
                        {/* Вставьте иконки социальных сетей здесь */}
                    </div>
                    <ul className={s.navigation}>
                        <li>Ссылка 1</li>
                        <li>Ссылка 2</li>
                        <li>Ссылка 3</li>
                        <li>Ссылка 4</li>
                        <li>Ссылка 5</li>
                    </ul>
                    <button className={s.contactButton}>Contact Us</button>
                    <hr />
                    <div className={s.copyright}>
                        © 2023 Ваши авторские права
                    </div>
                </footer>
            </div>
        </>

    );
};

export default Footer;