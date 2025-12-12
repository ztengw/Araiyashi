//beangame beanPlayer variables
let beans;
let beanPlayer;
let cursorAim;

//beangame prep timer + countdown game timer
let countdown = 2000;
let timer = 300; //1sec = 1000 milliseconds

//beangame enemy variables
let enemys;
let enemy;
let enemyAlpha = 0;
let enemyColor;

//beangame scene controller for bean game
let winLose = 0; // 0 = game //1 = win // 2 = lose
let beanSetupToggle = false;

//beangame images
let beanGhost;


//beangame setup
function beanSetup() {
  beanPlayer = new Sprite();
  beanPlayer.width = 10;
  beanPlayer.height = 10;
  beanPlayer.x = 400;
  beanPlayer.y = 650;
  beanPlayer.color = color(255);
  beanPlayer.collider = "static";

  beans = new Group();
  beans.d = 10;
  beans.color = color(255, 0, 0);
  beans.collider = "none";
  beans.layer = 2;

  enemys = new Group();
  enemys.color = color(random(200));
  enemys.layer = 2;
  //enemys.debug = true;
  

  //checks if enemy is hit by projectile, if so run enemyDmg()
  enemys.overlaps(beans, enemyDmg);

  cursorAim = new Sprite();
  cursorAim.d = 15;
  cursorAim.color = color(0, 255, 0);
  cursorAim.collider = "none";
  enemys.layer = 1;
}

//beangame
function beanGame() {
  background(128, 138, 156);

  if (winLose == 0) {
    cursorAim.x = mouseX;
    cursorAim.y = mouseY;

    //text countdown
    if (timer >= 0) {
      fill(0);
      textSize(15);
      text((timer / 100).toFixed(0), 400, 200);
      textAlign(CENTER);
      text("Tip: Shoot the ghost before it grows too big.", 400, 100);
    }

    if (timer < 0) {
      //a while loop that checks the array length of the enemy group. If no enemies, spawn one
      //p5play.org/learn/group.html?page=0https:
      while (enemys.length < 1) {
        enemy = new enemys.Sprite();
        enemy.x = random(100, 700);
        enemy.y = random(100, 600);
        enemy.d = 50;
        enemy.image = beanGhost;
        enemy.image.scale = 0.1;
        //enemy.color = color(200); //set color
        enemy.stroke = color(0, 0); //stroke 0 alpha
        enemy.opacity = 0;
      }

      
      //grow/fade mechanic~ tweak balance as needed
      if (countdown > 1750) {
        enemy.d += 1; //enemy grows
        enemy.image.scale = enemy.d / 500;
        enemy.opacity += 255; //enemy fades in
      } else if (countdown > 1500) {
        enemy.d += 2; //enemy grows
        enemy.image.scale = enemy.d / 500;
        enemy.opacity += 255; //enemy fades in
      } else if (countdown > 1000) {
        enemy.d += 3; //enemy grows
         enemy.image.scale = enemy.d / 500;
        enemy.opacity += 0.1; //enemy fades in
      } else if (countdown > 500) {
        enemy.d += 4; //enemy grows
         enemy.image.scale = enemy.d / 500;
        enemy.opacity += 0.01; //enemy fades in
      } else if (countdown > 0) {
        enemy.d += 5; //enemy grows
         enemy.image.scale = enemy.d / 500;
        enemy.opacity += 0.005; //enemy fades in
      }

      //caps enemy opacity for fade
      if (enemy.opacity >= 255) {
        enemy.opacity = 255;
      }
    } else {
      timer--;
    }
    tickTock();
  } else if (winLose == 1) {
    //win screen
    fill(0);
    rect(0, 0, width, height);
    fill(255);
     text("Bye bye evil!", 400, 200);


    textSize(15);
    text("Go back to Map ↪", 710, 620);
    

    if (mouseX >= 640 && mouseX <= 780 && mouseY >= 600 && mouseY <= 630) {
      fill(255);
      stroke(255);
      strokeWeight(1);
      text("Go back to Map ↪", 710, 620);
    } else {
      noStroke();
    }
  } else if (winLose == 2) {
    //lose screen
    enemy.remove();
    fill(0);
    rect(0, 0, width, height);
    fill(255);
    text("Soo scary...", 400, 200);
    // text('"UP ARROW" key to reset', 400, 250);
    // fear++;
    textSize(15);
    text("Go back to Map ↪", 710, 620);

    if (mouseX >= 640 && mouseX <= 780 && mouseY >= 600 && mouseY <= 630) {
      fill(255);
      stroke(255);
      strokeWeight(1);
      text("Go back to Map ↪", 710, 620);
    } else {
      noStroke();
    }
  }
  loseBean(); //checks ghost size lose condition
  winBean(); //checks countdown timer win condition
}

//beangame shoot mechanic
function shootBean() {
  //only shoot when beangame is active
  if (timer >= 0 || winLose == 1 || winLose == 2) return;

  let bean = new beans.Sprite();
  bean.x = beanPlayer.x;
  bean.y = beanPlayer.y;

  let direction = createVector(mouseX - beanPlayer.x, mouseY - beanPlayer.y);

  direction.normalize(); // Normalize to get direction only

  let speed = 10;

  direction.mult(speed);

  bean.vel.x = direction.x;
  bean.vel.y = direction.y;
}

//beangame enemy damage mechanic
function enemyDmg(enemy, bean) {
  enemy.remove();
  bean.remove();
}

//beangame countdown game timer
function tickTock() {
  if (timer < 0 && countdown > 0) {
    fill(0);
    textSize(20);
    text("00:", 380, 50);
    text((countdown / 100).toFixed(0), 410, 50);
    countdown--;
  }
}

//beangame reset function
function beanReset() {
  //check if in the "win" or "lose" screen
  if (winLose == 1 || winLose == 2) {
    enemy.d = 50; //reset the size of the ghost
    winLose = 0; //reset back to first scene
    timer = 300; //reset timer
    countdown = 2000; //reset countdown timer
    beanSetupToggle = false; //reset Setup toggle
  }
}

//beangame lose screen
function loseBean() {
  //ends game if ghost gets too big
  if (enemy && enemy.d >= 450) {
    //clear();
    winLose = 2; //triggers lose conditional
    beans.deleteAll(); //delete all beans in group
    enemy.remove(); //delete enemy
    beanPlayer.remove(); //delete beanPlayer
    cursorAim.remove(); //delete cursor
  }
}

//beangame win screen
function winBean() {
  //if win outlast timer
  if (countdown == 0) {
    winLose = 1; //triggers lose conditional
    beans.deleteAll(); //delete all beans in group
    enemy.remove(); //delete enemy
    beanPlayer.remove(); //delete beanPlayer
    cursorAim.remove(); //delete cursor
    // clearScreen();
  }
}
