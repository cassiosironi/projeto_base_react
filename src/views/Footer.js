import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-primary p-5">
      <div className="container py-lg-5">
        <Link className="navbar-brand" to="/">
          <img
            src={require("../images/React-icon.png")}
            className="logo"
            alt=""
          />
        </Link>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projetos">
              Projetos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sobre">
              Sobre
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contato">
              Contato
            </Link>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Pesquisar"
          />
          <button className="btn btn-dark" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Footer;
