let main
//chant game lose not returning to map
//door game showing wrong win/lose, they swapped
//anything about the beans?

// -- Combining this sketch -- //
//"ESC" key to progress scenes
//Use a similar setup to trigger the setup and game

//-- Variables --//
//IMPORTANT ~ keep all variables across the entire project unique. Consider a naming convention if needed moving forward for overlapping variable names. Such as "beanPlayer", "beanEnemy", "doorPlayer", "doorEnemy", etc. Bean Game variables in beans.js

//overall scene variable used to control entire project. Use this to go through start screen, story, room, minigames, etc. Feel free to change the "1" to something else. Just update the if statements if so

//0 = intro / 1= intro Story / 2 = map / 3 = doorStory / 4 = doorGame / 5 = beansGame / 6 = chantGame / 7 = end
let overallGameState = 0;

//-- Global preload() for project --//
function preload() {
  main = loadImage("images/main.jpg");
  mid = loadImage("200w.gif");

  //intro story
  daytime = loadImage("images/day.jpg");
  nighttime = loadImage("images/night.jpg");
  //intro story voiceline
  // voiceLine[0] = null;
  // voiceline[1] = loadSound("sounds/line1.mp3");
  // voiceline[2] = null;
  // voiceline[3] = loadSound("sounds/line2.mp3");
  // voiceline[4] = null;
  // voiceline[5] = loadSound("sounds/line3.mp3");
  // voiceline[6] = null;
  // voiceline[7] = null;
  // voiceline[8] = loadSound("sounds/line4.mp3");
  // voiceline[9] = null;
  // voiceline[10] = loadSound("sounds/line5.mp3");
  // voiceline[11] = null;
  // voiceline[12] = loadSound("sounds/line6.mp3");
  // voiceline[13] = null;
  // voiceline[14] = loadSound("sounds/line7.mp3");
  // voiceline[15] = null;
  // voiceline[16] = loadSound("sounds/line8.mp3");
  // voiceline[17] = null;
   iline1= loadSound("sounds/line1.mp3");
   iline2= loadSound("sounds/line2.mp3");
   iline3= loadSound("sounds/line3.mp3");
   iline4= loadSound("sounds/line4.mp3");
   iline5= loadSound("sounds/line5.mp3");
   iline6= loadSound("sounds/line6.mp3");
   iline7= loadSound("sounds/line7.mp3");
   iline8= loadSound("sounds/line8.mp3");
  
  

  //chant assets
  n11 = loadImage("n/n11.png");
  n12 = loadImage("n/n12.png");
  n13 = loadImage("n/n13.png");
  n21 = loadImage("n/n21.png");
  n22 = loadImage("n/n22.png");
  n23 = loadImage("n/n23.png");
  n31 = loadImage("n/n31.png");
  n32 = loadImage("n/n32.png");
  n33 = loadImage("n/n33.png");
  n41 = loadImage("n/n41.png");
  n42 = loadImage("n/n42.png");
  n43 = loadImage("n/n43.png");

  //doorStory
  doorImg1 = loadImage("images/door1.jpg");
  doorImg2 = loadImage("images/door2.jpg");
  doorImg3 = loadImage("images/door3.jpg");
  //door Storylines
  dline1 = loadSound("sounds/dline1.mp3");
  dline2= loadSound("sounds/dline2.mp3");
  dline3= loadSound("sounds/dline3.mp3");
  dline4= loadSound("sounds/dline4.mp3");
  dline5= loadSound("sounds/dline5.mp3");
  dline6= loadSound("sounds/dline8.mp3");
  // dline7= loadSound("sounds/dline7.mp3");
  
  //door
  gst1 = loadImage("images/1.JPG");
  gst2 = loadImage("images/2.JPG");
  gst3 = loadImage("images/3.JPG");
  gst4 = loadImage("images/4.JPG");

  //map asset
  mapImg = loadImage("images/map.png");
  beanImg = loadImage("images/Bean.jpg");
  chantImg = loadImage("images/Chant.jpg");
  knocking = loadSound("knocking.wav");
  scaring = loadSound("sounds/Laugh.mp3");
  skill1Img = loadImage("images/Bean.gif");
  skill2Img = loadImage("images/Chant.gif");

  //bean
  beanGhost = loadImage("images/beanGhost_500.png");
}

function setup() {
  createCanvas(800, 650);
}

function draw() {
  //console.log(overallGameState);
  //console.log(overallScores + " " + fear);
  if (overallGameState == 0) {
    push();
    textAlign(CENTER);
    image(main, 0, 0, width, height);
    fill(137, 46, 32);
    textSize(25);
    text("Click Anywhere to Start", 400, 450);
    pop();
  } else if (overallGameState == 1) {
    push();
    introStorySetup();
    introStory();
    pop();
  } else if (overallGameState == 2) {
    if (mapSetupToggle == false) {
      mapSetup();
    }
    mapSetupToggle = true;
    mapGame();
  } else if (overallGameState == 3) {
    leaveMap();
    push();
    //dStorySetup();
    dStory();
    pop();
  } else if (overallGameState == 4) {
    push();
    leaveMap(); //delete map assets
    doorGame();
    pop();
  } else if (overallGameState == 5) {
    if (beanSetupToggle == false) {
      beanSetup();
    }
    push();
    beanSetupToggle = true;
    beanGame();
    pop();
  } else if (overallGameState == 6) {
    push();
    chantGameSetup();
    chantGame();
    pop();
  } else if (overallGameState == 7) {
    outroStorySetup();
    outroStory();
  }
}

