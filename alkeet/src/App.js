import React from 'react';
import Tehtava1a from './components/Tehtava1a.js';
import Tehtava1c from './components/Tehtava1c.js';
import Tehtava2 from './components/Tehtava2.js';
import './App.css';

const App = () => {
  return (
    <>
      <header className="App-header">
        <h1>React Alkeet</h1>
      </header>

      <section className="harjoitukset">
      <div className="harjoitukset1">
        <h1>Harjoitukset 1</h1>
        <hr></hr>
        <h2>Tehtävä 1a</h2>
        <div className="teht1a">
          <Tehtava1a kurssi="Ohjelmointikielet" ope="Tiina Partanen" luokka="2074" linkki="https://otredu.github.io/react/index.html" />
          <Tehtava1a kurssi="Tietokannat" ope="Eerikki Maula" luokka="2069" linkki="https://otredu.github.io/tietokannat/index.html" />
          <br></br>
        </div>
          <h2>Tehtävä 1c</h2>
          <div className="teht1c">
          <Tehtava1c name1="Maksim Petrov" age1="20" email1="makpet@email.com" imgsrc1="https://www.nautec.com/wp-content/uploads/2018/04/placeholder-person.png"
                     name2="John Watson" age2="40" email2="jw@email.com" imgsrc2="https://www.nautec.com/wp-content/uploads/2018/04/placeholder-person.png"
                     name3="Sherlock Holmes" age3="50" email3="sh@email.com" imgsrc3="https://www.nautec.com/wp-content/uploads/2018/04/placeholder-person.png"/>
          <br></br>
        </div>
        <h2>Tehtävä 2</h2>
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
      </div>
      </section>
    </>
  );
}

export default App;
