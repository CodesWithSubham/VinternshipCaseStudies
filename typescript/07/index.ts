// 07 - User defined Types in Typescript

// Roles
enum Role {
  Doctor,
  Nurse,
  Admin,
}

// Staff interface
interface Staff {
  id: number;
  name: string;
  role: Role;
}

// an array of staff members
const staff: Staff[] = [
  { id: 1, name: "Rahul", role: Role.Doctor },
  { id: 2, name: "Sneha", role: Role.Nurse },
  { id: 3, name: "Subham", role: Role.Admin },
];

// Function to print staff summary
function printStaffSummary(staff: Staff[]) {
  staff.forEach((staffMember) => {
    console.log(`${staffMember.name} (${Role[staffMember.role]})`);
  });
}

// Calling the function
printStaffSummary(staff);

// Output:
// Rahul (Doctor)
// Sneha (Nurse)
// Subham (Admin)