//-- Global KeyPressed() for project --//
function keyPressed() {
  if (keyIsDown(27)) {
    overallGameState = 4;
  }
  if (overallGameState == 4) {
    if (doorTimer < 0) {
      if (key == " ") {
        hp -= int(random(5, 10));
        if (hp < 0) {
          hp = 0;
        }
      }
    }
  }

  //   //testing ESC game to progress
  //   if (keyIsDown(27)) {
  //     overallGameState++;
  //     console.log(overallGameState);
  //   }

  //   if (overallGameState == 3) {
  //     if (doorTimer < 0) {
  //       if (key == " ") {
  //         hp -= int(random(5, 10));
  //         if (hp < 0) {
  //           hp = 0;
  //         }
  //       }
  //     }

  //     //reset code
  //     if (keyIsDown(UP_ARROW)) {
  //       doorTimer = 300;
  //       hp = 200;
  //       doorMiniGames++;

  //       if (doorMiniGames >= 4) {
  //         console.log("Ghost Wins");
  //       }
  //     }
  //   }

  //   //using overallGameState to allow bean function
  //   if (overallGameState == 4) {
  //     if (keyIsDown(UP_ARROW)) {
  //       beanReset();
  //     }
  //   }
}

//-- Global mousePressed() for project --//
function mousePressed() {
  //using overallGameState to allow bean function
  if (overallGameState == 0) {
    overallGameState++;
  } else if (overallGameState == 1) {
    mouseStory();
    if (Index1 == 17) {
      overallGameState++;
    }
  } else if (overallGameState == 2) {
    mapMouse();
  } else if (overallGameState == 3) {
    dStoryMouse();
    if (doorIndex2 == 8) {
      overallGameState++;
      afterDoorGame = true;
    }
  } else if (overallGameState == 4) {
    //win
    if (hp <= 0) {
      if (
        mouseX >= 640 &&
        mouseX <= 780 &&
        mouseY >= 600 &&
        mouseY <= 630 &&
        mouseIsPressed
      ) {
        //reset code
        doorTimer = 300;
        hp = 200;
        if (doorMiniGames <= 4) {
          doorMiniGames++;
          
        } else {
          mapSetupToggle = false;
          overallGameState = 2;
          triggerDoorgame = false;
          spawnItems = false;
        }
      }
    } else if (hp >= 400) {
      //lose
      if (
        mouseX >= 640 &&
        mouseX <= 780 &&
        mouseY >= 600 &&
        mouseY <= 630 &&
        mouseIsPressed
      ) {
        mapSetupToggle = false;
        overallGameState = 2;
        triggerDoorgame = false;
        spawnItems = false;
        fear += 2;
        overallScores++;
      }
    }
    //   if (overallGameState == 4) {
    //     if (keyIsDown(UP_ARROW)) {
    //       beanReset();
    //     }
    //   }
  } else if (overallGameState == 5) {
    //bean
    shootBean();
    if (winLose === 1) {
      if (
        mouseX >= 640 &&
        mouseX <= 780 &&
        mouseY >= 600 &&
        mouseY <= 630 &&
        mouseIsPressed
      ) {
        //win bean to map
        mapSetupToggle = false;
        overallGameState = 2;
        skill_1.remove();
        skill_2.remove();
        skill_3.remove();
        skill2.remove();
        overallScores++;
        fear-=2;
      }
    } else if (winLose === 2) {
      if (
        mouseX >= 640 &&
        mouseX <= 780 &&
        mouseY >= 600 &&
        mouseY <= 630 &&
        mouseIsPressed
      ) {
        //lose bean to map
        mapSetupToggle = false;
        overallGameState = 2;
        fear+=2;
        overallScores++;
      }
    }
  } else if (overallGameState == 6) {
    mouseChant();
    if (chantState == "win") {
      if (
        mouseX >= 640 &&
        mouseX <= 780 &&
        mouseY >= 600 &&
        mouseY <= 630 &&
        mouseIsPressed
      ) {
        //win chant to map
        mapSetupToggle = false;
        overallGameState = 2;
        overallScores++;
        fear-=2;
      }
    }
    if (chantState == "lose") {
      if (
        mouseX >= 640 &&
        mouseX <= 780 &&
        mouseY >= 600 &&
        mouseY <= 630 &&
        mouseIsPressed
      ) {
        //lose chant to false;
        overallGameState = 2;
        fear += 2;
        overallScores++;
      }
    }
  } else if (overallGameState == 7){
    mapSetupToggle = false;
    mouseOut();
  }
}

function mouseDragged() {
  if (overallGameState == 6) {
    mouseDragChant();
  }
}

function mouseReleased() {
  if (overallGameState == 6) {
    mouseReleaseChant();
  }
}
