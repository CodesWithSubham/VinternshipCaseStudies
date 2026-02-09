// 08 - Null vs Undefined
// Creating profiles
// profile with a null bio and no avatar
var profile1 = {
    username: "user1",
    bio: null,
};
// profile with all fields set
var profile2 = {
    username: "user2",
    bio: "Full-stack developer",
    avatarUrl: "https://www.avatar.com/avatar.jpg",
};
function showProfile(profile) {
    console.log("Username: ".concat(profile.username));
    console.log("Bio: ".concat(profile.bio || "No bio available"));
    console.log("Avatar: ".concat(profile.avatarUrl || "https://www.avatar.com/default.jpg", "\n"));
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
