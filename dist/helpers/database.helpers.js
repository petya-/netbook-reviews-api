"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("../repositories");
const testdb_datasource_1 = require("../datasources/testdb.datasource");
async function givenEmptyDatabase() {
    await new repositories_1.ReviewRepository(testdb_datasource_1.testdb).deleteAll();
}
exports.givenEmptyDatabase = givenEmptyDatabase;
function givenReviewData(data) {
    return Object.assign({
        name: "a-review-name",
        content: "a-review-content",
        ISBN: "a-review-isbn",
        authorId: 1
    }, data);
}
exports.givenReviewData = givenReviewData;
async function givenReview(data) {
    return await new repositories_1.ReviewRepository(testdb_datasource_1.testdb).create(givenReviewData(data));
}
exports.givenReview = givenReview;
//# sourceMappingURL=database.helpers.js.map