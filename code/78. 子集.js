var subsets = function(nums) {
    let result = [[]]
    for (let item of nums) {
		
        result = [...result, ...result.map(i => i.concat(item))]
    }
    return result
};
