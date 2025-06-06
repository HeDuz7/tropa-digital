'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const Logo = styled.div`
  margin-bottom: 20px;
  img {
    width: 120px;
    height: auto;
  }
`;

const WelcomeText = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-bottom: 20px;
  padding: 8px 12px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #E76316;
  }
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  font-size: 14px;
`;

const LoginButton = styled.button`
  background-color: #E76316;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
  
  &:hover {
    background-color: #d55a14;
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login bem-sucedido
    if (email && password) {
      // Armazenar informação de login no localStorage para simular autenticação
      localStorage.setItem('isLoggedIn', 'true');
      // Redirecionar para o dashboard
      router.push('/dashboard');
    }
  };

  return (
    <FormContainer>
      <Logo>
        <img src="/logo.png" alt="Tropa Digital" />
      </Logo>
      <WelcomeText>Bem-vindo ao Painel</WelcomeText>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemplo@email.com"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Senha</Label>
          <PasswordContainer>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
            <PasswordToggle
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Ocultar" : "Ver"}
            </PasswordToggle>
          </PasswordContainer>
        </FormGroup>
        <LoginButton type="submit">Entrar</LoginButton>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
