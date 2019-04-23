import {DefaultCrudRepository} from '@loopback/repository';
import {Review} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ReviewRepository extends DefaultCrudRepository<
  Review,
  typeof Review.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Review, dataSource);
  }
}
