import styled from 'styled-components';

export const Container = styled.div`
  width: 40px;
  height: 100%;

  display: flex;
  align-items: center;
  padding-top: 10px;

  .dropbtn {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    width: 40px;
    height: 40px;

    color: #888;
    font-weight: bold;
    font-size: 20px;

    border: 0px;
  }

  .dropbtn:hover,
  .dropbtn:focus {
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #fff;

    min-width: 110px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

    margin-top: -10px;
    margin-left: -90px;
    z-index: 1;
  }

  .dropdown-content a {
    color: #888;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown a:hover {
    background-color: #eee;
  }

  .show {
    display: block;
  }
`;

export const Divisor = styled.div`
  border-top: 0.5px solid #ddd;
`;
