import React from "react";
import { useTranslation } from "react-i18next";

const Footer = ({ bgColor }) => {
  const { t } = useTranslation();
  const ghroute = "https://github.com/fabagile";
  return (
    <footer className={`p-2 text-center bg-${bgColor}`}>
      <a
        href={`${ghroute}/tictactoe`}
        rel="noreferrer"
        target="_blank"
        title={t("sourceCode")}
      >
        tictactoe
      </a>{" "}
      <a
        href={ghroute}
        rel="noreferrer"
        target="_blank"
        title={t("siteAuthor")}
      >
        {" "}
        @fabagile
      </a>{" "}
      &copy; 2023
    </footer>
  );
};

export default Footer;
