require("dotenv").config();
const server = require("./server");
const { conn } = require("./server/database/db");
const { PORT } = process.env;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
    server.listen(3001, () => {
        console.log("🚀 listening at 3001 🚀 "); // eslint-disable-line no-console
    });
});
