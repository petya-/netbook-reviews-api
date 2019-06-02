import { Review } from "../../models";
import { givenReviewData } from "../../helpers/database.helpers";
import { expect } from "@loopback/testlab";

describe("Person (unit)", () => {
  // we recommend to group tests by method names
  describe("getFullName()", () => {
    it("Sets review name correctly", () => {
      const person = givenReview({
        name: "Best book",
        content: "ever",
        authorId: 1
      });

      expect(person.name).to.equal("Best book");
    });

    it("Sets review content correctly", () => {
      const person = givenReview({
        name: "Best book",
        content: "ever",
        ISBN: "123jsdfjs",
        authorId: 1
      });

      expect(person.content).to.equal("ever");
    });

    it("Sets review ISBN correctly", () => {
      const person = givenReview({
        name: "Best book",
        content: "ever",
        ISBN: "123jsdfjs",
        authorId: 1
      });

      expect(person.content).to.equal("ever");
    });

    it("Sets review authorId correctly", () => {
      const person = givenReview({
        name: "Best book",
        content: "ever",
        ISBN: "123jsdfjs",
        authorId: 1
      });

      expect(person.ISBN).to.equal("123jsdfjs");
    });
  });

  function givenReview(data: Partial<Review>) {
    return new Review(givenReviewData(data));
  }
});
