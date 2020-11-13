import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Switch from 'react-switch';

import { MdExpandMore } from 'react-icons/md';
import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/burer_logo.png';

import { Container, Content, Store, DivSwitch } from './styles';

export default function Header() {
  const [stateAcept, setStateAcept] = useState(false);
  const [stateStore, setStateStore] = useState(false);
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  // const profile = useSelector(state => state.user.profile);
  const profile = { name: 'Alfred Delivery' };

  function handleSignOut() {
    dispatch(signOut());
  }

  function statusstateAcept() {
    setStateAcept(!stateAcept);
  }

  function statusStore() {
    setStateStore(!stateStore);
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="alfred" />
          <MdExpandMore size={24} color="#888" />
          <Link to="/dashboard">BURGER BAR</Link>
        </nav>
        <aside>
          <Store>
            <div style={{ marginRight: 10 }}>
              <span>SUA LOJA ESTÁ</span>
              <span className="Featured">
                {stateStore ? 'ABERTA' : 'FECHADA'}
              </span>
              <DivSwitch>
                <Switch
                  onChange={statusStore}
                  checked={stateStore}
                  width={36}
                  height={20}
                />
              </DivSwitch>
            </div>
            <div className="right">
              <span>ACEITE AUTOMÁTICO ESTÁ</span>
              <span className="Featured">
                {stateAcept ? 'LIGADO' : 'DESLIGADO'}
              </span>
              <DivSwitch>
                <Switch
                  onChange={statusstateAcept}
                  checked={stateAcept}
                  width={40}
                  height={20}
                />
              </DivSwitch>
            </div>
          </Store>
        </aside>
      </Content>
    </Container>
  );
}
