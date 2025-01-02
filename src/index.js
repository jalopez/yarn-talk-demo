const externalDep = require('@yarn-talk/external-dep');
const externalDep2 = require('@yarn-talk/external-dep2');
const externalDepFixed = require('@yarn-talk/external-dep-fixed');

console.log({
  externalDep: externalDep.internalDep.version,
  externalDep2: externalDep2.internalDep.version,
  externalDepFixed: externalDepFixed.internalDep.version
});
