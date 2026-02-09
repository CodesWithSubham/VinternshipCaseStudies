// 07 - User defined Types in Typescript
// Roles
var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Nurse"] = 1] = "Nurse";
    Role[Role["Admin"] = 2] = "Admin";
})(Role || (Role = {}));
// an array of staff members
var staff = [
    { id: 1, name: "Rahul", role: Role.Doctor },
    { id: 2, name: "Sneha", role: Role.Nurse },
    { id: 3, name: "Subham", role: Role.Admin },
];
// Function to print staff summary
function printStaffSummary(staff) {
    staff.forEach(function (staffMember) {
        console.log("".concat(staffMember.name, " (").concat(Role[staffMember.role], ")"));
    });
}
// Calling the function
printStaffSummary(staff);
// Output:
// John (Doctor)
// Jane (Nurse)
// Bob (Admin)
