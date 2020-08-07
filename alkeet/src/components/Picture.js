import React from 'react';
import '../App.css';

const Picture = (props) => {
    return (
        <div>
          <h2>{props.title}</h2>
          <img src={props.source}></img>
          <p>{props.desc}</p>
      </div>
    );
}

export default Picture;