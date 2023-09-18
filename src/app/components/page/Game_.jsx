import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Board from "./Game.Board_";
import History from "./Game.History";
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

  return (
    <div className="my-5 mx-auto ">
      <Container className=" w-50">
        <Row>
          <Col xs={12} lg={6}>
            <Board
              xIsNext={xIsNext}
              squares={currentSquares}
              onPlay={handlePlay}
              t={t}
            />
          </Col>
          <Col xs={12} lg={6}>
            <History setCurrentMove={setCurrentMove} history={history} t={t} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
