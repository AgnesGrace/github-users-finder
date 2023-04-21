import PropTypes from "prop-types";
import { FaLink, FaInfo } from "react-icons/fa";
function UserReposItem({ repo }) {
  const { name, description, html_url } = repo;
  return (
    <div className="rounded-md card bg-blue-950 hover:bg-blue-900 mb-2">
      <div className="card-body">
        <h4 className="font-semibold mb-2 text-xl">
          <a href={html_url}>
            <FaLink className="inline mr-1" />
            {name}
          </a>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
UserReposItem.prototype = {
  repo: PropTypes.object.isRequired,
};
export default UserReposItem;
