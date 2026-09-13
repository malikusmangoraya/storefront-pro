const Joi = require('joi');

const erpWebhook = Joi.object({
  eventType: Joi.string().required(),
  data: Joi.object().required(),
  timestamp: Joi.date().iso().required(),
  signature: Joi.string().optional(), // For webhook verification
});

module.exports = {
  erpWebhook,
};