import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
    app.get("/api/assignments", async (req, res) => {
        const assignments = await dao.findAllAssignments();
        res.send(assignments);
    });

    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = await dao.deleteAssignment(assignmentId);
        res.send(status);
    });

    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignment = req.body;
        const newAssignment = await dao.updateAssignment(assignmentId, assignment);
        res.send(newAssignment);
    });

    app.post("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignment = {
            ...req.body,
            assignment: assignmentId,
        };
        const newAssignment = await dao.createAssignment(assignment);
        res.send(newAssignment);
    });
};