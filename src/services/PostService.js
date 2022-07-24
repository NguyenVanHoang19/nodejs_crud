"use strict";
const { Service } = require("../../systems/services");

class PostService extends Service {
  constructor(model) {
    super(model);
  }
}

module.exports = { PostService };
