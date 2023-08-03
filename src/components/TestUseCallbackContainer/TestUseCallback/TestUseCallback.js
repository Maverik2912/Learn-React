import {memo} from "react";

const TestUseCallback = memo(({calculatedValue, setData}) => {
    return (
        <div>
            <h2>Child Component</h2>
            <p>Data equals to {calculatedValue()}</p>
            <button onClick={() => setData(prev => prev + 1)}>Change data</button>
        </div>
    );
});

export {TestUseCallback};