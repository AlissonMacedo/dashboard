import React from 'react';

import ListCategory from '~/components/ListCategory';
import ListProduct from '~/components/ListProducts';
import NewProduct from '~/components/NewProduct';

import { Container, Body, DivHeader } from './styles';

function Products() {
  return (
    <Container>
      <NewProduct />
      <DivHeader>
        <h1>Produtos</h1>
      </DivHeader>
      <Body>
        <ListCategory />
        <ListProduct />
      </Body>
    </Container>
  );
}

export default Products;
