import { ToastContainer, toast } from 'react-toastify';
import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
   

    let totalTime=0;
    for (const exercise of cart){
        totalTime = totalTime+ exercise.time;

    }
    

    const activityCompleted=()=>{
        toast("Wow Completed!!!");
    }
    return (
        <div>
             <h3>Mehnaz</h3>
                <div className='user-info'>
                <span>67 <small>kg</small></span>
                <span>5.3</span>
                <span>25<small>yrs</small></span>
                <span>Weight</span>
                <span>Height</span>
                <span>Age</span>

                </div>
                <div>
                    <h4>Add A Break</h4>
                    <div className='brk-time'>
                        <button >10s</button>
                      <button>20s</button> 
                     <button >30s</button>
                    <button >40s</button> 
                <button >50s</button>
                    </div>

                </div>
                <div>
                    <h4>Exercise Details</h4>
                    <div className='e-time'>
                        <h5 className='e-text'>Exercise time: {totalTime} min.</h5>
                    </div>
                    <div className='b-time'>
                        <h5 className='b-text'>Break time:</h5>
                    </div>
                    
                </div>
                <div>
                <button onClick={activityCompleted} className='btn-actv'>Activity Completed</button>
                <ToastContainer/>
                </div>
                

            
        </div>
    );
};

export default Cart;