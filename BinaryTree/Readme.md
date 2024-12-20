

Binary Tree Implementation
==========================

Overview
--------

This is a JavaScript implementation of a binary tree data structure. It includes methods for inserting values, performing traversals (inorder, preorder, postorder), searching for values, and deleting nodes.

### Classes

#### CustomNode

Represents a node in the binary tree.

*   `value`: The value stored in the node.
*   `left`: The left child of the node.
*   `right`: The right child of the node.

#### BinaryTree

Represents the binary tree itself.

*   `root`: The root node of the binary tree.

### Methods

#### BinaryTree

*   `insert(value)`: Inserts a new value into the binary tree.
*   `inorderTraversal()`: Performs an inorder traversal of the binary tree.
*   `preorderTraversal()`: Performs a preorder traversal of the binary tree.
*   `postorderTraversal()`: Performs a postorder traversal of the binary tree.
*   `search(value)`: Searches for a value in the binary tree.
*   `deleteNode(value)`: Deletes a node from the binary tree.

### Helper Methods

#### BinaryTree

*   `insertNode(currentNode, newNode)`: Helper method for inserting a new node into the binary tree.
*   `traverseInorder(node)`: Helper method for performing an inorder traversal of the binary tree.
*   `traversePreorder(node)`: Helper method for performing a preorder traversal of the binary tree.
*   `traversePostorder(node)`: Helper method for performing a postorder traversal of the binary tree.
*   `searchNode(node, value)`: Helper method for searching for a value in the binary tree.
*   `deleteNodeRecursive(node, value)`: Helper method for deleting a node from the binary tree.
*   `getMinValueNode(node)`: Helper method for finding the minimum value node in a subtree.

### Example Usage

```javascript
// Create a new binary tree
let binaryTree = new BinaryTree();

// Insert values into the binary tree
binaryTree.insert(10);
binaryTree.insert(20);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(25);

// Perform traversals
console.log("Inorder Traversal:");
binaryTree.inorderTraversal();

console.log("Preorder Traversal:");
binaryTree.preorderTraversal();

console.log("Postorder Traversal:");
binaryTree.postorderTraversal();

// Search for a value
console.log("Search 15:");
console.log(binaryTree.search(15));

// Delete a node
console.log("Delete 10:");
binaryTree.deleteNode(10);
console.log("Inorder Traversal after deletion:");
binaryTree.inorderTraversal();
```

This implementation provides a basic binary tree data structure with methods for common operations. The example usage demonstrates how to create a binary tree, insert values, perform traversals, search for values, and delete nodes.