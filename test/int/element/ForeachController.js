import test from 'ava';
import makeContext from 'context';
import parseXml from '@rgrove/parse-xml';
import ForeachController from 'element/ForeachController';

test('separated', (t) => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<ForeachController>
  <stringProp name="inputVal">input</stringProp>
  <stringProp name="returnVal">output</stringProp>
  <boolProp name="useSeparator">true</boolProp>
  <stringProp name="startIndex">3</stringProp>
  <stringProp name="endIndex">15</stringProp>
  <Fake/>
</ForeachController>
`;
  const tree = parseXml(xml);
  const node = tree.children[0];
  const result = ForeachController(node, makeContext());
  t.is(
    result.logic,
    `

for (let i = 3, first = true; i <= 15; i++) {
  vars["output"] = vars["input" + "_" + i]
  // Fake
  first = false
}`
  );
});

test('unseparated', (t) => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<ForeachController>
  <stringProp name="inputVal">input</stringProp>
  <stringProp name="returnVal">output</stringProp>
  <boolProp name="useSeparator">false</boolProp>
  <stringProp name="startIndex">3</stringProp>
  <stringProp name="endIndex">15</stringProp>
  <Fake/>
</ForeachController>
`;
  const tree = parseXml(xml);
  const node = tree.children[0];
  const result = ForeachController(node, makeContext());
  t.is(
    result.logic,
    `

for (let i = 3, first = true; i <= 15; i++) {
  vars["output"] = vars["input" + i]
  // Fake
  first = false
}`
  );
});
