const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addInto(this.rootNode, data);

    function addInto(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (data < node.data) {
        node.left = addInto(node.left, data);
      } else if (data > node.data) {
        node.right = addInto(node.right, data);
      }

      return node;
    }
  }

  find(data) {
    let current = this.rootNode;

    while (current) {
      if (data === current.data) {
        return current;
      }

      current = data < current.data ? current.left : current.right;
    }

    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    this.rootNode = removeFrom(this.rootNode, data);

    function removeFrom(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeFrom(node.left, data);
        return node;
      }

      if (data > node.data) {
        node.right = removeFrom(node.right, data);
        return node;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }

      node.data = minFromRight.data;
      node.right = removeFrom(node.right, minFromRight.data);

      return node;
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let current = this.rootNode;
    while (current.left) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let current = this.rootNode;
    while (current.right) {
      current = current.right;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};
