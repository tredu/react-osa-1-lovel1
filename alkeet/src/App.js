import React from 'react';
import Course from './components/Course';
import Picture from './components/Picture';
import Link from './components/Link';
import List from './components/List';
import StudentList from './components/StudentList';
import './App.css';

let students = ["Marko", "Lassi", "Emilia", "Susanna"];


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <h1>React Alkeet Demoja</h1>
      </header>
      <section className="demo">
      <StudentList names = {students} />
      <Course name='Tiina Partanen' coursetitle='Ohjelmointikielet' classroom='2074'/>
      <Picture title='Kuva 1' source='https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2019/10/giant-panda-750x400.jpg' desc='Ensimäinen teksti'/>
      <Picture title='Kuva 2' source='https://www.peta.org/wp-content/uploads/2017/03/iStock-157381164_freder.jpg' desc='Toinen teksti'/>
      <Link title='Linkki numero 1' link='https://yle.fi/' desc='Yle'/>
      <Link title='Linkki numero 2' link='https://www.hs.fi/' desc='Helsingin Sanomat'/>
      <List item='item1'/>
      <List item='item2'/>
      <List item='item3'/>
      </section>
    </div>
  );
}

export default App;
