const Joi = require('joi');

const createScorecardSchema = Joi.object({
  supplierId: Joi.string().uuid().required(),
  scoreDate: Joi.date().iso().required(),
  overallScore: Joi.number().min(0).max(100).required(),
  qualityScore: Joi.number().min(0).max(100).optional(),
  deliveryScore: Joi.number().min(0).max(100).optional(),
  costScore: Joi.number().min(0).max(100).optional(),
  innovationScore: Joi.number().min(0).max(100).optional(),
  comments: Joi.string().allow('').optional(),
  createdBy: Joi.string().uuid().optional(), // Assuming a user ID
});

const updateScorecardSchema = Joi.object({
  supplierId: Joi.string().uuid().optional(),
  scoreDate: Joi.date().iso().optional(),
  overallScore: Joi.number().min(0).max(100).optional(),
  qualityScore: Joi.number().min(0).max(100).optional(),
  deliveryScore: Joi.number().min(0).max(100).optional(),
  costScore: Joi.number().min(0).max(100).optional(),
  innovationScore: Joi.number().min(0).max(100).optional(),
  comments: Joi.string().allow('').optional(),
}).min(1); // At least one field must be present for an update

module.exports = {
  createScorecardSchema,
  updateScorecardSchema,
};