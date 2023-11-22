import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Привет, меня зовут <em>Дамир</em>
          </strong>
          <br />
          начинающий фронтенд разработчик
        </h1>
        <div className="header__text">
          <p>со страстью к развитию и творчеству</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
