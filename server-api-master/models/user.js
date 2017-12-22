'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var userSchema = Schema({
  name: { type: String, required: true },
  teams: [{ type: ObjectId, ref: 'Team' }]
});

module.exports = {
  schema: userSchema,
  model: mongoose.model('User', userSchema),
  registry: {
    urlTemplates: {
      "self": "http://127.0.0.1:3000/api/users/{id}",
      "relationship": "http://127.0.0.1:3000/api/users/{ownerId}/relationships/{path}"
    }
  }
};
