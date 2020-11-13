import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  span {
    color: #666;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  height: 38px;

  margin: 7px 0px;
  justify-content: space-between;
  align-items: center;

  width: 110px;
  border: 1.5px solid #e1e1e1;
  background-color: #fff;

  button.actions {
    width: 33px;
    height: 100%;
    border: 0px;

    background-color: #fff;
    display: flex;
    align-items: center;

    justify-content: center;
  }

  span {
    color: #888;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    padding-top: 2px;
  }

  input {
    color: #888;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    width: 50px;
    height: 100%;

    padding: 0 20px;
    border: 0px;
    background-color: #345;
  }

  input::placeholder {
    color: #999;
    opacity: 1;
  }
`;
