class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  getIndex() {
    return this.data;
  }
  getByIndex(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return item;
  }
  populate(indexes) {
    for (let i = 0; i < indexes; i++) {
      this.data[i] = i;
      this.length++;
    }
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      // will put the next item in the current index
      this.data[i] = this.data[i + 1];
      // will delete the last item because we don't touch on it so, we have duplicated the last item
      delete this.data[this.length - 1];
      // after deleted the last item, we need to decrease the length
      this.length--;
    }
  }
  filter(item) {
    for (let i = 0; i < this.length; i++) {
      // verify if the item is in the index i of the array
      if (this.data[i] === item) {
        return this.data[i];
      }
    }
    // if the item is not in the array, return a message
    return "Not found";
  }
  unshift(item) {
    // iterates the array from the end to the start, moving the items to the right
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    // add the item in the first index
    this.data[0] = item;
    this.length++;
    return this.data;
  }
}

newArray = new MyArray();

const ok = newArray.getIndex();
newArray.populate(10);
const filtered = newArray.filter(3);
const deleted = newArray.delete(3);
const found = newArray.getByIndex(4);
const unshifted = newArray.unshift(100);
console.log("unshifted", unshifted);
