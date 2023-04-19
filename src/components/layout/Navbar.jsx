import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function Navbar({ title }) {
  return (
    <nav className="navbar bg-blue-950 mb-12 shadow-lg">
      <div className="container mx-auto">
        <div className="flex-none mx-2 px-2">
          <FaGithub className="text-3xl inline mr-2" />
          <Link to="/" className="font-bold">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Users Finder",
};
Navbar.propTypes = {
  title: PropTypes.string,
};
export default Navbar;
