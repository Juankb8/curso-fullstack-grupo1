import React, { useEffect, useState } from 'react'

export const EffectComponent = (props) => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
      
        console.log("El componente se actualizó")

    }, [counter])

    
    

    return (
        <>
            <button onClick={()=>setCounter(counter + 1)} >
                Incrementar
            </button>
            <h2>Resultado: {counter}</h2>
        </>
    )
}
