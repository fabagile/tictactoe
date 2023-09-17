import i18next from "i18next";

import ReactCountryFlag from "react-country-flag";
import { FaGlobe } from "react-icons/fa6";
import { Dropdown } from "react-bootstrap";

import { languages } from "../languages";

function Header({ t }) {
  // const { t } = useTranslation()
  return (
    <header className="container mb-5">
      <nav>
        <Dropdown className="float-end">
          <Dropdown.Toggle variant="link" id="dropdown-basic">
            <FaGlobe size="1.5em" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {languages.map(({ code, name, countryCode }, i) => (
              <Dropdown.Item
                onClick={() => i18next.changeLanguage(code)}
                key={i}
                href="#/action-1"
              >
                <ReactCountryFlag
                  className="me-2"
                  countryCode={countryCode}
                  svg
                />
                {name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </nav>
      <h1 className="text-center fs-1">{t("title")}</h1>
    </header>
  );
}

export default Header;
