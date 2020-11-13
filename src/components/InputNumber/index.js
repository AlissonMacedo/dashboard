import React, { useState } from 'react';
import { MdAddCircleOutline, MdRemove } from 'react-icons/md';

import { Container, Body } from './styles';

function InputNumber({ label }) {
  const [value, setValue] = useState(1);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return (
    <Container>
      <span>{label || 'label'}</span>
      <Body>
        <button
          onClick={() => {
            decrement();
          }}
          type="button"
          className="actions"
        >
          <MdRemove size={18} color="#345" />
        </button>
        <span>{value}</span>
        <button onClick={() => increment()} type="button" className="actions">
          <MdAddCircleOutline size={18} color="#345" />
        </button>
      </Body>
    </Container>
  );
}

export default InputNumber;
