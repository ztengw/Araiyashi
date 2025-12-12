let chantTimer = 300; //1sec = 1000 milliseconds
// let winchant = false;
// let losechant = false;

let word1, word2, word3;

// original positions GPT
let word1StartX = 400,
  word1StartY = 340;
let word2StartX = 400,
  word2StartY = 420;
let word3StartX = 400,
  word3StartY = 500;

let word1X = word1StartX;
let word1Y = word1StartY;
let word1W = 100;
let word1H = 100;
let draggingWord1 = false;

let word2X = word2StartX;
let word2Y = word2StartY;
let word2W = 100;
let word2H = 100;
let draggingWord2 = false;

let word3X = word3StartX;
let word3Y = word3StartY;
let word3W = 100;
let word3H = 100;
let draggingWord3 = false;

let question = 0;
let chantState = "start"; //start, win, lose

let chantCountdown = 300;
let chantCountdownd = 1.3;
let addBonus = false; //ask GPT

let n11, n12, n13, n21, n22, n23, n31, n32, n33, n41, n42, n43;

let offsetX1 = 0,
  offsetY1 = 0,
  offsetX2 = 0,
  offsetY2 = 0,
  offsetX3 = 0,
  offsetY3 = 0;

function chantGameSetup() {
  imageMode(CENTER);
  textAlign(CENTER);
}

//////  END OF DRAW  //////

function chantGame() {
  // cursorAim.remove();
  background(128, 138, 156);
  textAlign(CENTER);

  if (chantState === "start") {
    if (question === 0) {
      if (chantTimer >= 0) {
        fill(220);
        rect(0, 0, 800, 650);
        fill(0);
        text((chantTimer / 100).toFixed(0), 400, 200);
        chantTimer--;
        textSize(15);
        text(
          "Tip: Drag the correct words to the following sentence before the time runs out.",
          400,
          100
        );
      }
      if (chantTimer < -0) {
        //gamestarts
        question = 1;
        stress();
      }
    }
    if (question === 1) {
      number1();
      stress();
    }
    if (question === 2) {
      number2();
      stress();
    }
    if (question === 3) {
      number3();
      stress();
    }
    if (question === 4) {
      number4();
      stress();
    }
    if (chantCountdown === 0) {
      chantLose();
    }
  }

  if (chantCountdown === 0) {
    chantLose();
  } else if (chantState === "win") {
    chantWin();
  } else if (chantState === "lose") {
    chantLose();
  }

  // console.log(mouseX, mouseY);
  // console.log("time:", chantCountdown);
}

function mouseChant() {
  if (abs(mouseX - word1X) < word1W / 2 && abs(mouseY - word1Y) < word1H / 2) {
    draggingWord1 = true;
    offsetX1 = mouseX - word1X;
    offsetY1 = mouseY - word1Y;
  } else if (
    abs(mouseX - word2X) < word2W / 2 &&
    abs(mouseY - word2Y) < word2H / 2
  ) {
    draggingWord2 = true;
    offsetX2 = mouseX - word2X;
    offsetY2 = mouseY - word2Y;
  } else if (
    abs(mouseX - word3X) < word3W / 2 &&
    abs(mouseY - word3Y) < word3H / 2
  ) {
    draggingWord3 = true;
    offsetX3 = mouseX - word3X;
    offsetY3 = mouseY - word3Y;
  }
}

function mouseDragChant() {
  if (draggingWord1) {
    word1X = mouseX - offsetX1;
    word1Y = mouseY - offsetY1;
  }
  if (draggingWord2) {
    word2X = mouseX - offsetX2;
    word2Y = mouseY - offsetY2;
  }
  if (draggingWord3) {
    word3X = mouseX - offsetX3;
    word3Y = mouseY - offsetY3;
  }
}

function mouseReleaseChant() {
  draggingWord1 = false;
  draggingWord2 = false;
  draggingWord3 = false;
}

function stress() {
  fill(66, 245, 102);
  if (chantCountdown >= 300 && chantCountdown <= 200) {
    fill(66, 245, 102);
  }
  if (chantCountdown <= 199) {
    fill(99, 245, 66);
  }
  if (chantCountdown <= 100) {
    fill(245, 245, 66);
  }
  if (chantCountdown <= 50) {
    fill(245, 66, 66);
  }
  chantCountdown -= chantCountdownd;
  if (chantCountdown < 0) chantCountdown = 0;
  rect(50, 570, chantCountdown * 2.3, 20);
}

