import React, { useState, useCallback } from 'react';

const Usecallback = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const memoizedIncrement = useCallback(incrementCount, [count]);

    return (
        <div>
            <h1>UseCallback()</h1>
            <p>Count: {count}</p>
            <ChildComponent onIncrement={memoizedIncrement} />
        </div>
    );
};

const ChildComponent = React.memo(({ onIncrement }) => {
    console.log('Child componen render');
    return (
        <div>
            <button onClick={onIncrement}>Increment Count</button>
        </div>
    );
});

export default Usecallback;