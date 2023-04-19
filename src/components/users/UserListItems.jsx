import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function UserListItems({ user: { login, avatar_url } }) {
  return (
    <div className="card side bg-base-100 shadow-md compact">
      <div className="flex-row items-center card-body space-x-4">
        <div>
          <div className="avatar">
            <div className=" mask mask-hexagon w-14 h-14 shadow">
              <img src={avatar_url} alt={`${login} Profile`} />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            to={`/users/${login}`}
            className="text-base-content text-opacity-30"
          >
            Check Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserListItems.prototype = {
  user: PropTypes.object.isRequired,
};
export default UserListItems;
