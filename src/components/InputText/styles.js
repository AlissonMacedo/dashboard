import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => (props.width ? `${props.width}px` : '200px;')};

  padding: 10px;

  span {
    color: #666;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  input {
    padding: 8px;
    margin: 7px 0px;

    color: #888;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    border: 1.5px solid #e1e1e1;
  }

  input::placeholder {
    color: #999;
    opacity: 1;
  }
`;
