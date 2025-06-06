'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    width: 70px;
  }
`;

const Logo = styled.div`
  padding: 0 20px 20px;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  
  img {
    width: 120px;
    height: auto;
  }
  
  @media (max-width: 768px) {
    padding: 0 10px 20px;
    img {
      width: 50px;
    }
  }
`;

const NavItem = styled.div<{ active?: boolean }>`
  padding: 12px 20px;
  color: ${props => props.active ? '#E76316' : '#333'};
  background-color: ${props => props.active ? '#fff5f0' : 'transparent'};
  border-left: ${props => props.active ? '4px solid #E76316' : '4px solid transparent'};
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: #fff5f0;
    color: #E76316;
  }
  
  @media (max-width: 768px) {
    padding: 12px;
    justify-content: center;
  }
`;

const NavIcon = styled.div`
  margin-right: 10px;
  
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const NavText = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  color: #333;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #E76316;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 10px;
`;

const UserName = styled.div`
  font-weight: 500;
`;

const EventsContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 20px;
`;

const EventsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const EventsTitle = styled.h2`
  font-size: 18px;
  color: #333;
`;

const SearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
  
  &:focus {
    outline: none;
    border-color: #E76316;
  }
`;

const EventsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #eee;
  color: #666;
  font-weight: 500;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

const StatusBadge = styled.span<{ status: string }>`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  background-color: ${props => props.status === 'Ativo' ? '#e6f7e6' : '#ffebeb'};
  color: ${props => props.status === 'Ativo' ? '#2e7d32' : '#d32f2f'};
`;

const ActionButton = styled.button`
  background-color: #E76316;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #d55a14;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const PageButton = styled.button<{ active?: boolean }>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  border: 1px solid ${props => props.active ? '#E76316' : '#ddd'};
  background-color: ${props => props.active ? '#E76316' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.active ? '#d55a14' : '#f5f5f5'};
  }
`;

const Dashboard = () => {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState('eventos');
  const [userName] = useState('Usuário');
  
  // Dados simulados para a tabela de eventos
  const events = [
    { id: 1, name: 'Feira de Adoção', date: '01/06/2023', time: '10:00', status: 'Ativo' },
    { id: 2, name: 'Workshop de Treinamento', date: '05/06/2023', time: '14:30', status: 'Ativo' },
    { id: 3, name: 'Palestra sobre Nutrição', date: '12/06/2023', time: '09:00', status: 'Inativo' },
    { id: 4, name: 'Campanha de Vacinação', date: '15/06/2023', time: '08:00', status: 'Ativo' },
    { id: 5, name: 'Encontro de Voluntários', date: '20/06/2023', time: '18:00', status: 'Inativo' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  return (
    <DashboardContainer>
      <Sidebar>
        <Logo>
          <img src="/logo.png" alt="Tropa Digital" />
        </Logo>
        <NavItem active={activeNav === 'dashboard'} onClick={() => setActiveNav('dashboard')}>
          <NavIcon>📊</NavIcon>
          <NavText>Dashboard</NavText>
        </NavItem>
        <NavItem active={activeNav === 'eventos'} onClick={() => setActiveNav('eventos')}>
          <NavIcon>📅</NavIcon>
          <NavText>Eventos</NavText>
        </NavItem>
        <NavItem active={activeNav === 'inscricoes'} onClick={() => setActiveNav('inscricoes')}>
          <NavIcon>📝</NavIcon>
          <NavText>Inscrições</NavText>
        </NavItem>
        <NavItem onClick={handleLogout}>
          <NavIcon>🚪</NavIcon>
          <NavText>Sair</NavText>
        </NavItem>
      </Sidebar>
      <MainContent>
        <Header>
          <PageTitle>Todos eventos</PageTitle>
          <UserInfo>
            <UserAvatar>{userName.charAt(0)}</UserAvatar>
            <UserName>{userName}</UserName>
          </UserInfo>
        </Header>
        <EventsContainer>
          <EventsHeader>
            <EventsTitle>Eventos</EventsTitle>
            <SearchInput placeholder="Pesquisar..." />
          </EventsHeader>
          <EventsTable>
            <thead>
              <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Nome do evento</TableHeader>
                <TableHeader>Data</TableHeader>
                <TableHeader>Hora</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Ações</TableHeader>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <TableRow key={event.id}>
                  <TableCell>{event.id}</TableCell>
                  <TableCell>{event.name}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>{event.time}</TableCell>
                  <TableCell>
                    <StatusBadge status={event.status}>{event.status}</StatusBadge>
                  </TableCell>
                  <TableCell>
                    <ActionButton>Editar</ActionButton>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </EventsTable>
          <Pagination>
            <PageButton active>1</PageButton>
            <PageButton>2</PageButton>
            <PageButton>3</PageButton>
          </Pagination>
        </EventsContainer>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
