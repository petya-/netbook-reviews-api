import { Review } from "../../models";
import { givenReviewData } from "../../helpers/database.helpers";
import { expect } from "@loopback/testlab";

describe("Review (unit)", () => {
  // we recommend to group tests by method names
  describe("getFullName()", () => {
    it("Sets review name correctly", () => {
      const review = givenReview({
        name: "Best book",
        content: "ever",
        authorId: 1
      });

      expect(review.name).to.equal("Best book");
    });

    it("Sets review content correctly", () => {
      const review = givenReview({
        name: "Best book",
        content: "ever",
        ISBN: "123jsdfjs",
        authorId: 1
      });

      expect(review.content).to.equal("ever");
    });

    it("Sets review ISBN correctly", () => {
      const review = givenReview({
        name: "Best book",
        content: "ever",
        ISBN: "123jsdfjs",
        authorId: 1
      });

      expect(review.content).to.equal("ever");
    });

    it("Sets review authorId correctly", () => {
      const review = givenReview({
        name: "Best book",
        content: "ever",
        ISBN: "123jsdfjs",
        authorId: 1
      });

      expect(review.ISBN).to.equal("123jsdfjs");
    });
  });

  function givenReview(data: Partial<Review>) {
    return new Review(givenReviewData(data));
  }
});
