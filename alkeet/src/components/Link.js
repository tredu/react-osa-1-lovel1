import React from 'react';
import '../App.css';

const Link = (props) => {
    return (
        <div>
          <h2>{props.title}</h2>
          <a href={props.link}>{props.desc}</a>
      </div>
    );
}

export default Link;