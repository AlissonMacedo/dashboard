import React, { useState, useEffect } from 'react';
import {
  MdAccountBalance,
  MdStore,
  MdKeyboardArrowLeft,
  MdShoppingBasket,
  MdAddShoppingCart,
  MdMonetizationOn,
  MdContentPaste,
  MdLocalShipping,
  MdPinDrop,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, DivIcon, Divsor } from './styles';

function SideBar_Supplier() {
  const [openClose, setOpenClose] = useState(true);

  const handleOpenClose = () => {
    setOpenClose(!openClose);
  };

  return (
    <Container width={openClose}>
      <ul>
        <li className="openclose">
          <button type="button" onClick={() => handleOpenClose()}>
            <MdKeyboardArrowLeft size={20} color="#666" />
          </button>
        </li>
        <Link to="/dashboard">
          <li className={window.location.pathname === '/dashboard' && 'active'}>
            <DivIcon>
              <MdStore size={20} color="#888" />
            </DivIcon>
            {openClose && <span>Dashboard</span>}
          </li>
        </Link>
        <Link to="/orders">
          <li className={window.location.pathname === '/orders' && 'active'}>
            <DivIcon>
              <MdShoppingBasket size={20} color="#888" />
            </DivIcon>
            {openClose && <span>Gestor de pedidos</span>}
          </li>
        </Link>
        <Link to="/products">
          <li className={window.location.pathname === '/products' && 'active'}>
            <DivIcon>
              <MdAddShoppingCart size={20} color="#888" />
            </DivIcon>
            {openClose && <span>Produtos</span>}
          </li>
        </Link>
        <li>
          <DivIcon>
            <MdAccountBalance size={20} color="#888" />
          </DivIcon>
          {openClose && <span>Meus Dados</span>}
        </li>
        <li>
          <DivIcon>
            <MdMonetizationOn size={20} color="#888" />
          </DivIcon>
          {openClose && <span>Financeiro</span>}
        </li>
        <li>
          <DivIcon>
            <MdContentPaste size={20} color="#888" />
          </DivIcon>
          {openClose && <span>Relatório Pedidos</span>}
        </li>
        <Divsor />
        <li>
          <DivIcon>
            <MdLocalShipping size={20} color="#888" />
          </DivIcon>
          {openClose && <span>Solicitar Empresarial</span>}
        </li>
        <li>
          <DivIcon>
            <MdPinDrop size={20} color="#888" />
          </DivIcon>
          {openClose && <span>Acompanhar Empresarial</span>}
        </li>
      </ul>
    </Container>
  );
}

export default SideBar_Supplier;
