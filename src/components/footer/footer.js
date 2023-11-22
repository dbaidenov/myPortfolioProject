import "./style.css";
import vk from "./../../img/icons/vk.svg";
import telegram from "./../../img/icons/telegram.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import instagram from "./../../img/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://vk.com/look1ntomyeyes"
              >
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://instagram.com/baidenov_?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
              >
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://web.telegram.org/k/#@iuw2lapl2hh"
              >
                <img src={telegram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/dbaidenov"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/%D0%B4%D0%B0%D0%BC%D0%B8%D1%80-%D0%B1%D0%B0%D0%B9%D0%B4%D0%B5%D0%BD%D0%BE%D0%B2-532617231/"
              >
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
