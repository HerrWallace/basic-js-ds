const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(value) {
 *     this.value = value;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  if (l.value === k) {
    l = l.next;
  }

  let currentNode = l;
  let prevNode = l;

  while (currentNode.next) {
    if (currentNode.value === k) {
      prevNode.next = currentNode.next;
      currentNode = prevNode.next;
    } else {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  if (currentNode.value === k && currentNode.next === null) {
    prevNode.next = null;
  }

  return l;
}

module.exports = {
  removeKFromList,
}
