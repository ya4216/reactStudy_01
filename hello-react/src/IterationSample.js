import React, {useState} from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {id:1, text:'눈사람'},
        {id:2, text:'얼음'},
        {id:3, text:'눈'},
        {id:4, text:'바람'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);

    const onClick = () => {
        const nextNames = names.concat({
            id : nextId,
            text : inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };

    const onRemove = id => {
        const nextNames = names.filter(n => n.id !== id);
        setNames(nextNames);
    };
    
    const nameList = names.map(n => 
        <li key={n.id} onDoubleClick={() => onRemove(n.id)}>
            {n.text}
        </li>
    );

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={onChange}
            ></input>
            <button onClick={onClick}>추가</button>
            <ul>
                {nameList}
            </ul>
        </div>
    );
};

export default IterationSample;