# CustomLinkedList Class

CustomLinkedList is a TypeScript class representing a singly linked list implementation with various methods for manipulation and traversal.

## Class Properties

- `head`: Represents the first node of the linked list.
- `tail`: Represents the last node of the linked list.
- `length`: Represents the number of nodes in the linked list.

## Constructor

### `constructor(value: any)`

- Initializes a new linked list with a single node containing the given value.
- Parameters:
  - `value`: The value to be stored in the initial node.

## Methods

### `append(value: any): CustomLinkedList`

- Appends a new node with the given value to the end of the linked list.
- Parameters:
  - `value`: The value to be appended to the list.
- Returns:
  - The modified CustomLinkedList instance.

### `prepend(value: any): CustomLinkedList`

- Prepends a new node with the given value to the beginning of the linked list.
- Parameters:
  - `value`: The value to be prepended to the list.
- Returns:
  - The modified CustomLinkedList instance.

### `printList(): void`

- Prints the values of all nodes in the linked list.

### `insert(index: number, value: any): void`

- Inserts a new node with the given value at the specified index in the linked list.
- Parameters:
  - `index`: The index at which to insert the new node.
  - `value`: The value to be inserted into the list.

### `remove(index: number): void`

- Removes the node at the specified index from the linked list.
- Parameters:
  - `index`: The index of the node to be removed.

### `reverse(): void`

- Reverses the order of nodes in the linked list.

### `traverseToIndex(index: number): any`

- Private method used internally to traverse the list to the specified index.
- Parameters:
  - `index`: The index to traverse to.
- Returns:
  - The node at the specified index.

## Example Usage

```typescript
let customLinkedList = new CustomLinkedList(10);
customLinkedList.append(20);
customLinkedList.append(30);
customLinkedList.prepend(100);

customLinkedList.printList(); // Output: [100, 10, 20, 30]

customLinkedList.insert(2, 50); // Inserts 50 at index 2
customLinkedList.remove(1); // Removes node at index 1

customLinkedList.reverse(); // Reverses the list
```

# Custom Doubly Linked List

This class implements a custom doubly linked list data structure in TypeScript.

## Constructor

### `constructor(value: any)`

- Initializes the linked list with a single node containing the specified value.

## Methods

### `append(value: any): CustomDoublyLinkedList`

- Appends a new node with the specified value to the end of the linked list.

### `prepend(value: any): CustomDoublyLinkedList`

- Prepends a new node with the specified value to the beginning of the linked list.

### `printList(): void`

- Prints the values of all nodes in the linked list.

### `traverseToIndex(index: number): ListNode | null`

- Traverses the linked list to the specified index and returns the node at that index.

### `insert(index: number, value: any): void`

- Inserts a new node with the specified value at the given index in the linked list.

### `remove(index: number): ListNode | null`

- Removes the node at the specified index from the linked list.

## Properties

- `head: ListNode | null`: Points to the first node of the linked list.
- `tail: ListNode | null`: Points to the last node of the linked list.
- `length: number`: Represents the number of nodes in the linked list.

## Example Usage

```typescript
let customDoublyLinkedList = new CustomDoublyLinkedList(10);
customDoublyLinkedList.append(20);
customDoublyLinkedList.append(30);
customDoublyLinkedList.append(40);
customDoublyLinkedList.printList(); // Output: [10, 20, 30, 40]
customDoublyLinkedList.remove(3);
customDoublyLinkedList.printList(); // Output: [10, 20, 30]
```