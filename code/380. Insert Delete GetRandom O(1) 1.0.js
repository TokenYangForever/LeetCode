/**
 * Initialize your data structure here.
 * 这种写法看上去比较简洁，构造函数的属性也就一个ele，但是运行起来速度较慢，速度快的版本参照本题解法2.0
 */
var RandomizedSet = function() {
    this.ele = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.ele.includes(val)) {
        return false
    } else {
        this.ele.push(val)
        return true
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    let i = this.ele.indexOf(val)
    if (i == -1) {
        return false
    } else {
        this.ele.splice(this.ele.indexOf(val), 1)
        return true
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.ele[parseInt(Math.random()*this.ele.length)]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
