//look at the doorTimer code, make a new* doorTimer variable to gives breaks between the games
//look at the reset code so far and make a custom function for resetting. We will call this once the new* doorTimer var gets to 0.
//use placeholder text/graphics to break between the games.



let hasWon = false;
let hasLose = false;
let hp = 200;
let mid;
let ghostAttk;
let doorMiniGames = 0;

let doorTimer = 300; //1sec = 100millisec

function doorGameSetup() {}

function doorGame() {
  background(128, 138, 156);

  textAlign(CENTER);
  textSize(25);

  backLook();

  //text countdown
  if (doorTimer >= 0) {
    fill(255);
    text((doorTimer / 100).toFixed(0), 400, 200);
  }

  //if doorTimer is less than 0, start the game
  //if doorTimer is more than 0, disable game mechanics

  if (doorTimer < 0) {
    // Only update HP if the game is still running
    if (!keyIsPressed) {
      if (doorMiniGames == 0) {
        ghostAttacking(0.5, 0.1, 0.2, 0.5);
        //console.log(doorMiniGames);
      } else if (doorMiniGames == 1) {
        ghostAttacking(2, 1, 1.5, 2);
        //console.log(doorMiniGames);
      } else if (doorMiniGames == 2) {
        ghostAttacking(40, 20, 20, 40);
        //console.log(doorMiniGames);
      }
    }

    //console.log("hp =", int(hp), " ghstAttk - " + ghostAttk);

    //win/lose code
    if (hp >= 400) {
      //console.log(hp)
      // fear=2;
      //lose

      fill(0);
      rect(0, 0, 4000, 4000);
      fill(255);
      textAlign(CENTER);
      text("She came in but she disappeared? \n Was that a dream?", 400, 200);
      textSize(15);
      text("Go back to Map ↪", 710, 620);
    } else if (hp <= 0) {
      //win
      fill(0);
      rect(0, 0, 4000, 4000);
      fill(255);
      textAlign(CENTER);
      text(
        "Oh no, the ghost is trying to get in again, \n get ready for incoming attack!",
        400,
        200
      );
      textSize(15);
      text("Click here to continue ↪", 710, 620);
    }
  } else {
    doorTimer--;
  }

  //hp bar

  fill(67, 235, 52);
  noStroke();
  rect(200, 550, 400 - hp, 20);

  fill(235, 52, 52);
  rect(600 - hp, 550, 0 + hp, 20);

  noFill();
  stroke(0);
  strokeWeight(3);
  // rectMode(CENTER);

  rect(200, 550, 400, 20, 7);

  noStroke();

  // image(mid, 580 - hp, 480, 50, 50);

  //end();
  // winner();
  // lose();
}

function backLook() {
  if (hp < 350 && hp > 250) {
    image(gst4, 0, 0, width, height);
  } else if (hp < 251 && hp > 150) {
    image(gst3, 0, 0, width, height);
  } else if (hp < 151 && hp > 50) {
    image(gst2, 0, 0, width, height);
  } else if (hp < 51 && hp > 0) {
    image(gst1, 0, 0, width, height);
  } 
}

function ghostAttacking(attk1, attk2, attk3, attk4) {
  if (  hp > 250 &&hp < 350) {
    ghostAttk = attk1;
  } else if (hp < 251 && hp > 150) {
    ghostAttk = attk2;
  } else if (hp < 151 && hp > 50) {
    ghostAttk = attk3;
  } else if (hp < 51 && hp > 0) {
    ghostAttk = attk4;
  } else if (hp == 0) {
    hp = 0;
  } else {
    ghostAttk = 1;
  }

  if (hp > 400) {
    hp = 400;
  } else if (hp <= 0) {
    hp = 0;
  } else {
    hp += ghostAttk;
  }
}

function end() {
  // if (hasWon) return;
  // if (hasLose) return;

  if (hp >= 400) {
    hasLose = true;
    fill(0);
    rect(0, 0, 4000, 4000);
    fill(255);
    textAlign(CENTER);
    text(
      "She came in but she disappeared? Was that a dream?",
      50,
      50,
      100,
      100
    );
  } else if (hp <= 0) {
    text(
      "Oh no, the ghost is trying to get in again, get ready for incoming attack.",
      50,
      50,
      100,
      100
    );
    hasWon = true;
  }
}

function winner() {
  if (hasWon) return;

  if (hp == 0) {
    text("you did it", 50, 50, 100, 100);
    hasWon = true;
  }
  fill(0);
  rect(0, 0, 1000, 1000);
  text(255);
  text("You Win", 200, 300);
}
