const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const slugify = require("slugify");

/**
 * @swagger
 * components:
 *  schema:
 *    Post:
 *      type: object
 *      required:
 *        - title
 *        - content
 *        - timestamps
 *      properties:
 *        title: 
 *          type: string
 *          default: ""
 *        email:
 *          type: string
 *          default: ""
 *        slug:
 *          type: string
 *          default: ""
 *        subtitle:
 *          type: string
 *          default: ""
 *        description:
 *          type: string
 *          default: ""
 *        content:
 *          type: string
 *          default: ""
 */

class Post {
  initSchema() {
    const schema = new Schema(
      {
        title: {
          type: String,
          required: true,
        },
        slug: String,
        subtitle: {
          type: String,
          required: false,
        },
        description: {
          type: String,
          required: false,
        },
        content: {
          type: String,
          required: true,
        },
      },
      { timestamps: true }
    );

    schema.pre("save", function (next) {
      const post = this;

      if (!post.isModified("title")) {
        return next();
      }
      post.slug = slugify(post.title, "_");
      console.log("set slug", post.slug);
      return next();
    });
    schema.plugin(uniqueValidator);
    try {
      mongoose.model("post", schema);
    } catch (e) {}
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("post");
  }
}

module.exports = { Post };
