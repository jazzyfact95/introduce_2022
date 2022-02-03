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
  background-color: #1e2736;
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
  width: 160px;
  height: 40px;
  background-color: #e33400;
  transform: translate(300px, 360px) skew(10deg) rotate(5deg);
  position: absolute;
`;

const VerCarrotSquare = styled.div`
  width: 60px;
  height: 580px;
  background-color: #e33400;
  transform: translate(330px, 100px) skew(10deg) rotate(-5deg);
  position: absolute;
`;

const BlueSquare = styled.div`
  width: 70px;
  height: 70px;
  background-color: #0623eb;
  transform: translate(40px, 250px) rotate(-5deg);
  position: absolute;
`;
const PinkSquare = styled.div`
  width: 70px;
  height: 70px;
  background-color: #ff1f75;
  transform: translate(40px, 500px) rotate(-5deg);
  position: absolute;
`;

const YellowSquare = styled.div`
  width: 80px;
  height: 290px;
  background-color: #f3a90c;
  transform: translate(150px, 310px) rotate(25deg);
  position: absolute;
`;

const GreenSquare = styled.div`
  width: 70px;
  height: 70px;
  background-color: #125146;
  transform: translate(40px, 450px) rotate(-5deg);
  position: absolute;
`;

const NavySquare = styled.div`
  width: 230px;
  height: 80px;
  background-color: #1e2736;
  transform: translate(60px, 400px) rotate(15deg);
  position: absolute;
  z-index: 1;
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
      <VerCarrotSquare />
      <BlueSquare />
      <NavySquare />
      <PinkSquare />
      <YellowSquare />
      <GreenSquare />
    </BackgroundCmpt>
  );
};

export default Background;
