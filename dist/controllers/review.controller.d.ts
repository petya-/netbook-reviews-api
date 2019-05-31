import { Count, Filter, Where } from "@loopback/repository";
import { Review } from "../models";
import { ReviewRepository } from "../repositories";
export declare class ReviewController {
    reviewRepository: ReviewRepository;
    constructor(reviewRepository: ReviewRepository);
    create(review: Review): Promise<Review>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Review[]>;
    updateAll(review: Review, where?: Where): Promise<Count>;
    findById(id: number): Promise<Review>;
    updateById(id: number, review: Review): Promise<void>;
    replaceById(id: number, review: Review): Promise<void>;
    deleteById(id: number): Promise<void>;
}
