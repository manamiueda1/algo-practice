// twoSum Solution LeetCode
// https://leetcode.com/problems/two-sum/

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


  


// twoNumberSum Solution AlgoExpert
// https://www.algoexpert.io/questions/Two%20Number%20Sum