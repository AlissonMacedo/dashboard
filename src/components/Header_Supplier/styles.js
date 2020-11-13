import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  min-width: 930px;
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0 30px;

  -webkit-box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.05);
  -moz-box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.05);
  box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.05);
  position: relative;
  z-index: 999;
`;

export const Content = styled.div`
  width: 100%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: contain;
    }
    a {
      font-weight: bold;
      color: #666;
      font-size: 16px;
      margin-left: 5px;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Store = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;

  div.right {
    width: 350px;
    justify-content: flex-end;
  }

  div {
    height: 30px;
    display: flex;
    flex-direction: row;

    align-items: center;

    span {
      color: #888;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;

      padding: 5px 0 2px;
      padding-right: 5px;
    }
    span.Featured {
      color: #666;
      font-size: 16px;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
    }
  }
`;

export const DivSwitch = styled.div`
  width: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 10px !important;
  margin-right: ${props => props.left && '10px !important'};
`;
