"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("./test-helper");
describe('ReviewController', () => {
    let app;
    let client;
    before('setupApplication', async () => {
        ({ app, client } = await test_helper_1.setupApplication());
    });
    after(async () => {
        await app.stop();
    });
    // it('invokes GET /reviews', async () => {
    //   const res = await client.get('/reviews').expect(200);
    //   expect(res.body).to.equal([]);
    // });
});
//# sourceMappingURL=review.controller.acceptance.js.map