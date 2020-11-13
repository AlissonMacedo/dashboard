import React from 'react';
import Loader from 'react-loader-spinner';

import { Container } from './styles';

function Loading() {
  return (
    <Container>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={60}
        width={60}
        // timeout={3000} // 3 secs
      />
    </Container>
  );
}

export default Loading;
