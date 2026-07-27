import React, { useState } from "react";
import * as S from "../gamestart/Style";

// ==========================
// 기본 데이터
// ==========================

const emotions = [
  "탐욕", "사랑", "질투", "믿음",
  "분노", "용기", "나태", "희망",
  "슬픔", "절제", "두려움", "화합"
];

const teams = [1, 2, 3, 4, 5, 6];

// 숫자 포맷
const formatNumber = (value) => {
  if (value === null || value === undefined || value === "") return "";
  const num = Number(value);
  if (isNaN(num)) return "";
  return num.toLocaleString();
};

// ==========================
// 라운드별 감정 수익률
// ==========================

const emotionRatesByRound = {
  1: {
    두려움: 1.35, 절제: 1.30, 화합: 1.25, 용기: 1.15, 사랑: 1.10,
    나태: 0.70, 탐욕: 0.85, 분노: 0.90,
    질투: 1, 믿음: 1, 희망: 1, 슬픔: 1
  },
  2: {
    질투: 1.40, 두려움: 1.30, 분노: 1.25, 탐욕: 1.15, 슬픔: 1.10,
    화합: 0.70, 사랑: 0.80, 절제: 0.80, 믿음: 0.90,
    희망: 1, 용기: 1, 나태: 1
  },
  3: {
    슬픔: 1.30, 두려움: 1.25, 희망: 1.25, 사랑: 1.20, 믿음: 1.15, 화합: 1.10,
    나태: 0.85, 분노: 0.90,
    탐욕: 1, 질투: 1, 용기: 1, 절제: 1
  },
  4: {
    슬픔: 1.30, 나태: 0.85, 두려움: 1.25, 믿음: 1.15, 희망: 1.25, 절제: 1.00,
    분노: 0.90, 탐욕: 1,
    질투: 1, 사랑: 1.20, 용기: 1, 화합: 1.10
  },
  5: {
    사랑: 1, 화합: 1, 용기: 1, 절제: 1.10, 슬픔: 1.30,
    나태: 1.20, 탐욕: 0.90,
    질투: 1, 분노: 0.90, 믿음: 1.20, 희망: 1.15
  },
  6: {
    사랑: 1.35, 희망: 1.0, 나태: 0.70, 질투: 1.0, 두려움: 1.15, 슬픔: 1.10,
    탐욕: 0.85, 분노: 1.0,
    믿음: 1, 용기: 1.25, 절제: 1.10, 화합: 1.25
  },
  7: {
    슬픔: 1.10, 믿음: 1.00, 두려움: 1.15, 희망: 1.20, 사랑: 1.30,
    나태: 1.15, 분노: 0.90,
    탐욕: 0.75, 질투: 1.15, 용기: 1, 절제: 1, 화합: 1
  },
  8: {
    화합: 1.40, 용기: 1.30, 사랑: 1.30, 믿음: 1.15, 희망: 1.10,
    두려움: 0.70, 나태: 0.75, 분노: 0.90, 슬픔: 0.90,
    탐욕: 1, 질투: 1, 절제: 1
  },
  9: {
    두려움: 1.35, 용기: 1.30, 화합: 1.25, 사랑: 1.20, 희망: 1.15, 슬픔: 1.10,
    나태: 0.70, 분노: 0.80, 탐욕: 0.90,
    질투: 1, 믿음: 1, 절제: 1
  },
  10: {
    두려움: 1.35, 나태: 1.35, 슬픔: 1.25, 사랑: 1.15, 믿음: 1.10,
    용기: 0.80, 절제: 0.80, 화합: 0.85,
    탐욕: 1, 질투: 1, 분노: 1, 희망: 1
  }
};

// ==========================
// 뉴스
// ==========================

const newsByRound = {
  1: "세 개의 집 앞에 같은 바람이 불었지만, 결과는 모두 달랐다.",
  2: "장벽 앞에 묶인 무리, 그림자가 다가온다.",
  3: "거리의 노래 한 줄이 권력자를 흔들었다.",
  4: "서로 모르는 두 사람이 같은 날 하늘을 올려다보았다.",
  5: "기록자는 사라지고 있음을 느꼈다.",
  6: "위험한 길 위에서 누군가 쓰러졌다.",
  7: "유산 정리가 끝난 집, 잔치 음악 소리와 거친 불만이 동시에 터져 나온다.",
  8: "닫힌 무덤 앞, 방문객이 눈물을 흘렸다.",
  9: "숨었던 사람들이 밖으로 나와 말하기 시작했다.",
  10: "어둠 속 항구에서 거액이 오갔다."
};

// ==========================
// 증감률 표시
// ==========================

const getEmotionRateLabel = (emotion, round) => {
  const rate = emotionRatesByRound[round]?.[emotion];
  if (!rate || rate === 1) return "0%";
  const percent = Math.round((rate - 1) * 100);
  return percent > 0 ? `+${percent}%` : `${percent}%`;
};

const getEmotionRateColor = (emotion, round) => {
  const rate = emotionRatesByRound[round]?.[emotion];
  if (!rate || rate === 1) return "#666";
  return rate > 1 ? "#ff0000" : "#0080ff";
};

// ==========================
// 컴포넌트
// ==========================

