import { useState } from 'react';

export function Counter (){
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1);        
    }

    return (
        <div>
                   <h2>{counter}</h2>
        <button tupe="button" onClick={increment}>
            Increment 
        </button>
        </div> 
    );
}