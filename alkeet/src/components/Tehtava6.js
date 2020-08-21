import React, {useState} from 'react';

const Tehtava6 = () => {
    const Skills = ["HTML", "CSS", "JavaScript", "PHP"];
    return (
        <>
        <ul>
            {(Skills) => {
                let x = Skills.split(',');
                for (var i=0; i++;)
                {
                  x[i] = x[i] + '<br />';
                  return <li>{x}</li>; 
                }
            }}
        </ul>
        </>
    )
}

export default Tehtava6;