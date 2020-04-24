/*
 * Normalize document tree
 *
 * Container elements are followed by a sibling hashTree containing children,
 * an awkward pattern to deal with. Moves hashTree elements into children.
 */
function normalize(tree) {
  const { children } = tree;
  for (let i = 0, parent = null; i < children.length; i += 1) {
    const child = children[i];
    if (child.type !== 'element') {
      continue;
    }
    normalize(child);
    if (child.name === 'hashTree') {
      if (parent) {
        const [hashTree] = children.splice(i, 1);
        hashTree.parent = parent;
        parent.children.push(hashTree);
        i -= 1;
      }
      parent = null;
    } else {
      parent = child;
    }
  }
}

module.exports = normalize;
