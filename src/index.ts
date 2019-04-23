import {NetbookReviewsApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {NetbookReviewsApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new NetbookReviewsApplication(options);
  await app.boot();
  // Automatically updates the database schema whenever the application is started
  await app.migrateSchema();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
