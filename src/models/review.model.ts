import {Entity, model, property} from '@loopback/repository';

@model()
export class Review extends Entity {
  @property({
    id: true,
    description: 'The unique identifier for a review',
  })
  id: number

  @property({
    type: 'string',
    required: true,
  })
  content: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  ISBN: string;

  @property({
    type: 'number',
    required: true,
  })
  authorId: number;


  constructor(data?: Partial<Review>) {
    super(data);
  }
}
