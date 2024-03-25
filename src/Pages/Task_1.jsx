import React, { useState } from 'react';
import '../Style/Task_1.css'
import Template from '../Template/Template.jsx';
const Task_1 = () => {
    const [bucket1Elements, setBucket1Elements] = useState(['Element 1', 'Element 2', 'Element 3']);
    const [bucket2Elements, setBucket2Elements] = useState([]);

    const addToBucket2 = (element) => {
        setBucket1Elements(bucket1Elements.filter(el => el !== element));
        setBucket2Elements([...bucket2Elements, element]);
    };

    const removeFromBucket2 = (element) => {
        setBucket2Elements(bucket2Elements.filter(el => el !== element));
        setBucket1Elements([...bucket1Elements, element]);
    };

    const addAllToBucket2 = () => {
        setBucket2Elements([...bucket2Elements, ...bucket1Elements]);
        setBucket1Elements([]);
    };

    const removeAllFromBucket2 = () => {
        setBucket1Elements([...bucket1Elements, ...bucket2Elements]);
        setBucket2Elements([]);
    };

    return (

        <Template>
        <div className="element-transfer-container">
            <div className="bucket">
                <h3>Bucket 1</h3>
                <ul>
                    {bucket1Elements.map((element, index) => (
                        <li key={index}>
                            {element}
                            <button onClick={() => addToBucket2(element)}>Add to Bucket 2</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="transfer-buttons">
                <button onClick={addAllToBucket2}>Add All to Bucket 2</button>
                <button onClick={removeAllFromBucket2}>Remove All from Bucket 2</button>
            </div>
            <div className="bucket">
                <h3>Bucket 2</h3>
                <ul>
                    {bucket2Elements.map((element, index) => (
                        <li key={index}>
                            {element}
                            <button onClick={() => removeFromBucket2(element)}>Remove from Bucket 2</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </Template>
    );
};

export default Task_1;