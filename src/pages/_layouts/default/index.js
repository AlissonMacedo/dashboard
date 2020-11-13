import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header_Supplier';
import SideBar from '~/components/SideBar_Supplier';
import { Wrapper, Container, BodyMaster } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Container>
        <SideBar />
        <BodyMaster>{children}</BodyMaster>
      </Container>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
