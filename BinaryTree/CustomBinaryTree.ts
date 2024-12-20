// Define a class to represent a node in the binary tree
class CustomNode {
    // The value stored in the node
    value: any;
    // The left child of the node
    left: CustomNode | null;
    // The right child of the node
    right: CustomNode | null;
  
    // Constructor to initialize the node with a value
    constructor(value: any) {
      this.value = value;
      // Initialize the left and right children to null
      this.left = null;
      this.right = null;
    }
  }
  
  // Define a class to represent the binary tree
  class BinaryTree {
    // The root node of the binary tree
    root: CustomNode | null;
  
    // Constructor to initialize the binary tree
    constructor() {
      // Initialize the root node to null
      this.root = null;
    }
  
    // Method to insert a new value into the binary tree
    insert(value: any) {
      // Create a new node with the given value
      const newNode = new CustomNode(value);
      // If the binary tree is empty, set the new node as the root
      if (this.root === null) {
        this.root = newNode;
      } else {
        // Otherwise, call the helper method to insert the new node
        this.insertNode(this.root, newNode);
      }
      // Return the binary tree to allow method chaining
      return this;
    }
  
    // Helper method to insert a new node into the binary tree
    insertNode(currentNode: CustomNode, newNode: CustomNode) {
      // If the new node's value is less than the current node's value, go left
      if (newNode.value < currentNode.value) {
        // If the left child is null, set the new node as the left child
        if (currentNode.left === null) {
          currentNode.left = newNode;
        } else {
          // Otherwise, recursively call the helper method on the left child
          this.insertNode(currentNode.left, newNode);
        }
      } else {
        // If the new node's value is greater than or equal to the current node's value, go right
        // If the right child is null, set the new node as the right child
        if (currentNode.right === null) {
          currentNode.right = newNode;
        } else {
          // Otherwise, recursively call the helper method on the right child
          this.insertNode(currentNode.right, newNode);
        }
      }
    }
  
    // Method to perform an in-order traversal of the binary tree
    inorderTraversal() {
      // Call the helper method to start the traversal from the root node
      this.traverseInorder(this.root);
    }
  
    // Helper method to perform an in-order traversal of the binary tree
    traverseInorder(node: CustomNode | null) {
      // If the node is null, return immediately
      if (node !== null) {
        // Recursively traverse the left subtree
        this.traverseInorder(node.left);
        // Print the value of the current node
        console.log(node.value);
        // Recursively traverse the right subtree
        this.traverseInorder(node.right);
      }
    }
  
    // Method to perform a pre-order traversal of the binary tree
    preorderTraversal() {
      // Call the helper method to start the traversal from the root node
      this.traversePreorder(this.root);
    }
  
    // Helper method to perform a pre-order traversal of the binary tree
    traversePreorder(node: CustomNode | null) {
      // If the node is null, return immediately
      if (node !== null) {
        // Print the value of the current node
        console.log(node.value);
        // Recursively traverse the left subtree
        this.traversePreorder(node.left);
        // Recursively traverse the right subtree
        this.traversePreorder(node.right);
      }
    }
  
    // Method to perform a post-order traversal of the binary tree
    postorderTraversal() {
      // Call the helper method to start the traversal from the root node
      this.traversePostorder(this.root);
    }
  
    // Helper method to perform a post-order traversal of the binary tree
    traversePostorder(node: CustomNode | null) {
      // If the node is null, return immediately
      if (node !== null) {
        // Recursively traverse the left subtree
        this.traversePostorder(node.left);
        // Recursively traverse the right subtree
        this.traversePostorder(node.right);
        // Print the value of the current node
        console.log(node.value);
      }
    }
  
    // Method to search for a value in the binary tree
    search(value: any) {
      // Call the helper method to start the search from the root node
      return this.searchNode(this.root, value);
    }
  
    // Helper method to search for a value in the binary tree
   // Helper method to search for a value in the binary tree
searchNode(node: CustomNode | null, value: any) {
    // If the node is null, the value is not found
    if (node === null) {
      return false;
    }
    // If the value matches the current node's value, return true
    if (value === node.value) {
      return true;
    }
    // If the value is less than the current node's value, search the left subtree
    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      // Otherwise, search the right subtree
      return this.searchNode(node.right, value);
    }
  }
  
  // Method to delete a node from the binary tree
  deleteNode(value: any) {
    // Call the helper method to start the deletion from the root node
    this.root = this.deleteNodeRecursive(this.root, value);
  }
  
  // Helper method to delete a node from the binary tree
  deleteNodeRecursive(node: CustomNode | null, value: any) {
    // If the node is null, the value is not found
    if (node === null) {
      return node;
    }
    // If the value is less than the current node's value, delete from the left subtree
    if (value < node.value) {
      node.left = this.deleteNodeRecursive(node.left, value);
    } else if (value > node.value) {
      // If the value is greater than the current node's value, delete from the right subtree
      node.right = this.deleteNodeRecursive(node.right, value);
    } else {
      // If the value matches the current node's value, delete the node
      // If the node has no children, simply return null
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      // If the node has two children, find the minimum value in the right subtree
      const tempNode = this.getMinValueNode(node.right);
      // Replace the current node's value with the minimum value
      node.value = tempNode.value;
      // Delete the minimum value node from the right subtree
      node.right = this.deleteNodeRecursive(node.right, tempNode.value);
    }
    return node;
  }
  
  // Helper method to find the minimum value node in a subtree
  getMinValueNode(node: CustomNode) {
    // Initialize the current node to the given node
    let currentNode = node;
    // Traverse the left subtree until the left child is null
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    // Return the minimum value node
    return currentNode;
  }
  }
  
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