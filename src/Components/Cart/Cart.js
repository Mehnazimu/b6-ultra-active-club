import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let totalTime=0;
    for (const exercise of cart){
        totalTime = totalTime+ exercise.time;

    }

    return (
        <div>
             <h3>Mehnaz</h3>
                <div className='user-info'>
                <span>67</span>
                <span>5.3</span>
                <span>25</span>
                <span>kg</span>
                <span>Height</span>
                <span>yrs</span>

                </div>
                <div>
                    <h4>Add A Break</h4>
                    <div className='brk-time'>
                        <button>10s</button>
                        <button>20s</button>
                        <button>30s</button>
                        <button>40s</button>
                        <button>50s</button>
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
                <button className='btn-actv'>Activity Completed</button>
                <p>Selected Items:{cart.length}</p>

            
        </div>
    );
};

export default Cart;