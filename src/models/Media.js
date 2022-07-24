const mongoose = require("mongoose");
const { Schema } = require("mongoose");

/**
 * @swagger
 * components:
 *  schema:
 *    Media:
 *      type: object
 *      required:
 *        - timestamps
 *      properties:
 *        originalname: 
 *          type: string
 *        encoding:
 *          type: string
 *        mimetype:
 *          type: string
 *        filename:
 *          type: string
 *        path:
 *          type: string
 *        size:
 *          type: string
 */
class Media {
  initSchema() {
    const schema = new Schema(
      {
        originalname: {
          type: String,
          required: false,
        },
        encoding: {
          type: String,
          required: false,
        },
        mimetype: {
          type: String,
          required: false,
        },
        filename: {
          type: String,
          required: false,
        },
        path: {
          type: String,
          required: false,
        },
        size: {
          type: Number,
          required: false,
        },
      },
      { timestamps: true }
    );

    try {
      mongoose.model("media", schema);
    } catch (e) {}
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("media");
  }
}

module.exports = { Media };
