import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Review} from '../models';
import {ReviewRepository} from '../repositories';

export class ReviewController {
  constructor(
    @repository(ReviewRepository)
    public reviewRepository : ReviewRepository,
  ) {}

  @post('/reviews', {
    responses: {
      '200': {
        description: 'Review model instance',
        content: {'application/json': {schema: {'x-ts-type': Review}}},
      },
    },
  })
  async create(@requestBody() review: Review): Promise<Review> {
    return await this.reviewRepository.create(review);
  }

  @get('/reviews/count', {
    responses: {
      '200': {
        description: 'Review model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Review)) where?: Where,
  ): Promise<Count> {
    return await this.reviewRepository.count(where);
  }

  @get('/reviews', {
    responses: {
      '200': {
        description: 'Array of Review model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Review}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Review)) filter?: Filter,
  ): Promise<Review[]> {
    return await this.reviewRepository.find(filter);
  }

  @patch('/reviews', {
    responses: {
      '200': {
        description: 'Review PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() review: Review,
    @param.query.object('where', getWhereSchemaFor(Review)) where?: Where,
  ): Promise<Count> {
    return await this.reviewRepository.updateAll(review, where);
  }

  @get('/reviews/{id}', {
    responses: {
      '200': {
        description: 'Review model instance',
        content: {'application/json': {schema: {'x-ts-type': Review}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Review> {
    return await this.reviewRepository.findById(id);
  }

  @patch('/reviews/{id}', {
    responses: {
      '204': {
        description: 'Review PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() review: Review,
  ): Promise<void> {
    await this.reviewRepository.updateById(id, review);
  }

  @put('/reviews/{id}', {
    responses: {
      '204': {
        description: 'Review PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() review: Review,
  ): Promise<void> {
    await this.reviewRepository.replaceById(id, review);
  }

  @del('/reviews/{id}', {
    responses: {
      '204': {
        description: 'Review DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.reviewRepository.deleteById(id);
  }
}
