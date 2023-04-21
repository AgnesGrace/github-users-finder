import PropTypes from "prop-types";
import UserReposItem from "./UserReposItem";
function UserReposList({ userRepos }) {
  return (
    <div className="card bg-base-100 rounded-lg shadow-lg">
      <div className="card-body">
        <h2 className="font-bold card-title my-4 text-3xl">
          {" "}
          Latest Repositories
        </h2>
        {userRepos.map((repo, i) => (
          <UserReposItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

UserReposList.prototype = {
  userRepos: PropTypes.array.isRequired,
};
export default UserReposList;
