import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  right: 0;
  display: flex;

  flex-direction: row;
  justify-content: flex-end;
  z-index: 9999;

  background-color: rgba(0, 0, 0, 0.2);
`;

export const BodyMaster = styled.div`
  width: 920px;
  background-color: #eee;
  display: flex;

  flex-direction: column;
  padding: 80px 20px 0;

  h1 {
    color: #666;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
  }
`;

export const ContainerTab = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const HeaderTabs = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Tabs = styled.button`
  width: 100%;
  height: 45px;
  background-color: ${props => (props.active ? '#fff' : '#eee')};

  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
  border: 0px;
  border-top: ${props => props.active && '2px solid #12aa5e'};
  /* border-left: ${props => props.left && '1px solid #888'};
  border-right: ${props => props.rigth && '1px solid #888'}; */

  span {
    color: #444;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
`;
