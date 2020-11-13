import styled from 'styled-components';

const testWidhMin = width => {
  if (width <= 130) {
    return '130px';
  }
  return `${width}px`;
};

export const Container = styled.div`
  width: ${props => testWidhMin(props.width)};
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: row;

  padding: 30px 10px 10px;

  input {
    width: 20px;
    height: 20px;
    border-radius: 2px;
  }

  input:checked {
    border: 1px solid '#345' !important;
    border-radius: 2px;
  }

  span {
    color: #666;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin-left: 5px;
  }
`;
