import {useState} from "react";

export const useArray = (defaultValue) => {
    const [arrayValue, setArrayValue] = useState(defaultValue);

    const addItem = (item) => {
        setArrayValue(prev => [...prev, item]);
    }

    const removeItem = (id) => {
        const updatedArray = arrayValue.filter((element, index) => index !== +id);
        setArrayValue(updatedArray);
    }

    return {
        arrayValue, addItem, removeItem
    }

}