import React from 'react';

const Tehtava2 = () => {

    const courses = [{id: 1, kurssi: "ReactJS", ope: "Tiina Partanen", luokka: "2074"},
                     {id: 2, kurssi: "Tietokannat", ope: "Eerikki Maula", luokka: "2069"},
                     {id: 3, kurssi: "Systeemityö", ope: "Leena Niemi", luokka: "2074"},]

    return (
        
        courses.map(course =>
            <tr key={course.id}>
                <td>{course.kurssi}</td>
                <td>{course.ope}</td>
                <td>{course.luokka}</td>
            </tr>
            )
    )
}

export default Tehtava2;