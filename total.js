function points(games) {
    let totalPoints = 0;
    
    for (let i=0;i < games.length;i++) {
      let scores = games[i].split(":");
      let x = Number(scores[0]);
      let y = Number(scores[1]);
      
      if (x>y) {
        totalPoints += 3;     
      }else if(x ===y) {
        totalPoints += 1;
      }       
    }
    return totalPoints;
}

let games = ["3:3","0:4","4:2","4:4","4:3","1:2","4:4","4:1","4:1","3:1"];
console.log (points(games));