import { useState, useReducer } from "react";
import { createContext } from "react";
//import the githubReducer
import githubReducer from "../GithubReducer";
const GithubContext = createContext();

const BASE_URL = import.meta.env.VITE_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  const initialState = {
    users: [],
    user: {},
    userRepos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //get a unique user
  const getSingleUser = async (login) => {
    setLoading();
    const response = await fetch(`${BASE_URL}/users/${login}`);
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };
  // get user repos
  const getUserRepos = async (login) => {
    setLoading();
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    const response = await fetch(`${BASE_URL}/users/${login}/repos?${params}`);
    const data = await response.json();
    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  const searchUsers = async (text) => {
    setLoading();
    const response = await fetch(`${BASE_URL}/search/users?q=${text}`);
    // const data = await response.json();
    const { items } = await response.json();
    // setUsers(data);
    // setLoading(false);
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };
  // set loading
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  //clear users
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  return (
    <GithubContext.Provider
      value={{
        // users,
        // loading,
        // users: state.users,
        // user: state.user,
        // loading: state.loading,
        // userRepos: state.userRepos,
        ...state,

        searchUsers,
        getSingleUser,
        getUserRepos,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
