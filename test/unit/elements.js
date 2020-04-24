import test from 'ava';
import element from 'sink/element';
import merge from 'sink/merge';
import elements from 'elements';

function el() {
  return { type: 'element' };
}

test.beforeEach((t) => {
  merge.resetHistory();
  element.resetHistory();
});

test.serial('element 0', (t) => {
  elements([]);
  t.true(element.notCalled);
});

test.serial('element 1', (t) => {
  elements([el()]);
  t.true(element.calledOnce);
});

test.serial('element 3', (t) => {
  elements([el(), el(), el()]);
  t.true(element.calledThrice);
});

test.serial('merge 0', (t) => {
  elements([]);
  t.true(merge.notCalled);
});

test.serial('merge 1', (t) => {
  elements([el()]);
  t.true(merge.calledOnce);
});

test.serial('merge 3', (t) => {
  elements([el(), el(), el()]);
  t.true(merge.calledThrice);
});

test.serial('return', (t) => {
  const result = elements([]);
  t.is(typeof result, 'object');
});
