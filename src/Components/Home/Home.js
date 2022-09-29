import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Home.css';

const Home = () => {
    const [exercises, setExercises]= useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setExercises(data))

    },[])
    
    
    return (
        <div className='home-container'>
          <div className='exercise-container'>
           {
               exercises.map(exercise => <Exercise
               key={exercise.id}
               exercises={exercises}
               ></Exercise>)
           }
         </div> 
            <div className='cart-container'>
                <h3>This is cart</h3>

            </div>
        </div>
    );
};

export default Home;