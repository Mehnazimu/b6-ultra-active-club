import React from 'react';
import './Exercise.css'

const Exercise =(props) => {
    console.log(props);
    const {category,age,img,time} =props.exercise;
    const {handleAddToCart}=props;
    
    return (
        <div className='exercise'>
           <img src={img} alt=""></img>
           <div className='exercise-info'>
            <h3>{category}</h3>
           <h4>For Age: {age}</h4>
           <h4>Time required: {time}min</h4>
           </div>
           <button onClick={()=>handleAddToCart(props.exercise)} className='btn-exercise'>
            Add to list</button>
        </div>
    );
};

export default Exercise;