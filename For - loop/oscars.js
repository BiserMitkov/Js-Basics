function oscars(input) {

    let actorOrActressName = input[0];
    let startingPoints = Number(input[1]);
    let numberJudges = Number(input[2]);
  
    let pointsForNominee = 1250.5;
    let currentJudge = "";
    let currentPoints = 0;
  
    for (let i = 3; i < input.length; i++) {
      currentJudge = input[i++];
      currentPoints = input[i];
      startingPoints += currentJudge.length * currentPoints / 2;
      if (startingPoints > pointsForNominee) {
        console.log(`Congratulations, ${actorOrActressName} got a nominee for leading role with ${startingPoints.toFixed(1)}!`); break;
      }
  
  
    }
    if (startingPoints < pointsForNominee) {
      console.log(`Sorry, ${actorOrActressName} you need ${(pointsForNominee - startingPoints).toFixed(1)} more!`);
    }
  
  
  }