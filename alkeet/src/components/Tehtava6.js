import React from 'react';

const Tehtava6 = ({skills, setSkills, newSkill, setNewSkill}) => {
    const addSkill = (event) => {
        event.preventDefault();

        setSkills(skills.concat(newSkill));

        setNewSkill('');
    }

    const handleSkillChange = (event) => {
    setNewSkill(event.target.value)
    }

    return (
        <>
        <h3>Olen oppinut seuraavia asioita:</h3>
        <ul>
            <form onSubmit={addSkill}>
                <input value={newSkill} onChange={handleSkillChange}/>
                <button type="submit">Talenna</button>
            </form> 
            {skills.map((skill, i) =>
                <li key={i}>{skill}</li>)}
            </ul>
        </>
    )
}

export default Tehtava6;