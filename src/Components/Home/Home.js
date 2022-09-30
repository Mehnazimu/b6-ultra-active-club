
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Exercise from '../Exercise/Exercise';
import './Home.css';

const Home = () => {
    const [exercises, setExercises]= useState([]);
    const [cart, setCart]=useState([]);
    

    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setExercises(data))

    },[])

    const handleAddToCart=(exercise)=>{
        const newCart =[...cart,exercise];
        setCart(newCart);
    }

    
    
    
    return (

        <div className='home-container'>
          <div className='exercise-container'>
           {
               exercises.map(exercise => <Exercise
               key={exercise.id}
               exercise={exercise}
               handleAddToCart={handleAddToCart}
               
               ></Exercise>)
            }
            
         </div> 
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;