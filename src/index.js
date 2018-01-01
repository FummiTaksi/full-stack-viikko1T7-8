import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => {

    return (
        <h1>{props.text}</h1>
    )
}

const Sisalto = (props) => {
    var elements = [];
    for (var i = 0; i < props.courses.length; i++) {
        var element = props.courses[i];
        elements.push(<p> {element.name} {element.exercises}</p>);
    }
    return elements;
}

const lisaaOsaListaan = (lista, nimi, tehtavat) => {
    lista.push({name: nimi, exercises: tehtavat});
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  var elements = [];
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  lisaaOsaListaan(elements, osa1, tehtavia1);
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  lisaaOsaListaan(elements, osa2 , tehtavia2);
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14
  lisaaOsaListaan(elements, osa3 , tehtavia3);

  return (
    <div>
      <Otsikko text = 'Half Stack -sovelluskehitys' />
      <Sisalto courses = {elements} />
      <p>yhteensä {tehtavia1 + tehtavia2 + tehtavia3} tehtävää</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)