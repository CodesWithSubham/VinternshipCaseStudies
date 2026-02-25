import useUserStore from "../store/userStore";

const Profile = () => {
  const user = useUserStore((s) => s.user);
  const clearUser = useUserStore((s) => s.clearUser);

  if (!user) return <p>Not logged in</p>;

  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={clearUser}>Logout</button>
    </div>
  );
};

export default Profile;
