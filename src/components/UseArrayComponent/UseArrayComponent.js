import {useArray} from "../../hooks/useArray";
import {useState} from "react";
import styles from './UseArrayComponent.module.css';

const UseArrayComponent = () => {
    const array = [...new Array(10).keys()];
    const [inputValue, setInputValue] = useState('');
    const {arrayValue, addItem, removeItem} = useArray(array);

    const add = (inputValue) => {
        addItem(inputValue);
        setInputValue('');
    }

    const remove = (id) => {
        removeItem(id);
        setInputValue('');
    }

    return (
        <div>
            <h1 style={{textAlign: 'center', margin: '30px'}}>Use Array</h1>
            <div className={styles.gridContainer}>
                {arrayValue.map((element, index) => {
                    return <div className={styles.container}>
                        <p key={element}>{element}</p>
                        <button onClick={() => remove(index)}>Remove</button>
                    </div>
                })}
            </div>
            <br/>
            <input
                className={styles.input}
                type="number"
                placeholder={'Enter value'}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}/>
            <div>
                <button className={styles.button} onClick={() => add(inputValue)}>Add element</button>
            </div>
        </div>
    );
};

export {UseArrayComponent};