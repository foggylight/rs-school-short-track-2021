/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

const ListNode = require('../extensions/list-node');

function removeKFromList(list, k) {
  const arr = [];
  let curList = list;
  while (curList) {
    arr.push(curList.value);
    curList = curList.next;
  }

  const res = arr.filter((item) => item !== k).reverse();

  return res.reduce((acc, cur) => {
    if (acc !== null) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }
    return new ListNode(cur);
  }, null);
}

module.exports = removeKFromList;
