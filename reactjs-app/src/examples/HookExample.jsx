import React, { useState } from 'react';
import { Link } from "react-router-dom";


function HookExample(props) {
    const [suma, setSuma] = useState(0)

    const sumar = () => {
        setSuma(suma + 1);
    }

    return (
        <div style={{ margin: 30 }}>
            <Link to="colors">COLORS</Link>
            <br/>
            <Link to="feeds">FEEDS</Link>
            <br/>
            <button onClick={() => sumar()}>Agregar 1</button>
            <br />
            <span>{suma}</span>
        </div>
    );
}

export default HookExample;