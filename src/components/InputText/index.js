import React, { useState } from 'react';
import formatValue from '~/utils/formatValue';

import { Container } from './styles';

function InputText({ label, placeholder, width, money }) {
  const [value, setValue] = useState(0.0);

  function setValueNumber(e) {
    const { value } = e.target;

    console.log(value.replace('R$', ''));
    setValue(value.replace('R$', ''));
  }

  return (
    <Container width={width}>
      {label && <span>{label}</span>}
      {money ? (
        <input
          placeholder={placeholder}
          value={formatValue.format(value)}
          onChange={e => setValueNumber(e)}
        />
      ) : (
        <input placeholder={placeholder} />
      )}
    </Container>
  );
}

export default InputText;
