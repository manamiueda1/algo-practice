// twoSum Solution LeetCode
// https://leetcode.com/problems/two-sum/

// brute force

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
    return []
};

// hash

var twoSum = function(nums, target) {
    let hash = {}
    
    for (let i = 0; i < nums.length; i++){
        let remainder = target - nums[i];
        if (remainder in hash){
            return [hash[remainder], i]
        } else {
            hash[nums[i]] = i
        }
    }
      return [];
  };



// twoNumberSum Solution AlgoExpert
// https://www.algoexpert.io/questions/Two%20Number%20Sum

// brute force O(N)^2
function twoNumberSum(array, targetSum) {
    // Write your code here.
      for (let i = 0; i < array.length; i++){
          for (let j = i+1; j < array.length; j++){
              if (array[i] + array[j] === targetSum){
                  return [array[i], array[j]]
              }
          }
      }
   return []
  }


//    Pointer Method
function twoNumberSum(array, targetSum) {
	let newArray = array.sort((a, b) => a-b)
	let pointer1 = 0
	let pointer2 = array.length-1
	
	while(pointer1 < pointer2 ){
		if (newArray[pointer1] + newArray[pointer2] === targetSum) {
			return [newArray[pointer1], newArray[pointer2]]
		}
		if(newArray[pointer1] + newArray[pointer2] > targetSum){
			pointer2--
		} 
		if (newArray[pointer1] + newArray[pointer2] < targetSum){
			pointer1++
		}
	}
	return []
}

// hash map
function twoNumberSum(array, targetSum) {
	let hash = new Map()
	
	for (let i = 0; i < array.length; i++){
		let ele = array[i];
		let remainder = targetSum - ele
		if (remainder in hash){
			return [ele, remainder]
		}
		 else {
			hash[ele] = true
		}
		
		console.log(hash)
	}
	return [];
}

