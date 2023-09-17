import { useState } from "react";
import { Col, Row } from "react-bootstrap";

import Board from "./Board";
import History from "./History";
// import { useTranslation } from 'react-i18next'

export default function Game({ t }) {
  // const { t } = useTranslation()
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((move, i) => {
    let description;
    if (i > 0) {
      description = `${t("description_move")}${i + 1}`;
    } else {
      description = t("description_start");
    }
    return (
      <li key={move}>
        <div className="my-1" variant="info" onClick={() => jumpTo(move)}>
          {description}
        </div>
      </li>
    );
  });

  return (
    <div className="game">
      <Row className="mx-auto">
        <Col className="text-center" xs={12} md={5}>
          <div className="game-board">
            <Board
              xIsNext={xIsNext}
              squares={currentSquares}
              onPlay={handlePlay}
              t={t}
            />
          </div>
        </Col>
        <Col className="" xs={12} md={7}>
          <History moves={moves} />
        </Col>
      </Row>
    </div>
  );
}
