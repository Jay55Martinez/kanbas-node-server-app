import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
    app.delete("/api/enrollments/:enrollmentId", async (req, res) => {
        const { enrollmentId } = req.params;
        const status = await dao.deleteEnrollment(enrollmentId);
        res.send(status);
    });
    app.get("/api/enrollments", async (req, res) => {
        const enrollments = await dao.findAllEnrollments();
        res.send(enrollments);
    });
    app.post("/api/enrollments", async (req, res) => {
        const enrollment = req.body;
        const newEnrollment = await dao.addEnrollment(enrollment);
        res.send(newEnrollment);
    });
    app.get("/api/enrollments/:courseId", async (req, res) => {
        const { courseId } = req.params;
        const enrollments = await dao.findEnrollmentByCourse(courseId);
        res.send(enrollments);
    });
}