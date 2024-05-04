class CustomHashTable {
  data: any[] = [];

  constructor(size: number) {
    this.data = new Array(size);
  }

  _hash(key: any) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key: any, value: any): any[] {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    // console.log(this.data[address])
    return this.data;
  }

  get(key: any) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
      return undefined;
    }
  }

  keys(): any[] {
    let keys: any[] = []
    for(let i=0; i< this.data.length; i++){
        if(this.data[i] !== undefined) {
            keys.push(this.data[i][0][0])
        }
    }
    return keys
  }
}

const myCustomHashTable = new CustomHashTable(50);
myCustomHashTable.set("grapes", 1000);
myCustomHashTable.set("apples", 500);
console.log(myCustomHashTable.get("grapes"));
console.log(myCustomHashTable.get("grapessssssssss"));
console.log(myCustomHashTable);
console.log(myCustomHashTable.keys())

