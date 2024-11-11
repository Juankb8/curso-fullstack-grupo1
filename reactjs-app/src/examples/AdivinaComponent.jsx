import React, { useState } from "react";

function AdivinaComponent() {
  const [numero, setNumero] = useState(1);
  const [sorteo, setSorteo] = useState(0);
  const [result, setResult] = useState(false);
  const [contador, setContador] = useState(0);
  const [perdidas, setPerdidas] = useState(0);
  const [ganadas, setGanadas] = useState(0);
  const sortear = () => {
    const winner = Math.floor(Math.random() * 10) + 1;
    setSorteo(winner); //asigno valor por función
    setResult(true); //asignos valor por función
  };
  const valido = (y) => {
    if (y < 0 || y > 10) {
      alert("Ingresa un número del 1 al 10");
      setNumero(numero[0]);
    }
  };
  const modificar1 = () => {
    setContador(contador + 1);
  };
  const modificar2 = (e) => {
    if (sorteo == numero) {
      setGanadas(ganadas + 1);
    }
  };

  const modificar3 = (j) => {
    if (sorteo != numero) {
      setPerdidas(perdidas + 1);
    }
  };

  return (
    <div style={{ margin: 30 }}>
      {!result ? (
        <div>
          <h4>Adivina el Número del 1 al 10</h4>
          <input
            type="number"
            value={valido(numero)}
            onChange={(e) => setNumero(e.target.value)}
          ></input>
          <br />
          <button onClick={() => sortear()}>SORTEAR</button>
        </div>
      ) : (
        <>
          <hr />
          <h3>Usted eligió el {numero}</h3>
          <h3>Salió el número: {sorteo}</h3>
          <h3>
            {sorteo == numero ? (
              <span className="Ganador">"Ha Ganado!"</span>
            ) : (
              <span className="Perdedor">"Siga participando"</span>
            )}
          </h3>
          <br />
          <button
            onClick={() => {
              setResult(false);
              setNumero(1);
              modificar1();
              modificar3();
              modificar2();
            }}
          >
            Volver a jugar
          </button>
          <br />
          <br />
          <div className="cajaIntentos">
            <div className="Total partidas">
              <h3>Total jugadas</h3>
              <input
                type="number"
                value={contador}
                onChange={modificar1}
                readOnly
              />
            </div>
            <div className="ganadas">
              <h3>Total ganadas</h3>
              <input
                type="number"
                value={ganadas}
                onChange={modificar2}
                readOnly
              />
            </div>
            <div className="perdidas">
              <h3>Total perdidas</h3>
              <input
                type="number"
                value={perdidas}
                onChange={modificar3}
                readOnly
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AdivinaComponent;

//ejercicio
// 1- contar cuantas veces jugó, cuantas ganó y cuantas perdió
// 2- mostrar en rojo cuando pierda y en verde cuando gana
// 3- validar el ingreso a número del 1 al 10
