import React from 'react';

const Tehtava1a = ({kurssi, ope, luokka, linkki}) => {
    return (
        <div className="Teht1aElement">
            <h3>Kurssi: {kurssi}</h3>
            <p>Opettaja: {ope}</p>
            <p>Luokka: {luokka}</p>
            <a href={linkki}>Linkki materiaaliin</a>
        </div>
    )
}

export default Tehtava1a;