import { useContext, useEffect } from "react";
import UserListItems from "./UserListItems";
import GithubContext from "../../context/github/GithubContext";

function UserLists() {
  const { users, loading, fetchUsers } = useContext(GithubContext);

  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUsers();
  }, []);

  //   const fetchUsers = async () => {
  //     const response = await fetch(`${BASE_URL}/users`);
  //     const data = await response.json();
  //     setUsers(data);
  //     setLoading(false);
  //   };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8">
      {loading && <h2>loading...</h2> /*i hav plans to add a nice spinner*/}
      {users.map((user) => (
        <UserListItems key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserLists;
