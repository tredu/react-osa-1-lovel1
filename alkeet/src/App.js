import React, {useState} from 'react';
import Tehtava1a from './components/Tehtava1a.js';
import Tehtava1c from './components/Tehtava1c.js';
import Tehtava2 from './components/Tehtava2.js';
import Tehtava3 from './components/Tehtava3.js';
import countries from './components/Tehtava3data.js';
import './App.css';
import Tehtava6 from './components/Tehtava6.js';

const App = () => {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show6, setShow6] = useState(false);
  return (
    <>
      <header className="App-header">
        <h1>React Alkeet</h1>
      </header>

      <section className="harjoitukset">
      <div className="harjoitukset1">
        <h1>Harjoitukset 1</h1>
        <hr></hr>
        <div className="tehtHeader">
        <h2>Tehtävä 1a</h2>
        <button onClick={e => setShow1(!show1)}>{show1 ? "Piilota" : "Näytä"}</button>
        </div>
        { show1 && 
        <div className="teht1a">
          <Tehtava1a kurssi="Ohjelmointikielet" ope="Tiina Partanen" luokka="2074" linkki="https://otredu.github.io/react/index.html" />
          <Tehtava1a kurssi="Tietokannat" ope="Eerikki Maula" luokka="2069" linkki="https://otredu.github.io/tietokannat/index.html" />
          <br></br>
        </div>
        }
          <div className="tehtHeader">
          <h2>Tehtävä 1c</h2>
          <button onClick={e => setShow2(!show2)}>{show2 ? "Piilota" : "Näytä"}</button>
          </div>
          { show2 && 
          <div className="teht1c">
          <Tehtava1c name1="Maksim Petrov" age1="20" email1="makpet@email.com" imgsrc1="https://www.nautec.com/wp-content/uploads/2018/04/placeholder-person.png"
                     name2="John Watson" age2="40" email2="jw@email.com" imgsrc2="https://www.nautec.com/wp-content/uploads/2018/04/placeholder-person.png"
                     name3="Sherlock Holmes" age3="50" email3="sh@email.com" imgsrc3="https://www.nautec.com/wp-content/uploads/2018/04/placeholder-person.png"/>
          <br></br>
        </div>
          }
        <div className="tehtHeader">
        <h2>Tehtävä 2</h2>
        <button onClick={e => setShow3(!show3)}>{show3 ? "Piilota" : "Näytä"}</button>
        </div>
        { show3 && 
        <div className="teht2">
          <table>
          <tr>
            <th>Kurssi</th>
            <th>Opettaja</th>
            <th>Luokka</th>
          </tr>
          <Tehtava2 />
          </table>
          <br></br>
        </div>
        }
        <div className="tehtHeader">
        <h2>Tehtävä 3</h2>
        <button onClick={e => setShow4(!show4)}>{show4 ? "Piilota" : "Näytä"}</button>
        <br></br>
        </div>
        { show4 &&
        <div className="teht3">
          <Tehtava3 countries = {countries}/>
          <br></br>
        </div>
        }
        <div className="tehtHeader">
        <h2>Tehtävä 6</h2>
        <button onClick={e => setShow6(!show6)}>{show6 ? "Piilota" : "Näytä"}</button>
        <br></br>
        </div>
        { show6 &&
        <div className="teht6">
          <Tehtava6 />
          <br></br>
        </div>
        }
      </div>
      </section>
    </>
  );
}

export default App;
