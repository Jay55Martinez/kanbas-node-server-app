import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
    app.get("/api/assignments", (req, res) => {
        res.send(dao.findAllAssignments());
    });

    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        dao.deleteAssignment(assignmentId);
        res.send("Assignment deleted");
    });

    app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignment = req.body;
        const newAssignment = dao.updateAssignment(assignmentId, assignment);
        res.send(newAssignment);
    });

    app.post("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignment = {
            ...req.body,
            assignment: assignmentId,
        };
        const newAssignment = dao.createAssignment(assignment);
        res.send(newAssignment);
    });
};