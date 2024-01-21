import React from 'react'

export default function Info() {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">3 Years of college</span>
        </div>

        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">5+ projects</span>
            
        </div>

        <div className="about__box">
            <i className="bx bx-support about__icon"></i>
            <h3 className="about__title">Extra-curricular</h3>
                <span className="about__subtitle">Member of PASC, PICT NSS</span>
            
        </div>
    </div>
  )
}
