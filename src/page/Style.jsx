import styled from "styled-components";

/* =========================
   전체 컨테이너
========================= */
export const Container = styled.div`
  font-family: MaruBuriRegular;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  padding: 16px;
  background: #f5faff;
`;

/* =========================
   카드 레이아웃
========================= */
export const Card = styled.div`
  text-align: center;
  width: 80%;
  height: 749px;
  padding: 24px;

  border-radius: 20px;
  border: 2px solid #cfeaff;
  background: #ffffff;
  box-shadow: 0 18px 35px rgba(123, 203, 255, 0.18);

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 48px rgba(123, 203, 255, 0.25);
  }
`;

/* =========================
   제목
========================= */
export const Title = styled.h1`
  font-size: 34px;
  font-weight: 700;
  color: #3b6ea8;
  padding-top: 18px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: #3b6ea8;
  padding: 10px;
  margin-top: 10px;
`;

/* =========================
   팀 선택
========================= */
export const boxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const teamcount = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #3b6ea8;
`;

export const teamgrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 10px;
`;

export const team = styled.div`
  height: 36px;
  padding: 4px 12px;
  display: flex;
  align-items: center;

  border-radius: 14px;
  background: rgb(153, 236, 255);

  color: #382703;
  font-size: 15px;
  font-weight: 600;
`;

/* =========================
   스토리 카드
========================= */
export const cardscript = styled.div`
  margin-top: 20px;
  padding: 20px;
  height: 140px;

  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 6px 18px rgba(123, 203, 255, 0.15);
`;

export const scripttitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #3b6ea8;
  margin-bottom: 16px;
`;

export const script = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #4a4035;
  line-height: 1.4;
`;

/* =========================
   감정 카드
========================= */
export const emotioncard = styled.div`
  margin-top: 10px;
  padding: 20px;
  height: 230px;

  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 6px 18px rgba(123, 203, 255, 0.15);

  font-size: 24px;
  font-weight: 700;
  color: #3b6ea8;
`;

export const emotiongrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 16px;
  padding: 20px;

  justify-items: center;
  align-items: center;
  box-sizing: border-box;
`;

export const ecard = styled.div`
  width: 300px;
  padding: 10px;
  text-align: center;

  border-radius: 14px;
  background: #7bcbff;
  color: #ffffff;

  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 6px 14px rgba(123, 203, 255, 0.35);
`;

export const ecard2 = styled(ecard)`
  background: #ff8f7a;
  box-shadow: 0 6px 14px rgba(255, 143, 122, 0.35);
`;

/* =========================
   시작 버튼
========================= */
export const start = styled.div`
  margin-top: 14px;
  padding: 12px;
  text-align: center;

  border-radius: 999px;
  background: #3ba9ff;
  color: #ffffff;

  font-size: 18px;
  font-weight: 700;
  box-shadow: 0 6px 14px rgba(59, 169, 255, 0.35);
`;

/* =========================
   사이드 카드
========================= */
export const Cardlist = styled.div`
  width: 180px;
  height: 749px;
  padding: 24px;
  margin-right: 18px;

  border-radius: 20px;
  border: 1px solid #d9eeff;
  background: #ffffff;

  font-size: 18px;
  font-weight: 700;
  color: #3b6ea8;
`;