import React , {useState} from 'react';

// components
import { Nav } from './Nav';
import { Introduction } from './Introduction';
import { MVC } from './MVC';
import { Beneficios } from './Beneficios';
import { Mapa } from './Mapa';
import { FAQS } from './FAQS';
import { ContactsNav } from './ContactsNav';

import { ModalContainer } from './Nav/ModalContainer';

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalQR = () => {
    setOpenModal(true)
  }


  return (
    <React.Fragment>
        <Nav openModalQR={openModalQR} />
        <ContactsNav  openModalQR={openModalQR}/>
        <Introduction />
        <MVC />
        <Beneficios />
        <Mapa />
        <FAQS />

        {
          (openModal) && <ModalContainer setOpenModal={setOpenModal} />
        }

    </React.Fragment>

  )
}

export default App