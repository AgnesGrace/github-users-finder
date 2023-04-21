import UserLists from "../users/UserLists";
import SearchUsers from "../users/SearchUsers";
import Alert from "../layout/Alert";
function Home() {
  return (
    <div className="container px-3 pb-12 mx-auto">
      <Alert />
      <SearchUsers />
      <UserLists />
    </div>
  );
}

export default Home;
