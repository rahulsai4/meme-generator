import React from "react";
import { useState } from "react";

const Counter = (props) => {
    // destructure the array returned my useState
    let [count, setCount] = useState(props.number);

    function handleMinusClick() {
        if (count !== 0) setCount((count) => count - 1);
    }
    function handlePlusClick() {
        setCount((count) => count + 1);
    }

    return (
        <div>
            <button onClick={handleMinusClick}>minus</button>
            <span> {count} </span>
            <button onClick={handlePlusClick}>plus</button>
        </div>
    );
};

export default Counter;
