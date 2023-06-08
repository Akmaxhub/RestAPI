const express = require("express");
const voiceflowRoutes = require('./src/voiceflow/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use("/api/v1/voiceflows", voiceflowRoutes);

app.listen(port, () => console.log(`Listening to port: ${port}`));