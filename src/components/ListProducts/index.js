import React from 'react';
import { MdMoreHoriz, MdMenu } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Search from '~/components/SearchBar';
import ButtonOptions from '~/components/ButtonOptions';
import formatValue from '~/utils/formatValue';
import Loading from '~/components/Loading';
import ButtonStatus from '~/components/ButtonStatus';

import { Container, DivIcons } from './styles';

function ListProducts() {
  const { products, loadingProducts, loadingCategories } = useSelector(
    state => state.products
  );
  console.log('teste produtos', products);

  return (
    <Container>
      <div>
        <button type="button">
          <span>Adicionar Produtos</span>
        </button>
        <Search />
      </div>
      {loadingCategories || loadingProducts ? (
        <Loading />
      ) : (
        <ul>
          {products &&
            products.map(product => (
              <li key={product.idProduct}>
                <div className="first">
                  <DivIcons>
                    <MdMenu size={20} color="#888" />
                  </DivIcons>
                  <span>{product.productName}</span>
                </div>
                <div className="center">
                  <span>{formatValue.format(product.productPrice)}</span>
                  <ButtonStatus />
                </div>
                <ButtonOptions teste={product.idProduct} />
              </li>
            ))}
        </ul>
      )}
    </Container>
  );
}

export default ListProducts;
