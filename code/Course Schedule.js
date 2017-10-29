/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let arr = new Array(numCourses)
    let sum = numCourses
    for (let i = 0; i < numCourses; i++) {
        arr[i] = new Set()
    }
    for (let i = 0; i < prerequisites.length; i++) {
        let temp = prerequisites[i]
        arr[temp[0]].add(temp[1])
    }
	let i = 0; 
	while(i < arr.length) {
    	if (arr[i] && arr[i].size === 0) {
    		arr[i] = null
            sum--
    		for (let j in arr) {
    			if(arr[j] && arr[j].has(i)){
    				arr[j].delete(i)
    			}
    		}
    		i = 0
    	} else {
    		i++
    	}
    }
    return !(sum > 0)
};
