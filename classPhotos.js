function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
      redShirtHeights.sort((a,b) => b-a) 
      blueShirtHeights.sort((a,b) => b-a)
      let firstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE'
    for (let i = 0; i < redShirtHeights.length; i++){
          console.log(i)
          if(firstRow === 'RED'){
              if (redShirtHeights[i] >= blueShirtHeights[i]){
                  return false
              } 
          }
          else if (blueShirtHeights[i] >= redShirtHeights[i]){
                  return false
          } 
      }
      return true;
  }