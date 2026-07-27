import styled from "styled-components";

/* =========================
   전체
========================= */
export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 12px 32px;
  background: linear-gradient(180deg, #f5fbff 0%, #edf7ff 100%);
`;

/* =========================
   메인 카드
========================= */
export const Card2 = styled.div`
  width: 92%;
  max-width: 1700px;
  height: 100%;
  background: #ffffff;
  border-radius: 24px;
  padding: 18px 24px;

  border: 2px solid #d9edff;
  box-shadow: 0 12px 32px rgba(95, 180, 255, 0.15);
`;

/* =========================
   뉴스
========================= */
export const newscards = styled.div`
  background: #ffffff;
  border-radius: 18px;

  padding: 14px 18px;
  margin: 10px 0 16px;

  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  color: #495057;

  border-left: 8px solid #7bc9ff;
  box-shadow: 0 6px 16px rgba(123, 201, 255, 0.15);
`;

/* =========================
   팀 현황
========================= */
export const TeamStatusWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;

  margin-bottom: 16px;
`;

export const TeamStatusCard = styled.div`
  background: linear-gradient(180deg, #ffffff, #f9fdff);

  border: 2px solid #d8eeff;
  border-radius: 16px;

  padding: 12px 10px;

  text-align: center;

  box-shadow: 0 6px 16px rgba(123, 201, 255, 0.12);

  h4 {
    margin: 0 0 8px;
    color: #3c6ca8;
    font-size: 22px;
    font-weight: 700;
  }

  .money {
    font-size: 17px;
    color: #444;
    margin-bottom: 4px;
  }

  .remain {
    font-size: 17px;
    font-weight: 700;
    color: #ff5b5b;
  }
`;

/* =========================
   표
========================= */
export const TableGrid = styled.div`
  display: grid;
  grid-template-columns:
    80px
    repeat(12, minmax(72px, 1fr))
    100px;

  gap: 6px;

  padding: 10px;

  background: #ffffff;
  border-radius: 20px;

  border: 2px solid #d9edff;

  box-shadow: 0 8px 20px rgba(95, 180, 255, 0.08);
`;

export const Row = styled.div`
  display: contents;
`;

/* =========================
   헤더
========================= */
export const HeaderCell = styled.div`
  background: #dff3ff;

  color: #34699a;

  font-size: 15px;
  font-weight: 700;

  text-align: center;

  padding: 7px 4px;

  border-radius: 10px;
`;

/* =========================
   팀
========================= */
export const TeamCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(135deg, #7bc9ff, #5ab5ff);

  color: white;

  border-radius: 10px;

  font-size: 17px;
  font-weight: 700;

  min-height: 46px;
`;

export const TeamnameCard = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

/* =========================
   입력
========================= */
export const InputCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 66px;
    height: 32px;

    text-align: right;

    border-radius: 8px;
    border: 1px solid #cfdceb;

    font-size: 14px;

    padding: 4px 6px;

    transition: 0.2s;
  }

  input:focus {
    outline: none;
    border-color: #4ab2ff;
    box-shadow: 0 0 0 3px rgba(74, 178, 255, 0.18);
  }
`;

/* =========================
   버튼
========================= */
export const ProfitButton = styled.button`
  display: block;
  margin: 16px auto 0;

  padding: 12px 34px;

  border: none;
  border-radius: 999px;

  background: linear-gradient(135deg, #ff9d86, #ff7b6e);

  color: white;

  font-size: 18px;
  font-weight: 700;

  cursor: pointer;

  box-shadow: 0 8px 20px rgba(255, 123, 110, 0.28);

  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(255, 123, 110, 0.38);
  }

  &:disabled {
    background: #d7dce5;
    box-shadow: none;
    cursor: not-allowed;
  }
`;