var internalDep = require('@yarn-talk/internal-dep');
var pjson = require('./package.json');

module.exports = {
  externalDep: {
    name: pjson.name,
    version: pjson.version
  },
  internalDep: internalDep
};
