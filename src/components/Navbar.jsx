import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Todas</Link>
      <Link to="/task/completed">Completadas</Link>
      <Link to="/task/pending">Pendientes</Link>
    </nav>
  );
};

export default Navbar;
