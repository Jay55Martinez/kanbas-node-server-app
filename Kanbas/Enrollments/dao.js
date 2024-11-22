import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}
export function findAllEnrollments() {
  return Database.enrollments;
}

export function deleteEnrollment(enrollmentId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter((enrollment) => enrollment._id !== enrollmentId);
}

export function addEnrollment(enrollment) {
  const newEnrollment = { ...enrollment, _id: Date.now() };
  Database.enrollments = [...Database.enrollments, newEnrollment];
  return newEnrollment;
}