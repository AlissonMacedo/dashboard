import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;

  margin-right: 20px;

  button {
    background-color: #76b5ed;
    border: 0;
    border-radius: 4px;

    height: 40px;
    width: 180px;

    span {
      color: #fff;
      font-size: 14px;
    }
  }

  ul {
    margin-top: 20px;

    li {
      div {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      button {
        display: flex;
        flex-direction: row;
        align-items: center;

        width: 100%;
        justify-content: space-between;
        padding: 0 15px;

        height: 50px;
        border: 0;
        background-color: transparent;
      }

      background-color: #fff;
      display: flex;
      align-items: center;

      height: 50px;
      justify-content: space-between;

      border: 0;
      border-top: 0.5px solid #eee;

      span {
        font-size: 16px;
        margin-left: 10px;
        color: #666;
      }
    }

    li:hover {
      background-color: #eee;
    }

    li:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border-top: 0px;
    }

    li:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    li.active {
      border-left: 3px solid #999;
    }
  }
`;

export const DivIcons = styled.div`
  width: 20px !important;
  height: 30px !important;

  display: flex;
  align-items: center;
  justify-content: center;
`;
