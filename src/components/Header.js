import React from 'react';
import styled from 'styled-components';

const HeaderCmpt = styled.div`
  width: 100%;
  height: 100%;
  .menu-container {
    display: flex;
  }
`;

const Header = () => {
  return (
    <HeaderCmpt>
      <div className="menu-container">
        <div className="소개">소개</div>
        <div className="소개">연락처</div>
        <div className="소개">소개</div>
        <div className="소개">소개</div>
      </div>
    </HeaderCmpt>
  );
};

export default Header;
