import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <nav>
            <ul className="nav-list">
              <li className="nav-list__item">
                <a className="nav-list__item-link" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-list__item">
                <a className="nav-list__item-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-list__item">
                <a className="nav-list__item-link" href="/menu">
                  Menu
                </a>
              </li>
              <li className="nav-list__item">
                <a className="nav-list__item-link" href="/Reservation">
                  Reservation
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <img src={Logo} alt="web site logo" />
          </div>
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-list__item">
                <a className="nav-list__item-link" href="/home">
                  Pages
                </a>
              </li>
              <li className="nav-list__item">
                <a className="nav-list__item-link" href="/about">
                  Shop
                </a>
              </li>
              <li className="nav-list__item">
                <a className="nav-list__item-link" href="/menu">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
