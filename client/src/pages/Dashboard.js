import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Users, Briefcase, LayoutDashboard } from "lucide-react";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Inter", sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
`;

const Nav = styled.nav`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid #e2e8f0;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  color: #4a5568;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #edf2f7;
  }

  svg {
    margin-right: 1rem;
  }
`;

const Dashboard = () => {
  return (
    <Container>
      <Title>Admin Dashboard</Title>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/">
              <LayoutDashboard size={24} />
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/recruiters">
              <Briefcase size={24} />
              Manage Recruiters
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/users">
              <Users size={24} />
              Manage Users
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </Container>
  );
};

export default Dashboard;
