import { NetbookReviewsApplication } from "../..";
import { Client, expect } from "@loopback/testlab";
import { setupApplication } from "./test-helper";
import {
  givenEmptyDatabase,
  givenReview
} from "../../helpers/database.helpers";

describe("Product (acceptance)", () => {
  let app: NetbookReviewsApplication;
  let client: Client;

  before("setupApplication", async () => {
    ({ app, client } = await setupApplication());
  });

  before(givenEmptyDatabase);

  after(async () => {
    await app.stop();
  });

  it("Should retrieve review details", async () => {
    // arrange
    const review = await givenReview({
      name: "Best book",
      content: "Best book i ever read",
      ISBN: "ISBN1234",
      authorId: 1
    });
    const expected = Object.assign(
      {
        _id: review._id
      },
      review
    );

    // act
    const response = await client.get(`/reviews/${review._id}`);

    // assert
    expect(response.body).to.containEql(expected);
  });

  it("Should retrieve reviews", async () => {
    // arrange
    const review = await givenReview({
      name: "Best book",
      content: "Best book i ever read",
      ISBN: "ISBN1234",
      authorId: 1
    });
    const expected = Object.assign(
      {
        _id: review._id
      },
      review
    );

    // act
    const response = await client.get(`/reviews/`);

    // assert
    expect(response.body).to.containEql(expected);
  });
});
