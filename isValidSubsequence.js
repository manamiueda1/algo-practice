//  AlgoExpert: https://www.algoexpert.io/questions/Validate%20Subsequence

function isValidSubsequence(array, sequence) {
    // Write your code here.
      let arrayIdx = 0;
      let seqIdx = 0;
      
      while (arrayIdx < array.length && seqIdx < sequence.length){
          if (array[arrayIdx] === sequence[seqIdx]) {
              seqIdx++
          } 
          arrayIdx++
      }
      if (seqIdx === sequence.length){
          return true
      } else {
          return false
      }
  }
  