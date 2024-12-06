import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Card = ({ title, description, children }) => {
  return (
    <CardWrapper>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </CardWrapper>
  );
};

export default Card;
