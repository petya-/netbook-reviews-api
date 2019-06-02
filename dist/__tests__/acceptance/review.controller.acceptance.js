"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const test_helper_1 = require("./test-helper");
const database_helpers_1 = require("../../helpers/database.helpers");
describe("Product (acceptance)", () => {
    let app;
    let client;
    before("setupApplication", async () => {
        ({ app, client } = await test_helper_1.setupApplication());
    });
    before(database_helpers_1.givenEmptyDatabase);
    after(async () => {
        await app.stop();
    });
    it("Should retrieve review details", async () => {
        // arrange
        const review = await database_helpers_1.givenReview({
            name: "Best book",
            content: "Best book i ever read",
            ISBN: "ISBN1234",
            authorId: 1
        });
        const expected = Object.assign({
            _id: review._id
        }, review);
        // act
        const response = await client.get(`/reviews/${review._id}`);
        // assert
        testlab_1.expect(response.body).to.containEql(expected);
    });
    it("Should retrieve reviews", async () => {
        // arrange
        const review = await database_helpers_1.givenReview({
            name: "Best book",
            content: "Best book i ever read",
            ISBN: "ISBN1234",
            authorId: 1
        });
        const expected = Object.assign({
            _id: review._id
        }, review);
        // act
        const response = await client.get(`/reviews/`);
        // assert
        testlab_1.expect(response.body).to.containEql(expected);
    });
});
//# sourceMappingURL=review.controller.acceptance.js.map