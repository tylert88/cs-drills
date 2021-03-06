var expect = require('chai').expect;
const Queue = require('../../src/queues/queue');

describe('#enqueue', () => {
  it('Properly enqueues an item', () => {
    const queue = new Queue();

    queue.enqueue(1);
    expect(queue._head).to.deep.equal({ value: 1, next: null});
    expect(queue._tail).to.deep.equal({ value: 1, next: null});
    expect(queue.length).to.be.equal(1);

    queue.enqueue(2);
    expect(queue._head).to.deep.equal({
      value: 1,
      next: {
        value: 2,
        next: null
      }
    });
    expect(queue._tail).to.deep.equal({ value: 2, next: null});
    expect(queue.length).to.be.equal(2);
  });
});

describe('#peek', () => {
  it('Properly peeks an item', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    let value = queue.peek();

    expect(value).to.be.equal(1);
    expect(queue._head).to.deep.equal({
      value: 1,
      next: {
        value: 2,
        next: null
      }
    });
    expect(queue.length).to.be.equal(2);
  });
});

describe('#dequeue', () => {
  it('Properly dequeues an item', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    let value = queue.dequeue();

    expect(value).to.be.equal(1);
    expect(queue._head).to.deep.equal({ value: 2, next: null});
    expect(queue._tail).to.deep.equal({ value: 2, next: null});
    expect(queue.length).to.be.equal(1);

    value = queue.dequeue();

    expect(value).to.be.equal(2);
    expect(queue._head).to.deep.equal(null);
    expect(queue._tail).to.deep.equal(null);
    expect(queue.length).to.be.equal(0);
  });
});
