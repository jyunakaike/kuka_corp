import React from 'react';

// components
import { Nav } from './Nav';
import { Introduction } from './Introduction';
import { MVC } from './MVC';
import { Beneficios } from './Beneficios';
import { Mapa } from './Mapa';
import { FAQS } from './FAQS';
import { ContactsNav } from './ContactsNav';

const App = () => {
  return (

    <React.Fragment>
        <Nav />
        <ContactsNav />
        <Introduction />
        <MVC />
        <Beneficios />
        <Mapa />
        <FAQS />
    </React.Fragment>

  )
}

export default App