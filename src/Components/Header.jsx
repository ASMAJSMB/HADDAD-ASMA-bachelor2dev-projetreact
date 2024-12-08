import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background-color: #26547c;
  display: flex;
  align-items: center;
  justify-content: center; 
  padding: 10px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>Pre-Flight Checklist</Logo>
    </HeaderContainer>
  );
}

export default Header;
