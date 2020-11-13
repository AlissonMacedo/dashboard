import React, { useState, useEffect } from 'react';
import { Container, Divisor } from './styles';

function ButtonOptions({ teste }) {
  const [state, setState] = useState(false);

  console.log('key', teste);

  function myFunction(teste) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }

    document.getElementById(teste).classList.toggle('show');
  }

  return (
    <Container>
      <div className="dropdown">
        <button
          onClick={() => myFunction(teste)}
          className="dropbtn"
          type="button"
        >
          ...
        </button>
        <div id={`${teste}`} className="dropdown-content">
          <a
            onClick={() => {
              alert('oi');
            }}
            href="#home"
          >
            Editar
          </a>
          <a href="#about">Excluir</a>
          <Divisor />
          <a href="#contact">Duplicar</a>
        </div>
      </div>
    </Container>
  );
}

export default ButtonOptions;
