const properties = require('../common/properties');
const makeResult = require('../result');

function CookieManager(node, context) {
  const result = makeResult();
  if (node.attributes.enabled === 'false') {
    return result;
  }
  for (const key of Object.keys(node.attributes)) {
    attribute(node, key, result);
  }
  const props = node.children.filter((item) => /Prop$/.test(item.name));
  for (const prop of props) {
    property(prop, context, result);
  }
  return result;
}

function attribute(_node, key, _result) {
  switch (key) {
    case 'enabled':
    case 'guiclass':
    case 'testclass':
    case 'testname':
      break;
    default:
      throw new Error(`Unrecognized CookieManager attribute: ${key}`);
  }
}

function property(node, context, result) {
  const name = node.attributes.name.split('.').pop();
  switch (name) {
    case 'comments':
    case 'clearEachIteration':
    case 'policy':
      break;
    case 'cookies': {
      result.imports.set('http', 'k6/http');
      const entries = node.children.filter((item) => /Prop$/.test(item.name));
      for (const entry of entries) {
        cookie(entry, context, result);
      }
      break;
    }
    default:
      throw new Error(`Unrecognized CookieManager property: ${name}`);
  }
}

function cookie(node, context, result) {
  const props = properties(node, context);
  const spec = { value: props.value || '' };
  if (props.domain) {
    spec.domain = props.domain;
  }
  if (props.path) {
    spec.path = props.path;
  }
  if ('secure' in props) {
    spec.secure = !!props.secure;
  }
  const { name } = node.attributes;
  result.cookies.set(name, spec);
}

module.exports = CookieManager;
