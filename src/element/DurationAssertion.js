/* eslint-disable no-param-reassign */
const { Check } = require('../symbol');
const value = require('../value');
const makeResult = require('../result');

function DurationAssertion(node, context) {
  const result = makeResult();
  if (node.attributes.enabled === 'false') {
    return result;
  }
  const settings = {};
  for (const key of Object.keys(node.attributes)) {
    attribute(node, key, settings);
  }
  if (!settings.name) {
    settings.name = 'DurationAssertion';
  }
  const props = node.children.filter((item) => /Prop$/.test(item.name));
  for (const prop of props) {
    property(prop, context, settings);
  }
  if (settings.logic) {
    result.state.add('r');
    result.defaults.push({ [Check]: { [settings.name]: settings.logic } });
  }
  return result;
}

function attribute(node, key, settings) {
  switch (key) {
    case 'enabled':
    case 'guiclass':
    case 'testclass':
      break;
    case 'testname':
      settings.name = node.attributes.testname;
      break;
    default:
      throw new Error(`Unrecognized DurationAssertion attribute: ${key}`);
  }
}

function property(node, context, settings) {
  const name = node.attributes.name.split('.').pop();
  switch (name) {
    case 'comments':
      settings.name += ` - ${value(node, context)}`;
      break;
    case 'duration': {
      const duration = Number.parseInt(value(node, context), 10);
      settings.logic = `return (r.timings.duration <= ${duration})`;
      break;
    }
    default:
      throw new Error(`Unrecognized DurationAssertion property: ${name}`);
  }
}

module.exports = DurationAssertion;
