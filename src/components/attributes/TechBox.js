import React from 'react';
import styled from 'styled-components';

const TechBoxCmpt = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  padding-left: 5px;
  padding-right: 5px;
  margin: 5px;
  font-size: 10px;
  color: wheat;
  background-color: navy;
  border-radius: 10px;
`;

const TechBox = ({ text }) => {
  return <TechBoxCmpt>{text}</TechBoxCmpt>;
};

export default TechBox;
