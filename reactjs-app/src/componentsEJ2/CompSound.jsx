

export const CompSound = (props) => {
    return (
      <div >
        <h1>Componente Sonido</h1>
      <audio controls >
        <source src={props.sound} type="audio/mpeg" />
          tu navegador no es compatible!
      </audio>

      </div>
    )
  }
  