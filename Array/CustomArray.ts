class CustomArray {
  length: number;
  data: { [key: number]: any };
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index: number): any {
    return this.data[index];
  }

  push(value: any): number {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }

  pop(): {} {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index: number): {} {
    const deletedItem = this.data[index];
    this.shiftIndex(index);
    return deletedItem;
  }

  shiftIndex(index: number) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const customArray = new CustomArray();
customArray.push("Prakhar");
customArray.push("Srivastava");
console.log(customArray);
customArray.pop();
console.log(customArray);
customArray.push("Hi");
customArray.push("I");
customArray.push("am");
customArray.push("developer");
console.log(customArray);
customArray.delete(2);
console.log(customArray);
