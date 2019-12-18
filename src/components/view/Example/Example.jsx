import React, { useState } from 'react';

const Example = () => {
    // Declare a new state variable, which we'll call "count"
    const [ count1, setCount ] = useState(0);
    return (
        <div>
            <p>You clicked1 {count1} times</p>
            <button onClick={() => setCount(count1 + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Example