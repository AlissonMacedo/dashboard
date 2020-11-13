import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #f4f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;

  max-width: 520px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  padding: 40px 30px;

  border-radius: 5px;
  background: #fff;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

  div.divLabelLogin {
    display: flex;
    flex-direction: row;
    width: 300px;

    padding-top: 20px;

    justify-content: flex-start;
    align-items: flex-start;
    margin: 10px 5px;

    h4 {
      color: #999;
      font: 16px 'Roboto', sans-serif;
      margin: 0px;
    }
  }

  div.lessPassword {
    display: flex;
    flex-direction: row;
    width: 300px;

    padding-top: 0px;

    justify-content: flex-end;
    align-items: flex-end;
    margin: 7px 10px;

    a {
      margin: 0;
    }

    h4 {
      color: #3b9eff;
      font: 12px 'Roboto', sans-serif;
      margin: 0px;
    }
  }

  div.checkboxSaveLogin {
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 20px;

    padding-top: 0px;

    justify-content: flex-start;
    align-items: center;
    margin: 10px 5px;

    input {
      height: 15px;
      width: 15px;

      border: 1px solid #999;
    }

    h4.textCheckBox {
      color: #999;
      font: 16px 'Roboto', sans-serif;
      margin: 0 5px;
    }
  }

  div.spaceImage {
    height: 100px;
    display: flex;
    flex-direction: center;
    align-items: center;
  }

  img {
    width: 160px;
    height: 70px;
  }

  h4 {
    color: #777;
    font: 14px 'Roboto', sans-serif;
    margin: 0px;
  }

  input {
    width: 300px;
    background: #fff;
    border: 0;
    border-radius: 0px;
    height: 34px;
    padding: 0 10px;
    color: #333;
    margin: 0 0 0px;
    border: 1px solid #ddd;

    &::placeholder {
      color: #ddd;
    }
  }

  span {
    color: #999;
    align-self: flex-start;
    margin: 10px 10px;
    font-weight: bold;
  }

  div.spaceBottom {
    height: 100px;
    display: flex;
    flex-direction: center;
    align-items: center;
  }

  button {
    margin: 5px 0 0;
    width: 200px;
    height: 44px;

    background: #54abf7;
    font-weight: bold;
    color: #fff;
    border: 0;

    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 14px;

    &:hover {
      background: ${darken(0.03, '#54abf7')};
    }
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }

  div.rememberpassword {
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 20px;

    padding-top: 0px;

    justify-content: center;
    align-items: center;
    margin: 10px 5px;

    a {
      margin: 0 5px;
    }

    input {
      height: 15px;
      width: 15px;

      border: 1px solid #999;
    }

    h4.textBackToHome1 {
      color: #999;
      font: 13px 'Roboto', sans-serif;
      margin: 0 0px;
    }

    h4.textBackToHome2 {
      color: #54abf7;
      font: 13px 'Roboto', sans-serif;
      margin: 0 0px;
    }
  }
`;
