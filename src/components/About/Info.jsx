import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i className='bx bx-bulb about__icon'></i>

                <h3 className="about__title">Achievemnets</h3>
                <span className="about__subtitle">Former Head of Terpsichore (PESU ECC) :  Guided the team to multiple stage wins.</span>
            </div>

            <div className="about__box">
            <i className='bx bx-award about__icon'></i>

                <h3 className="about__title">Scholarships</h3>
                <span className="about__subtitle">6x Distinction Scholar</span>
            </div>

            <div className="about__box">
            <i className='bx bxs-graduation about__icon'></i>

                <h3 className="about__title">CGPA</h3>
                <span className="about__subtitle">8.0</span>
            </div>
        </div>
    )
}

export default Info