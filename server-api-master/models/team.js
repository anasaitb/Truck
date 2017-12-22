'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var teamSchema = Schema({
  name: { type: String, required: true },
  players: [{ type: ObjectId, ref: 'User' }]
});

module.exports = {
  schema: teamSchema,
  model: mongoose.model('Team', teamSchema),
  registry: {
    urlTemplates: {
      "self": "http://127.0.0.1:3000/api/teams/{id}",
      "relationship": "http://127.0.0.1:3000/api/teams/{ownerId}/relationships/{path}"
    }
  }
};
