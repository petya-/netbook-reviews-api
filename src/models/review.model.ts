import { Entity, model, property } from "@loopback/repository";

@model({ settings: {} })
export class Review extends Entity {
  @property({
    type: "string",
    id: true
  })
  _id?: string;

  @property({
    type: "string",
    required: true
  })
  content: string;

  @property({
    type: "string",
    required: true
  })
  name: string;

  @property({
    type: "string",
    required: true
  })
  ISBN: string;

  @property({
    type: "number",
    required: true
  })
  authorId: number;

  constructor(data?: Partial<Review>) {
    super(data);
  }
}
