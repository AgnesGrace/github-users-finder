import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
function SearchUsers() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("This field cannot be empty", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const handleClearUsers = () => {
    clearUsers();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-8">
      <div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for any user"
                value={text}
                onChange={handleTextChange}
                className="input input-lg w-full bg-blue-900 text-white pr-40"
              />
              <button className="btn btn-lg w-30 absolute right-0 top-0 rounded-none ">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={handleClearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchUsers;
