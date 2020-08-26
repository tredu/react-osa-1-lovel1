import React from 'react';

const Tehtava7 = (newInfo, setNewInfo, info, setInfo, desc, url) => {
    const infoChangeHandler = (event, field) => {
    const tempInfo = {...newInfo};
    tempInfo[field] = event.target.value;
    setNewInfo(tempInfo);
    };


    return (
    <>
    <p>Kuvaus:</p>
    <input type="text" value={newInfo.desc} className="info" onChange={e=>infoChangeHandler(e, 'desc')} />
    <p>URL:</p>
    <input type="text" value={newInfo.url} className="info" onChange={e=>infoChangeHandler(e, 'url')} />
    <div className="links">
    {info.map((infoElement) => 
        <div className="link">
        <p>{infoElement}</p>
        <a url={url}>Linkki</a>
        </div>)
    }
    </div>
    </>
    )
}

export default Tehtava7;