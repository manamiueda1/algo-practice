// AlgoExpert: https://www.algoexpert.io/questions/Sorted%20Squared%20Array


function sortedSquaredArray(array) {
    // Write your code here.
      return array.map(ele => ele*ele).sort((a, b) => a-b)
    
  }
  