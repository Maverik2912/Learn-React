import {useToggle} from "../../hooks/useToggle";

const UseToggleComponent = () => {
    const [status, toggleStatus] = useToggle(false);

    return (
        <div>
            <h1 style={{textAlign: 'center', margin: '30px'}}>Use Toggle</h1>
            <p>Component's status is <b>{status}</b></p>
            <button onClick={toggleStatus}>Change status</button>
        </div>
    );
};

export {UseToggleComponent};