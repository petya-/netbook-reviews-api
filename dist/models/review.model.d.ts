import { Entity } from "@loopback/repository";
export declare class Review extends Entity {
    _id?: string;
    content: string;
    name: string;
    ISBN: string;
    authorId: number;
    constructor(data?: Partial<Review>);
}
