import React from 'react';
import '../App.css';

const ListItem = (props) => {
    return (
        <li>{props.name}</li>
    )
}

const StudentList = (props) => {

        console.log(props.names);

    return (
        <div>
            <ul>
            {props.names.map(item => <li>{item}</li>)}
            </ul>
            <ul>
            {props.names.map(item => <ListItem name={item} />)}
            </ul>
        </div>
    );
}

export default StudentList;