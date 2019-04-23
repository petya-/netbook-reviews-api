"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const test_helper_1 = require("./test-helper");
describe('PingController', () => {
    let app;
    let client;
    before('setupApplication', async () => {
        ({ app, client } = await test_helper_1.setupApplication());
    });
    after(async () => {
        await app.stop();
    });
    it('invokes GET /reviews', async () => {
        const res = await client.get('/reviews').expect(200);
        testlab_1.expect(res.body).to.containEql([]);
    });
});
//# sourceMappingURL=review.controller.acceptance.js.map