function number1() {
  fill(0);

  textSize(25);
  text("霊宝天尊よ、我が身を安んじ護り給え。", 400, 70);
  textSize(35);
  text("霊宝天尊よ、                  を安ん\nじ護り給え。", 400, 180);

  rect(350, 180, 190, 2);
  imageMode(CENTER);
  image(n11, word1X, word1Y, width / 5, height / 10);
  image(n12, word2X, word2Y, width / 5, height / 10);
  image(n13, word3X, word3Y, width / 5, height / 10);

  if (
    word1X > 320 &&
    word1X < 530 &&
    word1Y > 120 &&
    word1Y < 210 &&
    draggingWord1 == false
  ) {
    question = 2;

    // return to original spot
    word1X = word1StartX;
    word1Y = word1StartY;
    word2X = word2StartX;
    word2Y = word2StartY;
    word3X = word3StartX;
    word3Y = word3StartY;

    chantCountdown = 300;
  }
}
//////  END OF NUMBER1  //////

function number2() {
  // if (!addBonus) {
  //   chantCountdown += 10;
  //   addBonus = true;
  // }
  fill(0);

  textSize(25);
  text("弟子の魂魄よ、五臓は玄冥に通ず。", 400, 70);

  textSize(35);
  text("                     、五臓は玄冥\nに通ず。", 400, 180);
  rect(110, 190, 270, 2);

  imageMode(CENTER);
  image(n21, word1X, word1Y, width / 3, height / 10);
  image(n22, word2X, word2Y, width / 3, height / 10);
  image(n23, word3X, word3Y, width / 3, height / 10);

  if (
    word3X > 60 &&
    word3X < 410 &&
    word3Y > 120 &&
    word3Y < 210 &&
    draggingWord3 == false
  ) {
    question = 3;

    // return to original spot
    word1X = word1StartX;
    word1Y = word1StartY;
    word2X = word2StartX;
    word2Y = word2StartY;
    word3X = word3StartX;
    word3Y = word3StartY;

    chantCountdown = 300;
  }
}
//////  END OF NUMBER2  //////

function number3() {
  // if (!addBonus) {
  //   chantCountdown += 10;
  //   addBonus = true;
  // }
  fill(0);

  textSize(25);
  text("青龍白虎、相対して列し；", 400, 70);

  textSize(35);
  text("                     、相対して列し；", 400, 180);
  rect(80, 190, 270, 2);

  imageMode(CENTER);
  image(n31, word1X, word1Y, width / 4, height / 10);
  image(n32, word2X, word2Y, width / 4, height / 10);
  image(n33, word3X, word3Y, width / 4, height / 10);

  if (
    word2X > 60 &&
    word2X < 410 &&
    word2Y > 120 &&
    word2Y < 210 &&
    draggingWord2 == false
  ) {
    question = 4;

    // return to original spot
    word1X = word1StartX;
    word1Y = word1StartY;
    word2X = word2StartX;
    word2Y = word2StartY;
    word3X = word3StartX;
    word3Y = word3StartY;

    chantCountdown = 300;
  }
}
//////  END OF NUMBER3  //////

function number4() {
  // if (!addBonus) {
  //   chantCountdown += 10;
  //   addBonus = true;
  // }
  fill(0);

  textSize(25);
  text("朱雀玄武、我が真を守衛す。", 400, 70);

  textSize(35);
  text("                       、我が真を守衛す。", 400, 180);
  rect(80, 190, 270, 2);

  imageMode(CENTER);
  image(n41, word1X, word1Y, width / 4, height / 10);
  image(n42, word2X, word2Y, width / 3.7, height / 10);
  image(n43, word3X, word3Y, width / 4, height / 10);

  if (
    word1X > 90 &&
    word1X < 360 &&
    word1Y > 120 &&
    word1Y < 210 &&
    draggingWord1 == false
  ) {
    chantState = "win";
  }
}
//////  END OF NUMBER4  //////

function chantWin() {
  fill(0);
  rect(0, 0, 4000, 4000);
  fill(255);
  textAlign(CENTER);
  text("You did it!", 400, 200);

  textSize(15);
  text("Go back to Map ↪", 710, 620);
  // fear-=2;

  if (mouseX >= 640 && mouseX <= 780 && mouseY >= 600 && mouseY <= 630) {
    fill(255);
    stroke(255);
    strokeWeight(1);
    text("Go back to Map ↪", 710, 620);
  } else {
    noStroke();
  }
}

function chantLose() {
  // image.remove();
  fill(0);
  rect(0, 0, 4000, 4000);
  fill(255);
  textAlign(CENTER);
  text("Oh no...", 400, 200);

  textSize(15);
  text("Go back to Map ↪", 710, 620);
  // fear+=2;

  if (mouseX >= 640 && mouseX <= 780 && mouseY >= 600 && mouseY <= 630) {
    fill(255);
    stroke(255);
    strokeWeight(1);
    text("Go back to Map ↪", 710, 620);
  } else {
    noStroke();
  }
}
