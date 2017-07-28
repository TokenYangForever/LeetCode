/**
 * Initialize your data structure here.
 * 这一版的执行速度快了很多，原型上定义一个数组用于getrandom，一个对象用于查找是否存；
 * 删除某一项的时候，直接数组pop()出最后一项替换掉需删除的元素位置，然后delete对象上的属性；
 * getRandom里用math.floor()比parseInt()更快
 */
var RandomizedSet = function() {
    this.a = []
    this.o = {}
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.o[val]) {
        return false
    }
    let n = {val: val, index: this.a.length}
    this.a.push(n)
    this.o[val] = n
    return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    let old = this.o[val]
    if (!old) {
        return false
    }
    let oi = old.index
    if (oi === (this.a.length - 1)) {
        this.a.pop()
    } else {
        this.a[oi] = this.a.pop()
        this.a[oi].index = oi
    }
    delete this.o[val]
    return true
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.a[Math.floor(Math.random() * this.a.length)].val
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
