class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//       this.val = val === undefined ? 0 : val;
//       this.next = next === undefined ? null : next;
//     }
//   }
  
  class CyclinLinkedList {
    head: ListNode | null;
    constructor() {
      this.head = null;
    }
  
    insert(val: number) {
      const newNode = new ListNode(val);
      if (!this.head) {
        this.head = newNode;
        this.head.next = this.head; // Pointing to itself since it's the only node
      } else {
        let current: ListNode | null = this.head;
        while (current!.next !== this.head) {
          current = current!.next;
        }
        current!.next = newNode;
        newNode.next = this.head; // Creating the cycle
      }
    }
  
    print() {
      if (!this.head) {
        console.log("Empty list");
        return;
      }
      let current = this.head;
      do {
        console.log(current.val);
        current = current.next!;
      } while (current !== this.head);
    }
  }
  
  // Example usage:
  const cyclinList = new CyclinLinkedList();
  cyclinList.insert(1);
  cyclinList.insert(2);
  cyclinList.insert(3);
  cyclinList.insert(4);
  cyclinList.print(); // Output: 1, 2, 3 (in a cycle)
  

function detectCycle(head: ListNode | null): ListNode | null {
    let slow : ListNode | null = head
    let fast: ListNode | null = head

    while(fast && !fast.next == null){
        slow = slow!.next
        fast = fast.next!.next

        if(slow === fast){
            return slow
        }
    }
    return null
   };


detectCycle(cyclinList)
