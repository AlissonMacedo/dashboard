import styled from 'styled-components';

export const Container = styled.div`
  /* max-width: 980px; */
  width: 100%;
  display: flex;

  flex-direction: column;
  height: 100%;
`;

export const DivHeader = styled.div`
  height: 40px;
  display: flex;

  align-items: center;
  flex-direction: row;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  margin-top: 30px;
`;

export const DivIcons = styled.div`
  width: 20px !important;
  height: 30px !important;

  display: flex;
  align-items: center;
  justify-content: center;
`;
