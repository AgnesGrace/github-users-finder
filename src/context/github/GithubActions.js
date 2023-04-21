const BASE_URL = import.meta.env.VITE_GITHUB_URL;

export const searchUsers = async (text) => {
  const response = await fetch(`${BASE_URL}/search/users?q=${text}`);
  // const data = await response.json();
  const { items } = await response.json();
  // setUsers(data);
  // setLoading(false);
  return items;
};
