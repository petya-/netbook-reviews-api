import { NetbookReviewsApplication } from "../..";
import { RestServer } from "@loopback/rest";
import { validateApiSpec } from "@loopback/testlab";

describe("API specification", () => {
  it("api spec is valid", async () => {
    const app = new NetbookReviewsApplication();
    const server = await app.getServer(RestServer);
    const spec = server.getApiSpec();
    await validateApiSpec(spec);
  });
});
