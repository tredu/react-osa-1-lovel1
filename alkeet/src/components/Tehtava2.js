import React from 'react';

const Tehtava2 = () => {

    const courses = [{kurssi: "ReactJS", ope: "Tiina Partanen", luokka: "2074"},
                     {kurssi: "Tietokannat", ope: "Eerikki Maula", luokka: "2069"},
                     {kurssi: "Systeemityö", ope: "Leena Niemi", luokka: "2074"},]

    return (
        courses.map(course =>
            <tr>
                <td>{course.kurssi}</td>
                <td>{course.ope}</td>
                <td>{course.luokka}</td>
            </tr>
            )
    )
}

export default Tehtava2;