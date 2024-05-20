import React from 'react'
import './Description.css';
import group from "../asset/Group.png";
import complete from "../asset/Complete.png";
import graduated from "../asset/Graduated.png";
import question from "../asset/Question mark.png";


const Description = () => {
  return (
    <div className='desc'>
        <div className="cards"><img src={group} alt="" className='desc_img'/><p className='no_text'>24</p> <p className='word_text'>Courses</p></div>
        <div className="horizontal_line"></div>
        <div className="cards"><img src={graduated} alt="" className='desc_img'/><p className='no_text'>30k+</p> <span className='word_text'>Learners</span> </div>
        <div className="horizontal_line"></div>
        <div className="cards"><img src={question} alt="" className='desc_img'/><p className='no_text'>100k+</p> <span className='word_text'>Doubts Solved</span> </div>
        <div className="horizontal_line"></div>
        <div className="cards"><img src={complete} alt="" className='desc_img'/><p className='no_text'>10k+</p> <span className='word_text'>Student Projects</span> </div>
    </div>
  )
}

export default Description