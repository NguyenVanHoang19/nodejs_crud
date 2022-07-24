"use strict";
const AUthController = require("../controllers/AuthController");
const express = require("express"),
  router = express.Router();

/**
 * @swagger
 * '/api/auth/login':
 *  post:
 *     tags: [AUTH]
 *     summary: Login.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/Post'
 */
router.post("/login", AUthController.login);
router.get("/logout", AUthController.checkLogin, AUthController.logout);

/**
 * @swagger
 * '/api/auth/register':
 *  post:
 *     tags: [AUTH]
 *     summary: Register.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schema/User'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/User'
 */
router.post("/register", AUthController.register);
router.post(
  "/changePassword",
  AUthController.checkLogin,
  AUthController.changePassword
);

module.exports = router;
