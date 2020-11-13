import React, { useEffect, useState } from 'react';
import { MdMoreHoriz, MdMenu } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadProductsRequest,
  loadCategoriesRequest,
} from '~/store/modules/products/actions';
import { Container, DivIcons } from './styles';

import Loading from '~/components/Loading';

function ListCategory() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(1);
  const { categories, loadingCategories } = useSelector(
    state => state.products
  );

  useEffect(() => {
    dispatch(loadCategoriesRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectProducts = id => {
    dispatch(loadProductsRequest(id));
  };

  const selected = id => {
    setActive(id);
  };

  return (
    <Container>
      <button type="button">
        <span>Adicionar Categoria</span>
      </button>
      {loadingCategories ? (
        <Loading />
      ) : (
        <ul>
          {categories &&
            categories.map(category => (
              <li
                className={active === category.idProductSubCategory && 'active'}
                key={category.idProductSubCategory}
              >
                <button
                  type="button"
                  onClick={() => {
                    selectProducts(category.idProductSubCategory);
                    selected(category.idProductSubCategory);
                  }}
                >
                  <div>
                    <DivIcons>
                      <MdMenu size={20} color="#888" />
                    </DivIcons>
                    <span>{category.productSubCategory}</span>
                  </div>
                  <MdMoreHoriz size={20} color="#888" />
                </button>
              </li>
            ))}
        </ul>
      )}
    </Container>
  );
}

export default ListCategory;
