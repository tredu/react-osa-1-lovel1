import React from 'react';

const Tehtava7 = ({info, setInfo, newInfo, setNewInfo}) => {

    const addInfo = (event) => {
        event.preventDefault();

        let tempInfo = {...newInfo, id: (Math.floor(Math.random(1000000000000000) * 1000000000000000)), likes: 0};

        setInfo(info.concat(tempInfo));

        setNewInfo({desc:"", url:""});
    }

    const infoChangeHandler = (event, field) => {
        const tempInfo = {...newInfo};
        tempInfo[field] = event.target.value;
        setNewInfo(tempInfo);
    }


    const addLike = id => {
        const tempInfo = info.map(info => {
            if(info.id === id){
                info = {...info, likes: (info.likes + 1)};
            }
            return info;
        })
        setInfo(tempInfo);
    }

    const likesAmount = info.map(infoElement => infoElement.likes);
    const total = likesAmount.reduce((a, b) => a + b, 0);

    return (
        <div className="linkForm">
            <form onSubmit={addInfo}>
                <p>Kuvaus:</p>
                <input value={newInfo.desc} onChange={e=>infoChangeHandler(e, 'desc')}/>
                <p>URL:</p>
                <input value={newInfo.url} onChange={e=>infoChangeHandler(e, 'url')}/>
                <button type="submit">Talenna</button>
            </form>

            <hr></hr>

            <p>Kaikki tykkäykset: <b>{total}</b></p>

            {info.map((infoElement, i) =>
                <div className="linkTextElement" key={i}>
                
                <p>{infoElement.desc}</p>
                <a href={infoElement.url}>Linkki</a>
                <br></br>
                <button onClick={()=>addLike(infoElement.id)}>Like!</button>
                <span>{infoElement.likes}</span>
                </div>)}
        </div>
    )
}

export default Tehtava7;