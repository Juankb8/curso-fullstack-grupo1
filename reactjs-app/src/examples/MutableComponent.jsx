import React from 'react';

function MutableComponent(props) {
    let suma = 0

    const sumar = () => {
        suma=suma+1;
    }

    return (
        <div style={{margin:30}}>
            <button onClick={sumar()}>Agregar 1</button>
            <br/>
            <span>{suma}</span>
        </div>
    );
}

export default MutableComponent;