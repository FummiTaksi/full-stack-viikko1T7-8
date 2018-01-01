import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => {

    return (
        <h1>{props.teksti}</h1>
    )
}

const Sisalto = (props) => {
    var elementit = [];
    for (var i = 0; i < props.osat.length; i++) {
        var osa = props.osat[i];
        elementit.push(<p> {osa.nimi} {osa.tehtavaMaara}</p>);
    }
    return elementit;
}

const lisaaOsaListaan = (lista, nimi, tehtavat) => {
    lista.push({nimi: nimi, tehtavaMaara: tehtavat});
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  var elementit = [];
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  lisaaOsaListaan(elementit, osa1, tehtavia1);
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  lisaaOsaListaan(elementit, osa2 , tehtavia2);
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14
  lisaaOsaListaan(elementit, osa3 , tehtavia3);

  return (
    <div>
      <Otsikko teksti = 'Half Stack -sovelluskehitys' />
      <Sisalto osat = {elementit} />
      <p>yhteensä {tehtavia1 + tehtavia2 + tehtavia3} tehtävää</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)