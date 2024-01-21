import React from 'react'
import './footer.css';
export default function Footer() {
    return (

        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Kedar Pawar</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                   
                    <li>
                        <a href="#qualification" className="footer__link">Qualifications</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/pawarkedar03/" className="footer__social-link" target="_blank">
                        <i className="uil uil-instagram"></i>
                    </a>
                    <a href="https://github.com/Promature" className="footer__social-link" target="_blank">
                        <i className="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Kedar pawar. All rights reserved
                </span>
            </div>
        </footer>
    )
}
