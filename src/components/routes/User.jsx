import { useContext, useEffect } from "react";
import Navbar from "../layout/Navbar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/GithubContext";
import UserReposList from "../users/repos/UserReposList";

function User() {
  const params = useParams();
  const { user, getSingleUser, getUserRepos, userRepos } =
    useContext(GithubContext);
  const {
    name,
    type,
    location,
    avatar_url,
    bio,
    login,
    html_url,
    blog,
    public_repos,
  } = user;

  useEffect(() => {
    getSingleUser(params.login);
    getUserRepos(params.login);
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full lg:w-10/12 px-3 mx-auto mt-8 ">
        <div className="mb-4">
          <Link to="/" className="btn btn-outline">
            Go Back
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-8 mb-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg image-full card shadow-xl">
              <figure>
                <img src={avatar_url} />
              </figure>
              <div className="card-body">
                <h2 className="card-title mb-0">{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
              </h3>
              <p>{bio}</p>
              <div className="card-actions mt-4">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visist Github Profile
                </a>
              </div>
            </div>
            <div className="w-full bg-base-100 rounded-lg shadow-md stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="stat-value text-lg">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <a href={`${blog}`} target="_blank" rel="noreferrer">
                    {" "}
                    {blog}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <UserReposList userRepos={userRepos} />
      </div>
    </>
  );
}

export default User;
