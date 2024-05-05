class CustomLinkedList {
  head: { value: any; next: any } | null;
  tail: any;
  length: number;

  constructor(value: any) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value: any): any {
    const newNode = {
      value,
      next: null,
    };
    /* 
==================first attemp==============================

    // let currentNode = this.head
    // while(currentNode.next !== null){
    //     currentNode = currentNode.next
    // }
    // currentNode.next = newNode
    // this.length++;
    // return this;

============================================================    
*/

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value: any) {
    const newNode:  { value: any; next: any } | null  = {
      value,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  printList() {
    let nodeArray: any[] = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      nodeArray.push(currentNode.value);
      // currentNode.next++
      currentNode = currentNode.next;
    }
    console.log(nodeArray);
  }

  insert(index: number, value: any) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode :  { value: any; next: any } | null = {
      value: value,
      next: null,
    };

    /* 
==================first attemp==============================


    let currentNode = this.head;
    let previousNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    newNode.next = currentNode;
    previousNode.next = newNode;
    this.length++;

============================================================    
*/
    const leaderNode = this.traverseToIndex(index - 1);
    console.log(leaderNode);
    const holidingPointer = leaderNode!.next;
    console.log(holidingPointer);
    leaderNode!.next = newNode;
    newNode.next = holidingPointer;
    this.length++;

    return this.printList();
  }

  traverseToIndex(index: number) {
    // let currentNode = this.head;
    // for(let i=0; i< index; i++){
    //   currentNode = currentNode.next
    // }
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode!.next;
      counter++;
    }
    return currentNode;
  }

  remove(index: number) {
    let leaderNode = this.traverseToIndex(index - 1);
    let unwantedNode = leaderNode!.next;
    leaderNode!.next = unwantedNode.next;
    this.length--;

    return this.printList();
  }

  reverse() {
    /*
    // 10 -> 20 -> 30-> 40-> null
 reverseLinkedList(head):
    previousNode = null ->  null 10
    currentNode = head -> 10  -> null 20
    nextNode = null -> null  20

    while currentNode is not null:
        nextNode = currentNode.next
        currentNode.next = previousNode
        previousNode = currentNode
        currentNode = nextNode

    head = previousNode
    return head
    */

    let previousNode: { value: any; next: any } | null = null;
    let currentNode = this.head;
    let nextNode: { value: any; next: any } | null = null;

    while (currentNode !== null) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    this.head = previousNode;
    return this.printList();
  }
}

let customLinkedList = new CustomLinkedList(10);
customLinkedList.append(20);
customLinkedList.append(30);
// console.log(customLinkedList);
// customLinkedList.prepend(100);
// console.log(customLinkedList);
customLinkedList.printList();
customLinkedList.insert(2, 50);
customLinkedList.remove(1)
customLinkedList.reverse()
