import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Title>Faça seu logon</Title>

      <Input icon="mail" name="email" placeholder="E-mail" />
      <Input icon="lock" name="password" placeholder="Senha" />

      <Button
        onPress={() => {
          console.log('deu');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
