class CustomDoublyLinkedList {
  head: { value: any; prev: any; next: any } | null;
  tail: { value: any; prev: any; next: any } | null;
  length: number;
  constructor(value: any) {
    this.head = {
      value,
      prev: null,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value: any) {
    let newNode: { value: any; prev: any; next: any } | null = {
      value,
      prev: null,
      next: null,
    };

    if (this.head === null) {
      newNode = this.head;
    }
    /* Without using tail approach 
        let currentNode = this.head
        while( currentNode?.next !== null ){
            currentNode = currentNode!.next
        }
        currentNode!.next = newNode;
        newNode!.prev = currentNode;
    */

    /* Using tail approach */
    this.tail!.next = newNode;
    newNode!.prev = this.tail;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value: any) {
    const newNode: { value: any; prev: any; next: any } | null = {
      value,
      prev: null,
      next: null,
    };
    if (this.head === null) {
      this.head = newNode;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  printList() {
    let nodeArray: number[] = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      nodeArray.push(currentNode?.value);
      currentNode = currentNode?.next;
    }
    console.log(nodeArray);
  }

  traverseToIndex(index: number) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode?.next;
      counter++;
    }
    return currentNode;
  }

  insert(index: number, value: any) {
    if (index >= this.length) {
      return this.append(value);
    }

    let newNode: { value: any; prev: any; next: any } | null = {
      value,
      prev: null,
      next: null,
    };

    let leaderNode = this.traverseToIndex(index - 1);
    let aheadNode = leaderNode?.next;

    leaderNode!.next = newNode;
    newNode.prev = leaderNode;
    aheadNode.prev = newNode;
    newNode.next = aheadNode;

    this.length++;

    return this.printList();
  }

  remove(index:number){
    let currentNode = this.traverseToIndex(index-1)
    console.log(currentNode?.value)
    let previousNode = currentNode?.prev;
    previousNode.next = currentNode?.next;
    currentNode!.next.prev = currentNode;
    this.length--;

    return currentNode;
  }
}

let customDoublyLinkedList = new CustomDoublyLinkedList(10);
customDoublyLinkedList.append(20);
customDoublyLinkedList.append(30);
customDoublyLinkedList.append(40);
// customDoublyLinkedList.prepend(5);
// console.log(customDoublyLinkedList);
customDoublyLinkedList.printList();
customDoublyLinkedList.traverseToIndex(3);
// console.log(customDoublyLinkedList.traverseToIndex(2));
// customDoublyLinkedList.insert(3, 77);
// console.log(customDoublyLinkedList.traverseToIndex(2)?.value)
// customDoublyLinkedList.printList();
// customDoublyLinkedList.insert(2, 177);
customDoublyLinkedList.remove(3)
customDoublyLinkedList.printList()
