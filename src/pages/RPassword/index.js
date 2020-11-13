import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdPersonOutline } from 'react-icons/md';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo_vp.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Signin() {
  const [remember, setRemember] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    // dispatch(signInRequest(email, password));
    alert('adicionar saga de nova senha');
  }

  return (
    <>
      <div className="spaceImage">
        <img src={logo} alt="alfred_logo" />
      </div>

      <Form schema={schema} onSubmit={handleSubmit}>
        <div className="divLabelLogin">
          <h4>Login</h4>
        </div>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />

        <div className="spaceBottom">
          <button type="submit">
            {loading ? 'Carregando...' : 'Resetar a senha'}
          </button>
        </div>
        <div className="rememberpassword">
          <h4 className="textBackToHome1">Lembrou da senha? Vá para</h4>
          <Link to="/">
            <h4 className="textBackToHome2">Login</h4>
          </Link>
        </div>
      </Form>
    </>
  );
}
