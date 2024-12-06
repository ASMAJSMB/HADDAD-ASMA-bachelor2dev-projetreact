import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #26547c;
  color: #fff;
  text-align: center;
  padding: 5px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 GoodStuffForDev</p>
    </FooterWrapper>
  );
};

export default Footer;
