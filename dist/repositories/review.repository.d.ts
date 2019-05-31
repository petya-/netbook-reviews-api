import { DefaultCrudRepository } from '@loopback/repository';
import { Review } from '../models';
import { DbDataSource } from '../datasources';
export declare class ReviewRepository extends DefaultCrudRepository<Review, typeof Review.prototype._id> {
    constructor(dataSource: DbDataSource);
}
