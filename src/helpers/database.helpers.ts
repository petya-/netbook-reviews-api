import { ReviewRepository } from "../repositories";
import { testdb } from "../datasources/testdb.datasource";
import { Review } from "../models";

export async function givenEmptyDatabase() {
  await new ReviewRepository(testdb).deleteAll();
}

export function givenReviewData(data?: Partial<Review>) {
  return Object.assign(
    {
      name: "a-review-name",
      content: "a-review-content",
      ISBN: "a-review-isbn",
      authorId: 1
    },
    data
  );
}

export async function givenReview(data?: Partial<Review>) {
  return await new ReviewRepository(testdb).create(givenReviewData(data));
}
