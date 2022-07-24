"use strict";
const MediaController = require("../controllers/MediaController");
const express = require("express"),
  router = express.Router();
const AuthController = require("../controllers/AuthController");

/**
 * @swagger
 * '/api/media/{id}':
 *  get:
 *     tags: [MEDIA]
 *     security:
 *       - bearerAuth: []
 *     summary: Get media by id.
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the media
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/Media'
 */
router.get("/:id", AuthController.checkLogin, MediaController.get);

/**
 * @swagger
 * '/api/media':
 *  post:
 *     tags: [MEDIA]
 *     security:
 *       - bearerAuth: []
 *     summary: Upload meida.
 *     consumes:
 *        - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              file:
 *                type: string
 *                format: binary
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/Media'
 */
router.post(
  "/",
  [AuthController.checkLogin, MediaController.upload.single("file")],
  MediaController.insert
);
router.delete("/:id", AuthController.checkLogin, MediaController.delete);

module.exports = router;
