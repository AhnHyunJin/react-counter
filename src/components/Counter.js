import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    return(
        <div>
            count : {count}<br/>
            <button onClick={() => setCount(count+1)}> + </button>
            <button onClick={() => setCount(count-1)}> - </button>

        </div>
    )
}

export default Counter