"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ReviewController = class ReviewController {
    constructor(reviewRepository) {
        this.reviewRepository = reviewRepository;
    }
    async create(review) {
        return await this.reviewRepository.create(review);
    }
    async count(where) {
        return await this.reviewRepository.count(where);
    }
    async find(filter) {
        return await this.reviewRepository.find(filter);
    }
    async updateAll(review, where) {
        return await this.reviewRepository.updateAll(review, where);
    }
    async findById(id) {
        return await this.reviewRepository.findById(id);
    }
    async updateById(id, review) {
        await this.reviewRepository.updateById(id, review);
    }
    async replaceById(id, review) {
        await this.reviewRepository.replaceById(id, review);
    }
    async deleteById(id) {
        await this.reviewRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post("/reviews", {
        responses: {
            "200": {
                description: "Review model instance",
                content: { "application/json": { schema: { "x-ts-type": models_1.Review } } }
            }
        }
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Review]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "create", null);
__decorate([
    rest_1.get("/reviews/count", {
        responses: {
            "200": {
                description: "Review model count",
                content: { "application/json": { schema: repository_1.CountSchema } }
            }
        }
    }),
    __param(0, rest_1.param.query.object("where", rest_1.getWhereSchemaFor(models_1.Review))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "count", null);
__decorate([
    rest_1.get("/reviews", {
        responses: {
            "200": {
                description: "Array of Review model instances",
                content: {
                    "application/json": {
                        schema: { type: "array", items: { "x-ts-type": models_1.Review } }
                    }
                }
            }
        }
    }),
    __param(0, rest_1.param.query.object("filter", rest_1.getFilterSchemaFor(models_1.Review))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "find", null);
__decorate([
    rest_1.patch("/reviews", {
        responses: {
            "200": {
                description: "Review PATCH success count",
                content: { "application/json": { schema: repository_1.CountSchema } }
            }
        }
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object("where", rest_1.getWhereSchemaFor(models_1.Review))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Review, Object]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "updateAll", null);
__decorate([
    rest_1.get("/reviews/{id}", {
        responses: {
            "200": {
                description: "Review model instance",
                content: { "application/json": { schema: { "x-ts-type": models_1.Review } } }
            }
        }
    }),
    __param(0, rest_1.param.path.number("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "findById", null);
__decorate([
    rest_1.patch("/reviews/{id}", {
        responses: {
            "204": {
                description: "Review PATCH success"
            }
        }
    }),
    __param(0, rest_1.param.path.number("id")),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Review]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "updateById", null);
__decorate([
    rest_1.put("/reviews/{id}", {
        responses: {
            "204": {
                description: "Review PUT success"
            }
        }
    }),
    __param(0, rest_1.param.path.number("id")),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Review]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "replaceById", null);
__decorate([
    rest_1.del("/reviews/{id}", {
        responses: {
            "204": {
                description: "Review DELETE success"
            }
        }
    }),
    __param(0, rest_1.param.path.number("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "deleteById", null);
ReviewController = __decorate([
    __param(0, repository_1.repository(repositories_1.ReviewRepository)),
    __metadata("design:paramtypes", [repositories_1.ReviewRepository])
], ReviewController);
exports.ReviewController = ReviewController;
//# sourceMappingURL=review.controller.js.map