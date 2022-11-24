
import './Dropdown.css';
import React, { useState } from 'react';

function DropDown({title,items,label}) {
    const [isOpen, setIsOpen] = useState(false);
    const [dropPoint, setDropPoint] = useState(title);
    const [optionsListed, setOptions] = useState(new Set());

    function setListed(item){
        if (optionsListed.has(item.name)) {
            optionsListed.delete(item.name);
        } else {
            optionsListed.add(item.name);
        }
        setOptions(optionsListed);
        let current = "";
        optionsListed.forEach (function(value) {
            current += value + " ";
        });
        current = current == "" ? title : current;
        setDropPoint(current);
    }

    return (
        <div className='dropDownBox'>
            <div>{label}</div>
            <div>Select and multiselect are demonstrated below.</div>
            <button className='headerButton' onClick={() => setIsOpen(!isOpen)}>
                {dropPoint}
            </button>
            {isOpen && (
                <div
                >
                    {items.map((item) => {
                        return (
                            <button className='elementButton'
                                key={item.key}
                                onClick={() => setListed(item)}
                            >
                            {item.name}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default DropDown;