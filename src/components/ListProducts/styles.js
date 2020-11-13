import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;

  width: 100%;
  min-width: 400px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
  }

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
      div.first {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        width: 260px;
        min-width: 260px;
        align-items: center;

        span {
          font-size: 16px;
          margin-left: 10px;
          color: #666;
        }
      }

      div.center {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        width: 100%;
        align-items: center;

        span {
          font-size: 16px;
          margin-left: 10px;
          color: #666;
        }
      }

      background-color: #fff;
      display: flex;
      align-items: center;

      height: 50px;
      padding: 0 15px;

      border: 0;
      border-top: 0.5px solid #eee;

      /* border-left: 3px solid #999; */
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
  }
`;

export const DivIcons = styled.div`
  width: 20px !important;
  height: 30px !important;

  display: flex;
  align-items: center;
  justify-content: center;
`;
