import { Entity } from '@loopback/repository';
export declare class Review extends Entity {
    id: number;
    content: string;
    name: string;
    ISBN: string;
    authorId: number;
    constructor(data?: Partial<Review>);
}
