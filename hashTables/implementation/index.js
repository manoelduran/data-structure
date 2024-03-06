class MyHashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  // O(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // get the carachter code for each index from key and multiply by the index
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  // O(1)
  set(key, value) {
    let address = this._hash(key);
    // to avoid collision, we need to verify if the address is empty
    if (!this.data[address]) {
      // we create an array in the index address
      this.data[address] = [];
      // we push the key and value in the array
      this.data[address].push([key, value]);
    }
    // if the address is not empty, we push the key and value in the array
    this.data[address].push([key, value]);
    return this.data;
  }

  // O(1) if there is no collision
  get(key) {
    let address = this._hash(key);
    // we get the array in the index address
    const currentBucket = this.data[address];
    // if the array exists
    if (currentBucket) {
      // we iterate the array
      for (let i = 0; i < currentBucket.length; i++) {
        // if the key is equal to the key in the index i of the array
        if (currentBucket[i][0] === key) {
          // return the value
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0]);
        }
      }
    }
    return result;
  }
}

const myHashTable = new MyHashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
const result = myHashTable.get("apples");
console.log("result", result, myHashTable.data);
