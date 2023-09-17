import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";

import "./styles/App.css";

import Game from "./components/Game";
import Header from "./components/Header";

const App = () => {
  const { t } = useTranslation();
  return (
    <Container fluid="xs">
      <Header t={t} />
      <Game t={t} />
    </Container>
  );
};

export default App;
