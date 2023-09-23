import { useState } from "react"

export const ListaTemas = () => {
    
    const [temas,setTemas] = useState([])
    const [nombreTema, setNombreTema] = useState('')
    const [nombreArtista, setNombreArtista] = useState('')


    const handleInputChange = (e) => {
        setNombreTema(e.target.value)
    }
    

    const handleInputChange2 = (e) =>{
           setNombreArtista(e.target.value)
    }

    const onSubmit = (e) =>{
        if(nombreTema !== '' &&  nombreArtista !== ''){
            const nuevoTema = {
            id: temas.length +1,
            tema: nombreTema,
            artista: nombreArtista}
            setTemas([...temas, nuevoTema])
        e.preventDefault()
        
        setNombreTema('')
        setNombreArtista('')
        }else if(nombreTema !== '' && nombreArtista === ''){
            const nuevoTema = {
                id: temas.length +1,
                tema: nombreTema,
                artista: 'Artista no definido'}
                setTemas([...temas, nuevoTema])
        e.preventDefault()
       
        setNombreTema('')
        setNombreArtista('')
    } else e.preventDefault()
    }


  return (<>
  <div style={{backgroundColor:'grey',color:'black', padding:'20px'}}>
        <h1>Puedes armar tu lista favorita de canciones:</h1>

        <form>
            Canción: <br /><input type='text' value={nombreTema} onChange={handleInputChange}/>
            <br />
            Artista: <br /><input type="text" value={nombreArtista} onChange={handleInputChange2}/>
            <br />
            <button style={{marginTop:'15px'}} type="submit" onClick={onSubmit}>Agregar Tema a la lista</button>
        </form>

    <br />
    {(temas.length>0) ?(<>
        <h3>Tu lista de temas favoritos:</h3>
        <ul>
    
            {temas.map((cancion => <li style={{fontSize:'15px'}} key={cancion.id}>{cancion.tema} - {cancion.artista}</li>))}
        
        </ul>
        </>
    ):('')}
    
    
    </div>
    </>
  )
}