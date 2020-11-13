import React from 'react';

import { Container } from './styles';

function ButtonStatus({ label }) {
  return (
    <Container>
      <button type="button">
        <span>{label}</span>
      </button>
    </Container>
  );
}

export default ButtonStatus;
