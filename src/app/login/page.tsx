'use client';

import React from 'react';
import styled from 'styled-components';
import LoginForm from '@/components/LoginForm';

const LoginContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  
  @media (max-width: 768px) {
    flex: 1;
  }
`;

const RightPanel = styled.div`
  flex: 1;
  background-color: #E76316;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const IllustrationContainer = styled.div`
  width: 80%;
  max-width: 400px;
  
  img {
    width: 100%;
    height: auto;
  }
`;

const LoginPage = () => {
  return (
    <LoginContainer>
      <LeftPanel>
        <LoginForm />
      </LeftPanel>
      <RightPanel>
        <IllustrationContainer>
          <img src="/illustration.png" alt="Login Illustration" />
        </IllustrationContainer>
      </RightPanel>
    </LoginContainer>
  );
};

export default LoginPage;
