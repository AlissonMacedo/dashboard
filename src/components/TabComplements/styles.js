import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  padding: 40px 20px 20px;
`;

export const Row = styled.div`
  width: 100%;
  height: ${props => (props.second ? '30px' : '90px')};

  display: flex;
  flex-direction: row;
  align-items: center;
`;
