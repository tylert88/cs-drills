'use strict';

const expect = require('chai').expect; // jshint ignore:line
const DynamicArray = require('../../src/arrays/dynamic_array');

describe('DynamicArray#Push', () => {
  it('Returns an array that initializes a fixed array with double the length', () => {
    const da = new DynamicArray(3);

    expect(da.length).to.be.equal(3);
    expect(da.array.length).to.be.equal(6);
  });

  it('Updates the array with length + 1', () => {
    const da = new DynamicArray(3);

    da.set(0, 1);   // Set value 1 at index 0
    da.set(1, 2);   // Set value 2 at index 1
    da.set(2, 3);   // Set value 3 at index 2

    da.push(4);

    expect(da.length).to.be.equal(4);
  });

  it('Updates the array with item added', () => {
    const da = new DynamicArray(3);

    da.set(0, 1);   // Set value 1 at index 0
    da.set(1, 2);   // Set value 2 at index 1
    da.set(2, 3);   // Set value 3 at index 2

    da.push(4);

    expect(da.get(3)).to.be.equal(4);
  });
});

describe('DynamicArray#Pop', () => {
  it('Updates the array with length - 1', () => {
    const da = new DynamicArray(3);

    da.set(0, 1);   // Set value 1 at index 0
    da.set(1, 2);   // Set value 2 at index 1
    da.set(2, 3);   // Set value 3 at index 2

    da.pop();

    expect(da.length).to.be.equal(2);
  });

  it('Returns an array item removed', () => {
    const da = new DynamicArray(3);

    da.set(0, 1);   // Set value 1 at index 0
    da.set(1, 2);   // Set value 2 at index 1
    da.set(2, 3);   // Set value 3 at index 2

    da.pop();

    expect(da.get(1)).to.be.equal(2);
    expect(da.array.get(2)).to.be.equal(undefined);
  });
});

describe('DynamicArray#Del', () => {
  it('Updates the array with length - 1', () => {
    const da = new DynamicArray(3);

    da.set(0, 1);   // Set value 1 at index 0
    da.set(1, 2);   // Set value 2 at index 1
    da.set(2, 3);   // Set value 3 at index 2

    da.del(1);

    expect(da.length).to.be.equal(2);
  });

  it('Returns an array item removed', () => {
    const da = new DynamicArray(3);

    da.set(0, 1);   // Set value 1 at index 0
    da.set(1, 2);   // Set value 2 at index 1
    da.set(2, 3);   // Set value 3 at index 2

    da.del(1);

    expect(da.get(1)).to.be.equal(3);
    expect(da.array.get(2)).to.be.equal(undefined);
  });
});
