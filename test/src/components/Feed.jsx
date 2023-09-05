import React from 'react';
import Colors from '../components/Colors';

function Feed(props) {
    const showAlert=()=> {
        alert('alert')
    }

    return (
        <div style={style.feed}>
            <img src={props.img} height="200"></img>
            <h3 style={style.title}>{props.title}</h3>
            <p style={style.detail}>{props.detail}</p>
            <Colors show={showAlert} color={props.color}></Colors>
        </div>
    );
}
const style = {
    feed: {
        backgroundColor:'#eee',
        border: '1px solid #ccc',
        margin: 10,
        width: 500
    },
    title: {
        fontSize:24
    },
    detail: {
        fontSize:18
    }
}
export default Feed;