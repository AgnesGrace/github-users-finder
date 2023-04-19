import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="flex w-full items-center justify-center mt-32 ">
      <div className="text-center">
        <div className="max-w-lg">
          <h1 className="text-7xl font-bold mb-8">Oops</h1>
          <p className="text-5xl">404-Page not found!!</p>
          <Link to="/" className="btn btn-secondary btn-lg mt-4">
            <FaHome className="mr-2" />
            Go Back to the Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
