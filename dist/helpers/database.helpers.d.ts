import { Review } from "../models";
export declare function givenEmptyDatabase(): Promise<void>;
export declare function givenReviewData(data?: Partial<Review>): {
    name: string;
    content: string;
    ISBN: string;
    authorId: number;
} & Partial<Review>;
export declare function givenReview(data?: Partial<Review>): Promise<Review>;
