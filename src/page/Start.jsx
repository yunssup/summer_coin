// src/Start.js
import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Style";

const Start = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/Gamestart");
  };

  return (
    <S.Container>
      <S.Card>
        <S.Title>신(내)의 한수 : 감정 투자 대작전</S.Title>

        <S.SubTitle>
          신내동 투자왕은 누구 !?
        </S.SubTitle>

        <S.boxContainer>
          <S.teamcount>👥 참가 팀 (6/6)</S.teamcount>
        </S.boxContainer>

        <S.teamgrid>
          <S.team>Team 1</S.team>
          <S.team>Team 2</S.team>
          <S.team>Team 3</S.team>
          <S.team>Team 4</S.team>
          <S.team>Team 5</S.team>
          <S.team>Team 6</S.team>
        </S.teamgrid>

        <S.cardscript>
          <S.scripttitle>💰 게임 설명 💰</S.scripttitle>
          <S.script>• 초기 자금 : 1,000,000 원</S.script>
          <S.script>• 정보 코인 : 7개 지급</S.script>
          <S.script>• 총 10라운드로 진행</S.script>
          <S.script>• 12개의 감정에 투자하세요!</S.script>
          <S.script>• 최종 자산이 가장 높은 팀이 승리합니다!</S.script>

        </S.cardscript>

        <S.emotioncard>
          💭 감정 투자 리스트
          <S.emotiongrid>
            <S.ecard>탐욕</S.ecard>
            <S.ecard2>사랑</S.ecard2>
            <S.ecard>질투</S.ecard>
            <S.ecard2>믿음</S.ecard2>
            <S.ecard>분노</S.ecard>
            <S.ecard2>용기</S.ecard2>
            <S.ecard>나태</S.ecard>
            <S.ecard2>희망</S.ecard2>
            <S.ecard>슬픔</S.ecard>
            <S.ecard2>절제</S.ecard2>
            <S.ecard>두려움</S.ecard>
            <S.ecard2>화합</S.ecard2>
          </S.emotiongrid>
        </S.emotioncard>

        <S.start onClick={handleStartClick}>
          🚀 게임 시작하기
        </S.start>
      </S.Card>
    </S.Container>
  );
};

export default Start;