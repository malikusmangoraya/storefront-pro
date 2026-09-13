const SupplierScorecardModel = require('../models/supplierScorecardModel');

class SupplierScorecardService {
  static async createScorecard(scorecardData) {
    // Add any business logic before creating the scorecard
    // e.g., validate supplier exists, calculate derived scores
    return SupplierScorecardModel.create(scorecardData);
  }

  static async getScorecardById(id) {
    return SupplierScorecardModel.findById(id);
  }

  static async getAllScorecards() {
    return SupplierScorecardModel.findAll();
  }

  static async getScorecardsBySupplierId(supplierId) {
    return SupplierScorecardModel.findBySupplierId(supplierId);
  }

  static async updateScorecard(id, updateData) {
    const existingScorecard = await SupplierScorecardModel.findById(id);
    if (!existingScorecard) {
      return null;
    }
    // Add business logic before updating
    return SupplierScorecardModel.update(id, updateData);
  }

  static async deleteScorecard(id) {
    return SupplierScorecardModel.remove(id);
  }
}

module.exports = SupplierScorecardService;