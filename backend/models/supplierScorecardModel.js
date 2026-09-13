const db = require('../config/db'); // Assuming db.js exports a pg client

class SupplierScorecardModel {
  static async create({ supplierId, scoreDate, overallScore, qualityScore, deliveryScore, costScore, innovationScore, comments, createdBy }) {
    const result = await db.query(
      `INSERT INTO supplier_scorecards (
        supplier_id, score_date, overall_score, quality_score, delivery_score,
        cost_score, innovation_score, comments, created_by
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *`,
      [supplierId, scoreDate, overallScore, qualityScore, deliveryScore, costScore, innovationScore, comments, createdBy]
    );
    return result.rows[0];
  }

  static async findById(id) {
    const result = await db.query('SELECT * FROM supplier_scorecards WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async findAll() {
    const result = await db.query('SELECT * FROM supplier_scorecards ORDER BY score_date DESC');
    return result.rows;
  }

  static async findBySupplierId(supplierId) {
    const result = await db.query('SELECT * FROM supplier_scorecards WHERE supplier_id = $1 ORDER BY score_date DESC', [supplierId]);
    return result.rows;
  }

  static async update(id, { supplierId, scoreDate, overallScore, qualityScore, deliveryScore, costScore, innovationScore, comments }) {
    const fields = [];
    const values = [];
    let paramIndex = 1;

    if (supplierId !== undefined) { fields.push(`supplier_id = $${paramIndex++}`); values.push(supplierId); }
    if (scoreDate !== undefined) { fields.push(`score_date = $${paramIndex++}`); values.push(scoreDate); }
    if (overallScore !== undefined) { fields.push(`overall_score = $${paramIndex++}`); values.push(overallScore); }
    if (qualityScore !== undefined) { fields.push(`quality_score = $${paramIndex++}`); values.push(qualityScore); }
    if (deliveryScore !== undefined) { fields.push(`delivery_score = $${paramIndex++}`); values.push(deliveryScore); }
    if (costScore !== undefined) { fields.push(`cost_score = $${paramIndex++}`); values.push(costScore); }
    if (innovationScore !== undefined) { fields.push(`innovation_score = $${paramIndex++}`); values.push(innovationScore); }
    if (comments !== undefined) { fields.push(`comments = $${paramIndex++}`); values.push(comments); }

    if (fields.length === 0) return null; // No fields to update

    const result = await db.query(`UPDATE supplier_scorecards SET ${fields.join(', ')}, updated_at = NOW() WHERE id = $${paramIndex} RETURNING *`, [...values, id]);
    return result.rows[0];
  }

  static async remove(id) {
    const result = await db.query('DELETE FROM supplier_scorecards WHERE id = $1 RETURNING id', [id]);
    return result.rows[0];
  }
}

module.exports = SupplierScorecardModel;