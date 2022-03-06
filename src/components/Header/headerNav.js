import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
`;

const NavLink = styled.a`
  color: red;
`;

function HeaderNav() {
  return (
    <>
      <Nav>
        <ul>
          <li>
            <NavLink href="index.html">Home</NavLink>
            <NavLink href="classes.html">Classes</NavLink>
            <NavLink href="#" />
            <NavLink href="#" />
            <NavLink href="#" />
          </li>
        </ul>
      </Nav>
    </>
  );
}

export default HeaderNav;
