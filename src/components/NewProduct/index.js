import React, { useState } from 'react';

import {
  Container,
  BodyMaster,
  ContainerTab,
  HeaderTabs,
  Tabs,
} from './styles';

import TabComplements from '~/components/TabComplements';

function NewProduct() {
  const [active, setActive] = useState(2);

  return (
    <Container>
      <BodyMaster>
        <div style={{ marginTop: 40, marginBottom: 40 }}>
          <h1>Produtos</h1>
        </div>
        <ContainerTab>
          <HeaderTabs>
            <Tabs
              active={active === 1}
              onClick={() => {
                setActive(1);
              }}
            >
              <span>Detalhes</span>
            </Tabs>

            <Tabs
              onClick={() => {
                setActive(2);
              }}
              active={active === 2}
              left
              rigth
            >
              <span>Complementos</span>
            </Tabs>

            <Tabs
              active={active === 3}
              onClick={() => {
                setActive(3);
              }}
            >
              <span>Disponibilidade</span>
            </Tabs>
          </HeaderTabs>
          <TabComplements />
        </ContainerTab>
      </BodyMaster>
    </Container>
  );
}

export default NewProduct;
