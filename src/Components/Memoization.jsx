import React, { useMemo, useState } from 'react';

function Memoization() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState('');

    const expensiveComputation = (num) => {
        let i = 0;
        while (i < 1000000000) i++;
        return num * num;
    };

    const memoizedValue = useMemo(() => expensiveComputation(count), [count]);

    return (
        <div>
            <h1>UseMemo()</h1>
            <p>Count: {count}</p>
            <p>Square: {memoizedValue}</p>
            <p> Input Data : {otherState}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count</button><br />
            <input type="text" onChange={(e) => setOtherState(e.target.value)} />
        </div>
    );
}
export default Memoization;