import { useState } from "react"

export const CompFuncion = () => {
  const [capital,setCapital] = useState(50000)
  const [dias, setDias] = useState(30)
  const [interesTotal,setInterestotal] = useState(0)
  const [tasa, setTasa] = useState (116)


  const onSubmit = () =>{
    const resTotal = capital*((tasa * dias) / 365)/100
      if(dias >= 30){
      setInterestotal(resTotal.toFixed(2))
      }else alert('tienes que ingresar un mínimo de 30 días')
      setDias(30)
  }

  const handleInputChange = (e) => {
    setCapital(e.target.value)
  }
  
  const handleInputChange2 = (e) =>{
  setDias(e.target.value)
}

const handleInputChange3 = (e) => {
  setTasa (e.target.value)
}

  return (
    <div className="divPrincipal">
      <div className="divMenu">
        <h1>Simulador de Interes de Plazo Fijo</h1>
        <h4>Tasa Nominal Anual {tasa} %</h4>
        Tasa: %
        <br />
        <input className="inputPF" type="number" value={tasa} onChange={handleInputChange3}/>
        <br />
        Capital inicial en pesos:
        <br />
        <input className="inputPF" min='10000' step={10000} value={capital}  onChange={handleInputChange} type="number" />
        <br />

        Cant. días:
        <br /> 
        <input className="inputPF" min='30' value={dias} onChange={handleInputChange2}  type="number" /> 
        <br />
        <button className='botonCalcular' onClick={onSubmit}>Simular</button> 
        <div className="compFuncion">
            <p>El interes es de: </p>

            <h3 style={{color:'rgb(21, 254, 40)',fontSize:'18px'}}>${interesTotal}</h3>
        </div>
      </div>
    
    </div>

  )
}