const Gamestart = () => {
  const [gameEnd, setGameEnd] = useState(false);
  const [round, setRound] = useState(1);
  const [investments, setInvestments] = useState({});
  const [showResult, setShowResult] = useState(false);

  const [balances, setBalances] = useState({
    team1: 1000000,
    team2: 1000000,
    team3: 1000000,
    team4: 1000000,
    team5: 1000000,
    team6: 1000000
  });

  const handleChange = (team, emotion, value) => {
    const raw = value.replace(/,/g, "");
    if (raw !== "" && !/^\d+$/.test(raw)) return;

    const teamKey = `team${team}`;
    const inputValue = Number(raw || 0);
    const currentData = investments[teamKey] || {};

    const currentTotalExceptThis = Object.entries(currentData).reduce(
      (sum, [e, v]) => (e === emotion ? sum : sum + Number(v || 0)),
      0
    );

    if (currentTotalExceptThis + inputValue > balances[teamKey]) return;

    setInvestments((prev) => ({
      ...prev,
      [teamKey]: {
        ...currentData,
        [emotion]: raw
      }
    }));
  };

  const getTeamTotal = (team) => {
    const data = investments[`team${team}`] || {};
    return Object.values(data).reduce((sum, v) => sum + Number(v || 0), 0);
  };

  const getRemainingBalance = (team) =>
    balances[`team${team}`] - getTeamTotal(team);

  const getTeamProfit = (team) => {
    const data = investments[`team${team}`] || {};
    const rates = emotionRatesByRound[round] || {};
    return Object.entries(data).reduce(
      (sum, [emotion, value]) =>
        sum + Number(value || 0) * (rates[emotion] ?? 1),
      0
    );
  };

  const handleResult = () => {
    const nextBalances = { ...balances };
    teams.forEach((team) => {
      const key = `team${team}`;
      nextBalances[key] = Math.floor(
        balances[key] + (getTeamProfit(team) - getTeamTotal(team))
      );
    });
    setBalances(nextBalances);
    setShowResult(true);
  };

  const nextRound = () => {
    // 10라운드 정산 후 이 버튼을 누르면 최종 순위 화면으로 전환
    if (round === 10) {
      setGameEnd(true);
      return;
    }

    setInvestments({});
    setShowResult(false);
    setRound((r) => r + 1);
  };

  const ranking = teams
    .map((team) => ({
      team,
      money: balances[`team${team}`],
    }))
    .sort((a, b) => b.money - a.money);

  return (
    <S.Container>
      <S.Card2>
        {gameEnd ? (
          <>
            <h1 style={{ textAlign: "center", margin: "20px" , fontSize: "32px", fontWeight: 700 }}>
              🏆 최종 순위
            </h1>

            <div
              style={{
                width: "700px",
                margin: "0 auto",
              }}
            >
              {ranking.map((item, index) => (
                <div
                  key={item.team}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 30px",
                    marginBottom: "14px",
                    borderRadius: "16px",
                    background:
                      index === 0
                        ? "#FFE082"
                        : index === 1
                        ? "#E3F2FD"
                        : index === 2
                        ? "#FFE0B2"
                        : "#ffffff",
                    border: "2px solid #ddd",
                    fontSize: "24px",
                    fontWeight: 700,
                    marginTop: "10px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", fontSize: "20px"}}>
                    {index + 1}등 - {item.team}팀
                  </div>

                  <div style={{ display: "flex", alignItems: "center", fontSize: "20px" }}>
                    💰 {formatNumber(item.money)}원
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2>ROUND {round}</h2>

            <S.newscards>{newsByRound[round]}</S.newscards>

            <S.TeamStatusWrap>
              {teams.map((team) => (
                <S.TeamStatusCard key={team}>
                  <h4>{team}팀</h4>

                  <div className="money">
                    보유 {formatNumber(balances[`team${team}`])}원
                  </div>

                  <div className="remain">
                    {showResult ? (
                      <>
                        수익{" "}
                        {Math.floor(getTeamProfit(team) - getTeamTotal(team)) >= 0 ? "+" : ""}
                        {formatNumber(
                          Math.floor(getTeamProfit(team) - getTeamTotal(team))
                        )}
                        원
                      </>
                    ) : (
                      <>가능 {formatNumber(getRemainingBalance(team))}원</>
                    )}
                  </div>
                </S.TeamStatusCard>
              ))}
            </S.TeamStatusWrap>

            <S.TableGrid>
              <S.HeaderCell>팀</S.HeaderCell>

              {emotions.map((emotion) => (
                <S.HeaderCell key={emotion}>
                  {emotion}
                  {showResult && (
                    <>
                      <br />
                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: 700,
                          color: getEmotionRateColor(emotion, round)
                        }}
                      >
                        {getEmotionRateLabel(emotion, round)}
                      </span>
                    </>
                  )}
                </S.HeaderCell>
              ))}

              <S.HeaderCell>합계</S.HeaderCell>

              {teams.map((team) => (
                <S.Row key={team}>
                  <S.TeamCell>
                    <S.TeamnameCard>{team}팀</S.TeamnameCard>
                  </S.TeamCell>

                  {emotions.map((emotion) => (
                    <S.InputCell key={emotion}>
                      <input
                        disabled={showResult}
                        value={formatNumber(
                          investments[`team${team}`]?.[emotion] || ""
                        )}
                        onChange={(e) =>
                          handleChange(team, emotion, e.target.value)
                        }
                      />
                    </S.InputCell>
                  ))}

                  <S.TeamCell>
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                      }}
                    >
                      {formatNumber(getTeamTotal(team))}
                    </div>
                  </S.TeamCell>
                </S.Row>
              ))}
            </S.TableGrid>

            {/* 10라운드 수익률 확인 시 버튼 텍스트가 '최종 결과 보기'로 바뀝니다. */}
            <S.ProfitButton onClick={showResult ? nextRound : handleResult}>
              {showResult
                ? round === 10
                  ? "최종 결과 보기"
                  : "다음 라운드"
                : "수익률 확인"}
            </S.ProfitButton>
          </>
        )}
      </S.Card2>
    </S.Container>
  );
};

export default Gamestart;