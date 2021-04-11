const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.list = new ListNode(null);
    this.arr = [];
  }

  listToArr() {
    let curList = this.list;
    const res = [];
    while (curList) {
      if (curList.value) {
        res.push(curList.value);
      }
      curList = curList.next;
    }
    this.arr = res;
  }

  arrToList() {
    this.list = this.arr.reduceRight((acc, cur) => {
      if (acc !== null) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }
      return new ListNode(cur);
    }, null);
  }

  get size() {
    this.listToArr();
    return this.arr.length;
  }

  enqueue(element) {
    const newList = new ListNode(element);
    newList.next = this.list;
    this.list = newList;
  }

  dequeue() {
    this.listToArr();
    const val = this.arr.pop();
    this.arrToList();
    return val;
  }
}

module.exports = Queue;
