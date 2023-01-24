require("dotenv").config();
const server = require("./server");
const { conn } = require("./server/db");
const { PORT } = process.env;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
    server.listen(3001, () => {
        console.log("🚀 listening at 3001 🚀 "); // eslint-disable-line no-console
    });
});

