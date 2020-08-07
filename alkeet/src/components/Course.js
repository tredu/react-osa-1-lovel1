import React from 'react';
import '../App.css';

const Course = (props) => {
  //let name = "Maksim Petrov";
  //let coursetitle = "Ohjelmointikielet";
  //let classroom = 2074;
  console.log(`Hei, ${props.name}`);
  return (
      <div>
          <h2>{props.coursetitle}</h2>
          <p>Nimi: {props.name}</p>
          <p>Luokkatila: {props.classroom}</p>
      </div>
  );
}

export default Course;