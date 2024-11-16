export default function HelloRoutes (app) {
    app.get("/hello", (req, res) => {
        res.send("life is good");
    });

    app.get("/", (req, res) => {
        res.send("Welcome to Full Stack Development!");
    });
};