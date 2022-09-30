import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question-div'>
            <div>
                <h3>How does react work?</h3>
                <p>React uses a declarative paradigm that makes it easier to reason about the application and aims to be both efficient and flexible. It designs simple views for each state in the application, and React will efficiently update and render just the right component when the data changes. 
                    <br />
                    The declarative view makes your code more predictable and easier to debug.
                    </p>

            </div>
            <div>
                <h3>Difference Between props and State?</h3>
                <p>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>

            </div>
            <div>
                <h3>What else useEffect do other than loading API? </h3>
                <p>Running on state change: validating input field
                  Running on state change: live filtering
                  Running on state change: trigger animation on new array value
                Running on props change: update paragraph list on fetched API data update
                 Running on props change: updating fetched API data to get BTC updated price</p>

            </div>
            
        </div>
    );
};

export default Question;