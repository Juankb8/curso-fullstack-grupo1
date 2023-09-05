 
function Colors(props) {
  const color = props.color
  return (
    <div style={{backgroundColor:color, height:22,width:'100%'}}>
        <button onClick={props.show}>Click</button>
    </div>
  );
}

export default Colors;
