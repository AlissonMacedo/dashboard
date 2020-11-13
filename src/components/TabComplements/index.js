import React, { useState } from 'react';

import CurrencyInput from 'react-currency-input';
import { Container, Row } from './styles';
import InputText from '~/components/InputText';
import InputNumber from '~/components/InputNumber';
import CheckOnly from '~/components/CheckOnly';
import ButtonOptions from '~/components/ButtonOptions';
import ButtonStatus from '~/components/ButtonStatus';

function TabComplements() {
  const [value, setValue] = useState();

  return (
    <Container>
      <Row>
        <InputText
          label="Grupo de Complemento"
          placeholder="É necessário talher?"
          width={400}
        />
        <InputNumber label="Qtd Mínima" />
        <InputNumber label="Qtd Máxima" />
        <CheckOnly label="Obrigatorio" />
        <ButtonOptions />
      </Row>
      <Row>
        <InputText
          label="Complemento"
          placeholder="Sim preciso de talheres"
          width={260}
        />
        <InputText label="Descrição" placeholder="..." width={250} />
        <InputText label="Valor" money placeholder="" width={150} />
        <ButtonStatus label="Pausado" />
        <ButtonOptions />
      </Row>
      <Row second>
        <InputText placeholder="..." width={260} />
        <InputText placeholder="..." width={250} />
        <InputText money placeholder="" width={150} />
        <ButtonStatus label="Pausado" />
        <ButtonOptions />
      </Row>
    </Container>
  );
}

export default TabComplements;
