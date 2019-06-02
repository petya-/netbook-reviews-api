"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const database_helpers_1 = require("../../helpers/database.helpers");
const testlab_1 = require("@loopback/testlab");
describe("Review (unit)", () => {
    // we recommend to group tests by method names
    describe("getFullName()", () => {
        it("Sets review name correctly", () => {
            const review = givenReview({
                name: "Best book",
                content: "ever",
                authorId: 1
            });
            testlab_1.expect(review.name).to.equal("Best book");
        });
        it("Sets review content correctly", () => {
            const review = givenReview({
                name: "Best book",
                content: "ever",
                ISBN: "123jsdfjs",
                authorId: 1
            });
            testlab_1.expect(review.content).to.equal("ever");
        });
        it("Sets review ISBN correctly", () => {
            const review = givenReview({
                name: "Best book",
                content: "ever",
                ISBN: "123jsdfjs",
                authorId: 1
            });
            testlab_1.expect(review.content).to.equal("ever");
        });
        it("Sets review authorId correctly", () => {
            const review = givenReview({
                name: "Best book",
                content: "ever",
                ISBN: "123jsdfjs",
                authorId: 1
            });
            testlab_1.expect(review.ISBN).to.equal("123jsdfjs");
        });
    });
    function givenReview(data) {
        return new models_1.Review(database_helpers_1.givenReviewData(data));
    }
});
//# sourceMappingURL=review.model.unit.js.map