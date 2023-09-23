

export const CompVideo = ({video}) => {
    return (
      <div>
        <h1>Componente video</h1> 
  
        <video width="300" controls >
          <source src={video} type="video/mp4"/>
          Your browser does not support HTML video.
        </video>

      </div>
    )
  }
  