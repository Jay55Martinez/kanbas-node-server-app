// const express = require('express');
import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
// req is all the information comming from the client
// res represents the response of the server 
HelloRoutes(app);
Lab5(app);

app.listen(process.env.PORT || 4000);