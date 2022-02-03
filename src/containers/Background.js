import React from 'react';

import styled from 'styled-components';

const BackgroundCmpt = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ece5e0;
  overflow: hidden;
`;

const BlackCircle = styled.div`
  width: 200px;
  height: 200px;
  background-color: #000000;
  border-radius: 50%;
  transform: translate(-100px, 50px);
  position: absolute;
`;

const BlackSquare = styled.div`
  width: 200px;
  height: 200px;
  background-color: #000000;
  transform: translate(500px, 260px);
  position: absolute;
`;
const CarrotSquare = styled.div`
  width: 200px;
  height: 200px;
  background-color: #e33400;
  transform: translate(500px, 30px);
  position: absolute;
`;

const VerCarrotLineB = styled.div`
  width: 10px;
  height: 650px;
  background-color: #e33400;
  transform: translate(350px, 30px) rotate(3deg);
  position: absolute;
`;

const VerCarrotLineS = styled.div`
  width: 3px;
  height: 100px;
  background-color: #e33400;
  transform: translate(150px, 150px) rotate(10deg);
  position: absolute;
`;

const HorCarrotLine = styled.div`
  width: 380px;
  height: 10px;
  background-color: #e33400;
  transform: translate(100px, 250px) rotate(15deg);
  position: absolute;
`;

const HorCarrotSquare = styled.div`
  width: 180px;
  height: 40px;
  background-color: #e33400;
  transform: translate(300px, 360px) skew(10deg) rotate(5deg);
  position: absolute;
`;

const Background = () => {
  return (
    <BackgroundCmpt>
      <BlackCircle />
      <BlackSquare />
      <CarrotSquare />
      <VerCarrotLineB />
      <VerCarrotLineS />
      <HorCarrotLine />
      <HorCarrotSquare />
    </BackgroundCmpt>
  );
};

export default Background;
