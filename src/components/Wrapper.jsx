import React from 'react'
import './Wrapper.css'
import hat from '../asset/hat.png'
import star from '../asset/star.png'
import plane from '../asset/plane.png'
import interrogation from '../asset/interrogation.png'



const Wrapper = () => {
    return (
        <>
            <div className="container">
                <button className='hat'>
                    <img src={hat} alt="" className='image' />
                    &nbsp;An <b>IIT Delhi</b> Alumni Initiative
                </button>
                <div className="text">
                    Become an Expert in the
                    field of <span className='color_text'>Data Science &nbsp; with 6 courses</span>
                </div>
                <div className="small_text">A specially crafted Tech Kickstarter, with <span className='bold_small'>5+ extensive online courses.</span> </div>
                <div className='star_btn'>
                    <button className='star'><img src={star} alt="" className='star_img'/>Personal Mentorship</button>
                    <button className='star'><img src={star} alt="" className='star_img'/>Internship Assistance</button>
                    <button className='star2'><img src={star} alt="" className='star_img'/>Industry Certified Courses</button>
                </div>

                <div className="two_btn">
                    <button className='enroll_btn'>Enroll Now <img src={plane} alt="" /></button>
                    <button className='know_btn'>Know More <img src={interrogation} alt="" /></button>
                </div>
            </div>
        </>
    )
}

export default Wrapper