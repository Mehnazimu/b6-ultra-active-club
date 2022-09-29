import React from 'react';
import './Exercise.css'

const Exercise =(props) => {
    const {category,age,img,time} =props.exercises;
    console.log(props.exercises.img)
    return (
        <div className='exercise'>
           <img src={img} alt=""></img>
           <h4>{category}</h4>
           <h4>{age}</h4>
        </div>
    );
};

export default Exercise;