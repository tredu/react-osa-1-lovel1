import React from 'react';

const Tehtava1c = (props) => {

    const students = [
        {
            name: props.name1,
            age: props.age1,
            email: props.email1,
            imgsrc: props.imgsrc1,
            id: 1,
        },
        {
            name: props.name2,
            age: props.age2,
            email: props.email2,
            imgsrc: props.imgsrc1,
            id: 2,
        },
        {
            name: props.name3,
            age: props.age3,
            email: props.email3,
            imgsrc: props.imgsrc1,
            id: 3,
        },

    ]


    return (
        students.map(student =>
            <div className="student" key={student.id}>
                <p>Name: {student.name}</p>
                <p>Age: {student.age}</p>
                <p>Email: {student.email}</p>
                <img src={student.imgsrc}></img>
            </div>
            )
    )
}

export default Tehtava1c;