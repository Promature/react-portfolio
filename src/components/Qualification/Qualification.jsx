import { useState } from 'react';
import './Qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <div>
            <section className="qualification section" id='qualification'>
                <h2 className="section__title">Qualification</h2>
                <span className="section__subtitle">My Learnings</span>

                <div className="qualification__container container">
                    <div className="qualification__tabs">
                        <div className={toggleState === 1 ? "qualification__button qualification__active button--flex"
                            : "qualification__button button--flex"}
                            onClick={() => toggleTab(1)}>
                            <i className="uil uil-graduation-cap qualification__icon"></i>
                            Education
                        </div>

                        <div className={toggleState === 2 ? "qualification__button qualification__active button--flex"
                            : "qualification__button button--flex"}
                            onClick={() => toggleTab(2)}>
                            <i className="uil uil-briefcase-alt qualification__icon"></i>
                            Projects
                        </div>
                    </div>

                    <div className="qualification__sections">
                        <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                            : "qualification__content"}>
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Computer Engineering</h3>
                                    <span className="qualification__subtitle">
                                        PICT, Pune
                                    </span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2021 - Present
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                            <div className="qualification__data">
                                <div>

                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">HSC</h3>
                                    <span className="qualification__subtitle">
                                        Kalsagar Academy & Jr.College, Wai
                                    </span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2019 - 2021
                                    </div>
                                </div>

                                <div>

                                </div>
                            </div>

                        </div>
                        <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                            : "qualification__content"}>

                            <div className="qualification__data">
                                <div>

                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">PetReunite</h3>
                                    <span className="qualification__subtitle">
                                        PICT, Pune
                                    </span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        Jan, 2024
                                    </div>
                                </div>

                                <div>

                                </div>
                            </div>
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Weather App</h3>
                                    <span className="qualification__subtitle">
                                        PICT, Pune
                                    </span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        Jan, 2024
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                            <div className="qualification__data">
                                <div>

                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Travel Advisor</h3>
                                    <span className="qualification__subtitle">
                                        PICT, Pune
                                    </span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        Dec, 2023
                                    </div>
                                </div>

                                <div>

                                </div>
                            </div>
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">SpeechTranslation Assistant</h3>
                                    <span className="qualification__subtitle">
                                        PICT, Pune
                                    </span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        Sept, 2023
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                            <div className="qualification__data">
                                <div>

                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">SecondChance Books</h3>
                                    <span className="qualification__subtitle">
                                        PICT, Pune
                                    </span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        May, 2023
                                    </div>
                                </div>

                                <div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Qualification
