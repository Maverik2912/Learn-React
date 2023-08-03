import {useMemo} from "react";

const TestUseMemo = ({data, setData}) => {

    const calc = (data) => {
        for (let i = 0; i < 10e8; i++) {
            data++;
        }
        return data;
    }

    const calculatedValue = useMemo(() => {
       return calc(data);
    }, [data]);

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
            <h2>Child component</h2>
            Data equals to {calculatedValue}
            <br/>
            <button style={{width: 100}} onClick={() => setData(prev => prev + 1)}>Change data</button>
        </div>
    );
};

export {TestUseMemo};