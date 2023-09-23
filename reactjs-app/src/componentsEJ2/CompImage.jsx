

export const CompImage = (props) => {
    return (
      <div
      style={{
        width:'550px',
        padding:'5px'}}>
          <h1>Componente Imagen</h1>
          <img 
          style={{
            borderRadius:'200%',
            border:'2px solid black',
            width:'400px'}} 
          src={props.img} 
          alt="Perros durmiendo" />
      </div>
    )
  }
  