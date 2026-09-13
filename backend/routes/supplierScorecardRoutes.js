const express = require('express');
const router = express.Router();
const SupplierScorecardController = require('../controllers/supplierScorecardController');
const validateRequest = require('../middleware/validateRequest');
const { createScorecardSchema, updateScorecardSchema } = require('../middleware/validations/supplierScorecard.schema');
const auth = require('../middleware/auth'); // Assuming authentication middleware exists
const rbac = require('../middleware/rbac'); // Assuming RBAC middleware exists

// Apply authentication and RBAC for protected routes
// Example: Only users with 'admin' or 'manager' roles can manage scorecards
router.use(auth); // Protect all routes in this router
router.use(rbac(['admin', 'manager', 'procurement'])); // Example: only specific roles can access

// GET all scorecards or by supplierId
router.get('/', SupplierScorecardController.getScorecards);

// GET a single scorecard by ID
router.get('/:id', SupplierScorecardController.getScorecardById);

// POST a new scorecard
router.post('/', validateRequest(createScorecardSchema), SupplierScorecardController.createScorecard);

// PUT/PATCH update an existing scorecard
router.put('/:id', validateRequest(updateScorecardSchema), SupplierScorecardController.updateScorecard);

// DELETE a scorecard
router.delete('/:id', SupplierScorecardController.deleteScorecard);

module.exports = router;