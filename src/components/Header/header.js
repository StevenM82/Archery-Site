import React from 'react';
import styled from 'styled-components';

const HeaderImage = styled.img`
  width: 10%;
  padding-right: 1rem;
`;

// destructuring props
function HeaderComp({ image, heading, subHeading }) {
  return (
    <>
      <h1>
        <HeaderImage src={image} />
        {heading}
      </h1>
      <h2>{subHeading}</h2>
    </>
  );
}

export default HeaderComp;
