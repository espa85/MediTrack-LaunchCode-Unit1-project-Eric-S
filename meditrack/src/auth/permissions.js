export function isAdmin(user) {
return user?.role === "admin";
}


export function isDoctor(user) {
return user?.role === "doctor";
}


// Can this user edit *any* doctor and credentials (admin-level)?
export function canManageAllDoctors(user) {
return isAdmin(user);
}


// Can this user edit *profile* fields of a given doctor record?
// Profile fields allowed for doctor users:
// firstName, lastName, email, phone, photoUrl
// Admins can edit all fields.
export function canEditDoctorProfile(user, doctor) {
if (!user || !doctor) return false;
if (isAdmin(user)) return true;
if (!isDoctor(user)) return false;
return user.doctorId === doctor.id; // doctor editing their own profile
}


// Can this user edit credential assignments for a given doctor?
// Only admins can add/edit/remove credentials.
export function canEditDoctorCredentials(user, doctor) {
if (!user || !doctor) return false;
return isAdmin(user);
}