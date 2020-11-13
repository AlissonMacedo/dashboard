import React from 'react';

import { Container } from './styles';

function CheckOnly({ label, width }) {
  return (
    <Container width={width}>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <span>{label}</span>
    </Container>
  );
}

export default CheckOnly;
