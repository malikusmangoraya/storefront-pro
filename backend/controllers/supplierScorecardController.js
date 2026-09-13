const SupplierScorecardService = require('../services/supplierScorecardService');

class SupplierScorecardController {
  static async createScorecard(req, res, next) {
    try {
      const scorecard = await SupplierScorecardService.createScorecard({ ...req.body, createdBy: req.user ? req.user.id : null }); // Assuming user info is in req.user
      res.status(201).json(scorecard);
    } catch (error) {
      next(error);
    }
  }

  static async getScorecards(req, res, next) {
    try {
      const { supplierId } = req.query;
      let scorecards;
      if (supplierId) {
        scorecards = await SupplierScorecardService.getScorecardsBySupplierId(supplierId);
      } else {
        scorecards = await SupplierScorecardService.getAllScorecards();
      }
      res.status(200).json(scorecards);
    } catch (error) {
      next(error);
    }
  }

  static async getScorecardById(req, res, next) {
    try {
      const { id } = req.params;
      const scorecard = await SupplierScorecardService.getScorecardById(id);
      if (!scorecard) {
        return res.status(404).json({ message: 'Scorecard not found' });
      }
      res.status(200).json(scorecard);
    } catch (error) {
      next(error);
    }
  }

  static async updateScorecard(req, res, next) {
    try {
      const { id } = req.params;
      const updatedScorecard = await SupplierScorecardService.updateScorecard(id, req.body);
      if (!updatedScorecard) {
        return res.status(404).json({ message: 'Scorecard not found' });
      }
      res.status(200).json(updatedScorecard);
    } catch (error) {
      next(error);
    }
  }

  static async deleteScorecard(req, res, next) {
    try {
      const { id } = req.params;
      const deleted = await SupplierScorecardService.deleteScorecard(id);
      if (!deleted) {
        return res.status(404).json({ message: 'Scorecard not found' });
      }
      res.status(204).send(); // No content for successful deletion
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SupplierScorecardController;