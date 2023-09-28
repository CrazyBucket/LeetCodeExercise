var RandomizedSet = function () {
  this.list = [];
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) {
    return false;
  } else {
    this.list.push(val);
    this.map.set(val, this.list.length - 1);
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) {
    return false;
  } else {
    let index = this.map.get(val);
    this.list.splice(index, 1);
    for (let i = index; i < this.list.length; i++) {
      this.map.set(this.list[i], i);
    }
    this.map.delete(val);
    return true;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  if (this.list.length === 0) {
    return undefined;
  }
  let randomNum = Math.floor(Math.random() * this.list.length);
  return this.list[randomNum];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
var obj = new RandomizedSet();
obj.insert(0);
obj.insert(1);
obj.remove(0);
obj.insert(2);
obj.remove(1);
console.log(obj.getRandom());
