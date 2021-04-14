function tournamentWinner(competitions, results) {
    // Write your code here.
      let hash = new Map()
      let champ = [null, 0]
      
      for (let i = 0; i < competitions.length; i++){
          let loser = results[i]
          let currComp = competitions[i]
          if (loser === 0){
              let winningTeam = currComp[1] 
              if(hash[winningTeam] === undefined){
                  hash[winningTeam] = 1
              } else {
                  hash[winningTeam]++
              }
          } else {
              let winningTeam = currComp[0]
              if(hash[winningTeam] === undefined){
                  hash[winningTeam] = 1
              } else {
                  hash[winningTeam]++
              }
          }
      }
      for (let team in hash){
          if (hash[team] > champ[1]){
              champ[1] = hash[team] 
              champ[0] = team
          }
      }
    return champ[0];
  }