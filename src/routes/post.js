const PostController = require("../controllers/PostController");
const express = require("express"),
  router = express.Router();
const AuthController = require("../controllers/AuthController");

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Returns the list of all the posts
 *     security:
 *       - bearerAuth: []
 *     tags: [POST]
 *     responses:
 *       200:
 *         description: The list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schema/Post'
 */
router.get("/", AuthController.checkLogin, PostController.getAll);

/**
 * @swagger
 * '/api/posts/{id}':
 *  get:
 *     tags:
 *     - POST
 *     summary: Get a single post by the postId
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the post
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/Post'
 *       404:
 *         description: Post not found
 */
router.get("/:id", PostController.get);

/**
 * @swagger
 * '/api/posts':
 *  post:
 *     tags: [POST]
 *     summary: Add new post.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/Post'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/Post'
 *       404:
 *         description: Post not found
 */
router.post("/", PostController.insert);

/**
 * @swagger
 * '/api/posts/{id}':
 *  put:
 *     tags: [POST]
 *     summary: Update post by id.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/Post'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/Post'
 *       404:
 *         description: Post not found
 */
router.put("/:id", PostController.update);

/**
 * @swagger
 * '/api/posts/{id}':
 *  delete:
 *     tags:
 *     - POST
 *     summary: Delete post by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the post
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Post not found
 */
router.delete("/:id", PostController.delete);

module.exports = router;
