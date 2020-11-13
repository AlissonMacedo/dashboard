import styled from 'styled-components';

export const Container = styled.div`
  width: ${props => (props.width ? '300px' : '50px')};
  min-width: ${props => (props.width ? '300px' : '50px')};
  background-color: #fff !important;

  ul {
    li {
      padding: 15px 15px;
      display: flex;
      flex-direction: row;

      cursor: pointer;
      align-items: center;

      span {
        color: #666;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;

        padding-left: 5px;
      }
    }

    li.active {
      background-color: #f2f4f7;
      border-left: 3px solid #666;
      padding: 15px 11px;
    }

    li.openclose {
      button {
        display: flex;
        justify-content: center;
        align-items: center;

        border: 0;
        width: 25px;
        height: 40px;
        background-color: #fff;
      }

      padding: 0;
      background-color: #fff;
      position: relative;
      justify-content: flex-end;

      height: 40px;
      margin-right: -25px;
      z-index: 10;
    }
  }
`;

export const DivIcon = styled.div`
  width: 35px;
  height: 20px;
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const Divsor = styled.div`
  width: 100%;
  border-top: 0.5px solid #eee;
  margin: 15px 0;
`;
