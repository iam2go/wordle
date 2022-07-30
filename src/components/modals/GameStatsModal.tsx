import React from "react";
import styled from "styled-components";
import { loadStats } from "utils/stats";
import Modal from "./Modal";

type Props = {
  text: string;
  value: number;
  unit?: string;
};

type ChartStyle = {
  value: number;
  index: number;
};

function Stat({ text, value, unit }: Props) {
  return (
    <div>
      <div className="value">{value + (unit ? unit : "")}</div>
      <div className="text">{text}</div>
    </div>
  );
}

function GameStatsModal() {
  const {
    winDistribution,
    currentStreak,
    bestStreak,
    totalGames,
    successRate,
  } = loadStats();
  return (
    <Modal id="stats">
      <Wrap>
        <h2> 통계 </h2>
        <StatTable>
          <Stat text="총 시도 횟수🔥" value={totalGames} />
          <Stat text="정답률✨" value={successRate} unit="%" />
          <Stat text="현재 연속 정답" value={currentStreak} />
          <Stat text="최대 연속 정답" value={bestStreak} />
        </StatTable>
      </Wrap>
      <Wrap>
        <h2> 도전 횟수 분포도</h2>
        {winDistribution.map((value, index) => (
          <ChartBox key={index}>
            <div>{index + 1}</div>
            <Chart value={value + 5} index={index}>
              <div className="bar">{value}</div>
            </Chart>
          </ChartBox>
        ))}
      </Wrap>
    </Modal>
  );
}

const Wrap = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 5rem;
  h2 {
    font-size: 20px;
    margin-bottom: 4rem;
  }
`;
const StatTable = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 400;
  .value {
    font-size: 3rem;
    font-weight: 600;
  }
  .text {
    font-size: 1.2rem;
  }
`;
const chartColor = [
  "#e27396",
  "#ea9ab2",
  "#efcfe3",
  "#d4e09b",
  "#b3dee2",
  "#82c0cc",
];

const ChartBox = styled.div`
  display: flex;
  margin: 1rem 2rem;
  justify-content: left;
  div {
    font-size: 1.4rem;
  }
`;

const Chart = styled.span<ChartStyle>`
  width: 100%;
  height: 2rem;
  margin-left: 0.5rem;
  .bar {
    background-color: ${({ index }) => chartColor[index]};
    width: ${({ value }) => value + "%"};
    height: 2rem;
    border-radius: 0 0.8rem 0.8rem 0;
    color: white;
  }
`;

export default GameStatsModal;
