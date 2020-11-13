import React from 'react';

import { MdSearch } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { loadProductsSearchRequest } from '~/store/modules/products/actions';

import { Container } from './styles';

function SearchBar() {
  const dispatch = useDispatch();
  const { baseFilterproducts } = useSelector(state => state.products);

  const searchProducts = e => {
    dispatch(loadProductsSearchRequest(baseFilterproducts, e.target.value));
    console.log('text', e.target.value);
  };

  return (
    <Container>
      <MdSearch size={20} color="#888" />
      <input placeholder="Pesquisar..." onChange={e => searchProducts(e)} />
    </Container>
  );
}

export default SearchBar;
