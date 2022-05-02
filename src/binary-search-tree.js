const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.mRoot = null;
  }

  root() {
    return this.mRoot;
  }

  add(data) {
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
    
      if (node.data === data) {
        return node;
      }
    
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
    
      return node;
    }

    this.mRoot = addWithin(this.mRoot, data);
  }

  has(data) {
    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }
      return data < node.data ?
      searchWithin(node.left, data) :
      searchWithin(node.right, data)
    }

    return searchWithin(this.mRoot, data);
  }

  find(data) {
    function searchWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }
      return data < node.data ?
      searchWithin(node.left, data) :
      searchWithin(node.right, data)
    }

    return searchWithin(this.mRoot, data);
  }

  remove(data) {
    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        
        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }

    this.mRoot = removeNode(this.mRoot, data);
  }

  min() {
    if (!this.root) {
      return;
    }

    let node = this.mRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.mRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};