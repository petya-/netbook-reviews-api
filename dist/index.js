"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.NetbookReviewsApplication = application_1.NetbookReviewsApplication;
async function main(options = {}) {
    const app = new application_1.NetbookReviewsApplication(options);
    await app.boot();
    // Automatically updates the database schema whenever the application is started
    await app.migrateSchema();
    await app.start();
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    console.log(`Try ${url}/ping`);
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map