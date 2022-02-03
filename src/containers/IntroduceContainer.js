import React from 'react';
import styled from 'styled-components';
import TechBox from '../components/attributes/TechBox';

const IntroduceCmpt = styled.div`
  width: 100%;
  height: 100%;
  .name-area {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 5vw;
    .under-line {
      width: 130px;
      height: 10px;
      background-color: yellow;
      box-shadow: violet 3px;
      transform: translate(-210px, 0px);
    }
    .name-text {
      font-size: 25px;
      &.name {
        padding-left: 10px;
        padding-right: 10px;
        font-size: 50px;
      }
    }
  }
  .tech-area {
    width: 100%;
    height: fit-content;
    display: flex;
  }
`;

const IntroduceContainer = () => {
  return (
    <IntroduceCmpt>
      <div className="first-intro-area">
        <div className="name-area">
          <div className="name-text sub">
            노력하는 주니어 프론트 엔드 개발자,
          </div>
          <div className="name-text name">최현석</div>
          <div className="name-text sub">입니다.</div>
          <div className="under-line name"></div>
        </div>
        <div></div>
        <div>저는 이런것들을 할 줄 압니다.</div>
        <div className="tech-area">
          <TechBox text="JAVA" />
          <TechBox text="JavaScript" />
          <TechBox text="React" />
          <TechBox text="Css" />
          <TechBox text="Html" />
          <TechBox text="TypeScript" />
          <TechBox text="Node.js" />
          <TechBox text="Git" />
        </div>
      </div>
    </IntroduceCmpt>
  );
};

export default IntroduceContainer;
