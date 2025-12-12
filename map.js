let mapPlayer;

let fear = 0;
let overallScores = 0; //after each mini games (bean and chant), score+1,   when score 5, outro

let skill_1, skill_2, skill_3;
let skill1Count = 0;
let skill2;
let skill2Count = 0;
let skill1Img; //beans skill image on map
let skill2Img; //chant skill image on map

let toolTipMiniGame = false;
let afterDoorGame = false;
let triggerLaugh = false;
let takeDamage = false;
let graceP = 500; //grace period before knock
let graceP1 = 500; //grace period after returning to map before laughter
let ghostP = 400; //grace period before Quick mini game Tooltip!

let knocking;
let scaring;

let beanImg, chantImg; //defense icons
let mapImg;

let mapSetupToggle = false;
let triggerDoorgame = true;
let triggerScare = true;
let spawnItems = true;

function mapSetup() {
  // mapPlayer
  mapPlayer = new Sprite(250, 200, 25, 25);
  mapPlayer.rotationLock = true;
  // mapPlayer.image = skill1Img;
  // mapPlayer.layer = 1; //so that i appears before the background

  walls = new Group();
  walls.collider = "static"; //ask chat GPT
  // Add multiple wall Sprites
  new walls.Sprite(400, 160, 700, 10); // top wall
  new walls.Sprite(400, 600, 700, 10); // bottom wall
  new walls.Sprite(50, 380, 10, 450); // left wall
  new walls.Sprite(750, 380, 10, 450); // right wall
  new walls.Sprite(195, 220, 15, 150);
  new walls.Sprite(195, 370, 15, 65);
  new walls.Sprite(120, 385, 140, 30);
  new walls.Sprite(340, 265, 27, 230);
  new walls.Sprite(660, 260, 27, 200);
  new walls.Sprite(700, 350, 100, 15);
  new walls.Sprite(530, 445, 40, 25);
  new walls.Sprite(500, 515, 15, 165);
  new walls.Sprite(670, 445, 150, 25);

  // walls.color = "brown"; // color walls
  walls.visible = false;

  if (spawnItems) {
    // skill1s = new Group();
    skill_1 = new Sprite(370, 200, 10, 10);
    skill_1.img = skill1Img;
    skill_1.image.scale = 0.1;
    skill_2 = new Sprite(140, 480, 10, 10);
    skill_2.img = skill1Img;
    skill_2.image.scale = 0.1;
    skill_3 = new Sprite(500, 300, 10, 10);
    skill_3.img = skill1Img;
    skill_3.image.scale = 0.1;
    //skill1s.color = "white";

    // skill2 = new Group();
    // new skill2.Sprite(650, 480, 10, 10);
    skill2 = new Sprite(645, 480, 10, 10);
    skill2.color = "white";
    skill2.image = skill2Img;
    skill2.image.scale = 0.2;
  }
}

function mapGame() {
  background(128, 138, 156);
  image(mapImg, 0, 0, width, height);
  textAlign(CENTER);

  //camera code
  // camera.x = mapPlayer.x;
  // camera.y = mapPlayer.y;

  fill(random(255), random(255), random(255));
  if (kb.pressing("left")) {
    mapPlayer.vel.x = -2;
    // mapPlayer.img = ;
    // mapPlayer.mirror.x = false;
  } else if (kb.pressing("right")) {
    mapPlayer.vel.x = 2;
    // mapPlayer.img = t;
    // mapPlayer.mirror.x = true;
  } else {
    mapPlayer.vel.x = 0;
  }

  if (kb.pressing("up")) {
    mapPlayer.vel.y = -2;
  } else if (kb.pressing("down")) {
    mapPlayer.vel.y = 2;
  } else {
    mapPlayer.vel.y = 0;
    // mapPlayer.img = raccoonIdled;
  }
  mapPlayer.collides(walls);
  //walls.deleteAll();

  function collectSkill_1(mapPlayer, skill_1) {
    skill_1.remove();
    skill1Count++;
    textSize(20);
    text("Skill1:" + skill_1, 200, 20);
    //console.log("skill1:", skill1Count);
  }
  function collectSkill_2(mapPlayer, skill_2) {
    skill_2.remove();
    skill1Count++;
    textSize(20);
    text("Skill1:" + skill_2, 200, 20);
    //console.log("skill1:", skill1Count);
  }
  function collectSkill_3(mapPlayer, skill_3) {
    skill_3.remove();
    skill1Count++;
    textSize(20);
    text("Skill1:" + skill_3, 200, 20);
    //console.log("skill1:", skill1Count);
  }
  mapPlayer.overlaps(skill_1, collectSkill_1);
  mapPlayer.overlaps(skill_2, collectSkill_2);
  mapPlayer.overlaps(skill_3, collectSkill_3);

  function collectSkill2(mapPlayer, skill2) {
    skill2.remove();
    skill2Count++;
  }
  mapPlayer.overlaps(skill2, collectSkill2);

  if (skill1Count <= 0) {
    skill1Count = 0;
  }
  if (skill2Count <= 0) {
    skill2Count = 0;
  }

  //fear
  strokeWeight(2);
  fill(0);
  textSize(20);
  text("Fear Meter", 100, 83);
  //meter
  fill(137, 204, 106);
  rect(50, 90, fear * 30, 20, 5);
  noFill();
  rect(50, 90, 300, 20, 5);

  //profile
  //

  //   fill(181, 186, 196);
  //   strokeWeight(7);
  //   ellipse(90, 80, 90, 90);

  //skills
  strokeWeight(2);
  textSize(15);
  fill(0);
  text("Defenses:", 590, 90);
  fill(181, 186, 196);

  rect(640, 65, 40, 40, 5);
  rect(700, 65, 40, 40, 5);
  // ellipse(680, 65, 15, 15);

  // image(chantImg,700, 65, 40, 40, 5 );

  if (skill1Count == 1) {
    image(beanImg, 640, 65, 39, 39, 5);
    fill(255);
    ellipse(680, 65, 15, 15);
    textSize(10);
    fill(0);
    text(skill1Count, 680, 68);

    // chill();
    //bean
  }
  if (skill1Count == 2) {
    image(beanImg, 640, 65, 39, 39, 5);
    fill(255);
    ellipse(680, 65, 15, 15);
    textSize(10);
    fill(0);
    text(skill1Count, 680, 68);
  }
  if (skill1Count == 3) {
    image(beanImg, 640, 65, 39, 39, 5);
    fill(255);
    ellipse(680, 65, 15, 15);
    textSize(10);
    fill(0);
    text(skill1Count, 680, 68);
  } else {
  }

  //chant
  if (skill2Count == 1) {
    image(chantImg, 700, 65, 40, 40, 10);
    fill(255);
    ellipse(740, 65, 15, 15);
    textSize(10);
    fill(0);
    text(skill2Count, 740, 68);
  }

  if (triggerDoorgame) {
    knock();
  }
  // fear++; //if needed to chec for the mini game to work
  if (fear >= 10) {
    fear = 10;
  } else if (fear <= 0) {
    fear = 0;
  }
  // if (overallScores >= 1 && overallScores <= 5) {
    if (triggerScare == true) {
      scare();
      // } else if (overallScores == 5) {
      //   triggerScare == false;
      //   // overallGameState == 7;
      // }
    // } else if (overallScores == 5) {
    //   triggerScare = false;
    //   overallGameState = 7;
    // }
  }
  
  if (overallScores == 5){
    overallGameState = 7;
  }
  //big console.log
  // console.log(
  //   "grace P: " +
  //     graceP +
  //     ",\ndoorDone: " +
  //     afterDoorGame +
  //     ",\ngraceP1: " +
  //     graceP1 +
  //     ",\nghostP: " +
  //     ghostP +
  //     ",\nfear: " +
  //     fear +
  //     ",\ntakeDamage: " +
  //     takeDamage
  // );

  console.log(overallScores);
  // console.log(mouseX, mouseY);
  // console.log(fear);
}
//////END OF DRAW //////

