import React from 'react';
import styled from 'styled-components';

const HeaderImage = styled.img`
  width: 10%;
  padding-right: 1rem;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
`;

const NavLink = styled.a`
  color: red;
`;

// destructuring props
function HeaderNavigation({ image, heading, subHeading }) {
  return (
    <div>
      <h1>
        <HeaderImage src={image} />
        {heading}
      </h1>
      <h2>{subHeading}</h2>
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
    </div>
  );
}

export default HeaderNavigation;
