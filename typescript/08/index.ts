// 08 - Null vs Undefined

// Profile type
type Profile = {
  username: string;
  bio: string | null;
  avatarUrl?: string;
};

// Creating profiles
// profile with a null bio and no avatar
const profile1: Profile = {
  username: "user1",
  bio: null,
};

// profile with all fields set
const profile2 = {
  username: "user2",
  bio: "Full-stack developer",
  avatarUrl: "https://www.avatar.com/avatar.jpg",
};

function showProfile(profile: Profile) {
  console.log(`Username: ${profile.username}`);
  console.log(`Bio: ${profile.bio || "No bio available"}`);
  console.log(`Avatar: ${profile.avatarUrl || "https://www.avatar.com/default.jpg"}\n`);
}

// Calling the function
showProfile(profile1);
showProfile(profile2);

// Output:
// Username: user1
// Bio: No bio available
// Avatar: https://www.avatar.com/default.jpg

// Username: user2
// Bio: Full-stack developer
// Avatar: https://www.avatar.com/avatar.jpg
