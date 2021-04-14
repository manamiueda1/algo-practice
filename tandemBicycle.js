function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
      console.log(redShirtSpeeds.sort((a,b) => b-a))
      console.log(blueShirtSpeeds.sort((a,b) => a-b))
      
      // let redSort = redShirtSpeeds.sort((a,b) => a-b)
      // let blueSort = blueShirtSpeeds.sort((a,b) => a-b)
      let redSort
      let	blueSort = blueShirtSpeeds.sort((a,b) => a-b)
      let total = 0
      
      
      if (fastest){
          redSort = redShirtSpeeds.sort((a,b) => b-a)
      } else {
          redSort = redShirtSpeeds.sort((a,b) => a-b)
      }
      
      for (let i = 0; i < redSort.length; i++){
          total += Math.max(redSort[i], blueSort[i])
      }
      return total
  }
  