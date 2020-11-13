import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 40px;
  background-color: #fff;

  border-radius: 6px;
  padding: 0 10px;
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-left: 10px;

  input {
    border: 0;
    width: 100%;
    margin-left: 5px;
    color: #666;
  }

  input::placeholder {
    color: #888;
    opacity: 1;
  }
`;
