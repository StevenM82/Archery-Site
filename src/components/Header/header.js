import React from 'react';
import styled from 'styled-components';

const HeaderImage = styled.img`
  width: 10%;
  padding-right: 1rem;
`;
const Nav = styled.div`
  display: flex;
  background-color: transparent;
`;
const NavHeader = styled.div`
  width: 100%;
`;

const NavList = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
`;

const NavLink = styled.a`
  color: red;
`;

function HeaderNavigation() {
  return (
    <div>
      <h1>
        <HeaderImage src="../../target-logo-color.png" />
        Straight to the <i>(react)</i> point
      </h1>
      <h2>Just starting out</h2>
      <Nav>
        <NavHeader>
          <NavList>
            <NavLink href="index.html">Home</NavLink>
            <NavLink href="classes.html">Classes</NavLink>
            <NavLink href="#" />
            <NavLink href="#" />
            <NavLink href="#" />
          </NavList>
        </NavHeader>
      </Nav>
    </div>
  );
}

export default HeaderNavigation;