function mapMouse() {
  // fear++; //if needed to chec for the mini game to work
  // if (fear >= 10) {
  //   fear = 10;

  if (
    mouseX >= 640 &&
    mouseX <= 680 &&
    mouseY >= 60 &&
    mouseY <= 100 &&
    skill1Count >= 1
  ) {
    if (overallScores >= 1) {
      skill1Count--;
      overallGameState = 5; //bean
      leaveMap();
      beanReset(); //reset bean game
    }
  } else if (
    mouseX >= 700 &&
    mouseX <= 740 &&
    mouseY >= 60 &&
    mouseY <= 100 &&
    skill2Count >= 1
  ) {
    if (overallScores >= 1) {
      skill2Count--;
      overallGameState = 6;
      leaveMap();
      //chant
    }
  }
}

function scare() {
  //afterDoorGame checks if we've completed the door game. Should we win or lose
  if (afterDoorGame) {
    //toolTip variable to display text
    if (toolTipMiniGame == true) {
      //textbox
      fill(255, 100);
      rectMode(CENTER);
      rect(400, 50, 300, 50);
      rectMode(CORNER);
      //text
      fill(158, 9, 19);
      text("Quick! Click on the defenses to chase the ghost away!", 400, 50);
    }

    //triggers toolTip and ghost period laugh time
    if (triggerLaugh == true) {
      ghostP--; //subtract ghost period
      //change this to false anywhere if you want to hide toolTip
      toolTipMiniGame = true; //toggle toolTip
    }

    //if ghostP has some value, run the checks
    if (ghostP >= 0) {
      //check the overallscore
      if (overallScores >= 1 && overallScores <= 5) {
        graceP1--; //subtract grace period before laugh
        if (graceP1 <= 0) {
          //grace period before next laugh sequence
          graceP1 = 1000; //reset graceP1

          //play the laugh sound
          if (!scaring.isPlaying()) {
            scaring.play();
            triggerLaugh = true; //trigger ghostP code
          }
        }
      }
    } else {
      //deal damage once
      if (takeDamage == false) {
        fear += 2;
        takeDamage = true; //flip to stop taking damage.
      }
      ghostP = 400; //reset ghost laugh
      triggerLaugh = false; //reset laugh
      takeDamage = false;
    }

    //code ^^ above resets ghostP if you want to add more time before damage. Maybe reset to a larger amount of graceP1 time before next laugh to give the player a better chance but remind them that time is crucial. Or increase ghostP to laugh more before damage
  } else if (overallScores == 5) {
    overallGameState = 7;
  }
}

function knock() {
  if (skill1Count == 3 && skill2Count == 1) {
    graceP--;
    if (graceP <= 0) {
      graceP = 0;

      if (!knocking.isPlaying()) {
        knocking.play();
        fill(0);
      } else if (
        mapPlayer.x > 200 &&
        mapPlayer.x < 300 &&
        mapPlayer.y > 160 &&
        mapPlayer.y < 230
      ) {
        knocking.stop();
        if (graceP <= 0) {
          overallGameState = 3;
        }
      }

      text("Who could it be at this time?", mapPlayer.x, mapPlayer.y + 50);
    }
  }
}

function leaveMap() {
  walls.deleteAll();
  mapPlayer.remove();
  skill_1.remove();
  skill_2.remove();
  skill_3.remove();
  skill2.remove();
}
