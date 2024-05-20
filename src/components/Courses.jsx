import React from 'react'
import './Courses.css'
import eye from '../asset/eye.png'



const Courses = () => {
    return (
        <div className='main'>
            <div className="center">
                <p className='path'>DATASCIENCE COURSE LEARNING PATH</p>
                <p className='curriculum'>Data Science <span>Course Curriculum</span></p>
            </div>
            <div className="content">
                <div className="second">
                    <div className="card"><p className='subject'>C++</p>
                        <p className='info'>Learn C++ for strong programming fundamentals.</p>
                    </div>
                    <div className="card"><p className='subject'>MERN Stack</p>
                        <p className='info'>Master the MERN stack for high-demand projects.</p></div>
                    <div className="card"><p className='subject'>Data Structure & Algorithm</p>
                        <p className='info'>Excel in Data Structures and Algorithms for interview success.</p></div>
                    <div className="card"><p className='subject'>Competitve Programming</p>
                        <p className='info'>Excel in Data Structures and Algorithms for interview success.</p></div>
                       
                </div>
                <div className="side_btn">
                    <button className="view_btn"><img src={eye} alt="" className='eye_img'/> View Curriculum</button>
                    <button className="view_btn"><img src={eye} alt="" className='eye_img'/> View Curriculum</button>
                    <button className="view_btn"><img src={eye} alt="" className='eye_img'/> View Curriculum</button>
                    <button className="view_btn"><img src={eye} alt="" className='eye_img'/> View Curriculum</button>
                </div>
            </div>
            
        </div>
    )
}

export default Courses