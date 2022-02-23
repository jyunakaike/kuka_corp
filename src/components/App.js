import React from 'react';

// components
import { Nav } from './Nav';
import { Introduction } from './Introduction';
import { MVC } from './MVC';
import { Beneficios } from './Beneficios';
import {Mapa} from './Mapa';

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <Introduction />
      <MVC />
      <Beneficios />
      <Mapa />

    </React.Fragment>
  )
}

export default App