"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const testdb_datasource_1 = require("../../datasources/testdb.datasource");
const testlab_1 = require("@loopback/testlab");
async function setupApplication() {
    const restConfig = testlab_1.givenHttpServerConfig({
    // Customize the server configuration here.
    // Empty values (undefined, '') will be ignored by the helper.
    //
    // host: process.env.HOST,
    // port: +process.env.PORT,
    });
    const app = new __1.NetbookReviewsApplication({
        rest: restConfig
    });
    await app.boot();
    await app.start();
    app.dataSource(testdb_datasource_1.testdb);
    const client = testlab_1.createRestAppClient(app);
    return { app, client };
}
exports.setupApplication = setupApplication;
//# sourceMappingURL=test-helper.js.map