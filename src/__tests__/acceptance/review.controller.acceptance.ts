import {Client, expect} from '@loopback/testlab';
import {NetbookReviewsApplication} from '../..';
import {setupApplication} from './test-helper';

describe('ReviewController', () => {
  let app: NetbookReviewsApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  // it('invokes GET /reviews', async () => {
  //   const res = await client.get('/reviews').expect(200);
  //   expect(res.body).to.equal([]);
  // });
});
