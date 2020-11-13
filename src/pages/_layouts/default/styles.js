import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-direction: row;
  height: 100%;
  /* overflow: scroll; */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  width: 100%;
  height: calc(100% - 76px);
`;

export const BodyMaster = styled.div`
  display: flex;
  flex-direction: row;

  padding: 40px;
  background-color: #f2f4f7;
  width: 100%;
`;
