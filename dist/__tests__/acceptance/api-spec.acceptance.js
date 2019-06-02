"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const rest_1 = require("@loopback/rest");
const testlab_1 = require("@loopback/testlab");
describe("API specification", () => {
    it("api spec is valid", async () => {
        const app = new __1.NetbookReviewsApplication();
        const server = await app.getServer(rest_1.RestServer);
        const spec = server.getApiSpec();
        await testlab_1.validateApiSpec(spec);
    });
});
//# sourceMappingURL=api-spec.acceptance.js.map