import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Background from './Background';
import IntroduceContainer from './IntroduceContainer';

const HomeCmpt = styled.div`
  /* background-color: red; */
  width: 100vw;
  height: 100vh;
  .body-area {
    width: 100vw;
    height: 500vh;
    background-color: beige;
  }

  .back {
  }
`;

const HomeContainer = () => {
  return (
    <HomeCmpt>
      <IntroduceContainer />
      <div className="body-area">
        {/* 스크롤 퍼센테이지 변수 추적 백분율 선언 */}
        <Background className="back"></Background>
      </div>
    </HomeCmpt>
  );
};

export default HomeContainer;
