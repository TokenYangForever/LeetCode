/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let result = new Array()
    people.sort(
        (a,b) => { 
            if(a[0] == b[0]){
                return a[1] - b[1]
            } else {
                return b[0] - a[0]
            }})
    for (let p of people) {
            result.splice(p[1], 0, p)
        
    } 
    
    return result
};
