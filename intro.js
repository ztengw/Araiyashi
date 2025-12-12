let iline1, iline2, iline3, iline4, iline5, iline6, iline7, iline8;

let daytime;
let nighttime;

let dialog = [
  `Man, Im freezing... starving, broke, and worst of all, I just got fired...`, //0
  `Walking back home feels like eternity... I take out my phone and look at the bank account...`, //1
  `Only 3000 yen left, how am I getting by...(Roughly 20 USD.)`, //2
  `I pocketed my phone and let out a rough sigh`, //3
  `As I walk, a paper suddenly slap on my face.`, //4
  `I swipe it off with a low grumble. But when I was about to let out my \n frustration on the paper, I notice the content...`, //5
  `Looking for a job? We have one for you. Live in a accident property \n for a month  and you will receive 50,000 yen! \n(Roughly 320 USD, Japan lowest monthly salary is 20,000 yen, approximately 130 USD.)`, //6
  `Dial (+81) ## #### #### to join us.`, // 7
  `Should I call?`,
];

let names = [
  `Me`, //0
  ` `, //1
  `Me`, //2
  ` `, //3
  ` `, //4
  ` `, //5
  ` `, //6
  ` `, //7
  ` `, //8
];

let dialog1 = [
  `Ring...`, //0
  `Hello?`, //1
  `Hi, I saw your poster about looking someone to live in an accident property?`, //2
  `Ah yes, are you interested? We will pay a bonus of 5,000 yen if you start tomorrow. \n (Roughly 32 USD.)`, //3
  `I'm in. What should I do?`, //4
  `Just come to XXX Garden tomorrow`, //5
  `Hung Up.`, //6
  `Next Day`, //7
  `Oh, you've came, you must be the one who dialed last night. You can call me Ms. Motoko.`, //8
  `Yes, that's me. Hi, Ms. Motoko, I'm protagonist.`, //9
  `Come with me.`, //10
  `Ms. Motoko brought me to the apartment I will be staying at.`, //11
  `You will be expected to stay here for 30 days.`, //12
  `Of course`, //13
  `You will be staying during the night and remember, do not open the door \nfor anyone at night no matter who it is.`, //14
  `Yes, yes ma'am.`, //15
  `Good, I will see you in 30 days then.`, //16
  ``, //17
];

let names1 = [
  ` `, //0
  `???`, //1
  `Me`, //2
  `???`, //3
  `Me`, //4
  `???`, //5
  ` `, //6
  ` `, //7
  `Motoko`, //8
  `Me`, //9
  `Motoko`, //10
  ` `, //11
  `Motoko`, //12
  `Me`, //13
  `Motoko`, //14
  `Me`, //15
  `Motoko`, //16
  ` `, //17
];

let Index = 0;
let Index1 = 0;
let scene = 0;
let choice = null;

let nopicker;

let voiceLine = [];

function introPreload() {
  // line = loadSound("audio1.mp3");
}

function introStorySetup() {
  createCanvas(800, 650);
  // noCursor();
  rectMode(CENTER);
  textAlign(CENTER);

  noStroke();
}

function introStory() {
  background(220);

  if (scene === 0) {
    introduction();
  } else if (scene === 1) {
    next();
  } else if (scene === 2) {
    nope();
  }

  // console.log(mouseX, mouseY);
}
////// END OF DRAW LOOP //////

function introduction() {
  image(nighttime, 0, 0, width, height);
  stroke(0);
  fill(128, 138, 156, 230);
  rect(400, 510, 750, 240, 10);

  noStroke();
  textSize(12);
  fill(0);
  text(names[Index], 400, 430);

  textSize(15);
  fill(0);
  text(dialog[Index], 400, 500);

  if (Index == 8) {
    fill(230);
    fill(128, 138, 156, 230);
    // fill(0);
    text(dialog[Index], 400, 420);

    fill(55, 10, 161);
    rect(250, 550, 100, 70, 5);
    rect(550, 550, 100, 70, 5);

    fill(255);
    text("Yes", 250, 555);
    text("No", 550, 555);

    if (mouseX >= 200 && mouseX <= 300 && mouseY >= 520 && mouseY <= 580) {
      fill(22, 147, 242);
      rect(250, 550, 100, 70, 5);
      fill(255);
      text("Yes", 250, 555);
    }
    if (mouseX >= 500 && mouseX <= 600 && mouseY >= 520 && mouseY <= 580) {
      fill(22, 147, 242);
      rect(550, 550, 100, 70, 5);
      fill(255);
      text("No", 550, 555);
    }
  }
}
////// END OF INTRO //////

function nope() {
  image(nighttime, 0, 0, width, height);
  stroke(0);
  fill(128, 138, 156, 230);
  rect(400, 510, 750, 240, 10);
  noStroke();
  fill(0);
  if (nopicker == 1) {
    text("But I'm broke...", 400, 500);
  } else if (nopicker == 2) {
    text(
      "Mom and Dad would be disappointed if I ask them for money.",
      400,
      500
    );
  } else if (nopicker == 3) {
    text("I need money.", 400, 500);
  } else if (nopicker == 4) {
    text("Come on, just click yes already.", 400, 500);
  } else if (nopicker == 5) {
    text("What I had left is only enough for me to get by a meal.", 400, 500);
  } else if (nopicker == 6) {
    text("Money. Money. Money. Money. Money.", 400, 500);
  }
}

function next() {
  if (Index1 >= 0 && Index1 <= 6) {
    image(nighttime, 0, 0, width, height);
  } else {
    image(daytime, 0, 0, width, height);
  }

  //   if (voiceline[Index1 -1 ] && voiceline[Index1 -1].isPlaying()){
  //     voiceline[Index1 -1].stop();
  //   }
  //    if (line[Index1]){
  //     line[Index1].play();
  //   }

  stroke(0);
  fill(128, 138, 156, 230);
  rect(400, 510, 750, 240, 10);

  noStroke();
  textSize(12);
  fill(0);
  text(dialog1[Index1], 400, 500);

  if (Index1 == 1 && mouseIsPressed) {
    if (!iline1.isPlaying()) {
      iline1.play();
    }
  } else if (Index1 == 3 && mouseIsPressed) {
    if (!iline2.isPlaying()) {
      iline2.play();
    }
  } else if (Index1 == 5 && mouseIsPressed) {
    if (!iline3.isPlaying()) {
      iline3.play();
    }
  }else if (Index1 == 8 && mouseIsPressed) {
    if (!iline4.isPlaying()) {
      iline4.play();
    }
  }else if (Index1 == 10 && mouseIsPressed) {
    if (!iline5.isPlaying()) {
      iline5.play();
    }
  }else if (Index1 == 12 && mouseIsPressed) {
    if (!iline6.isPlaying()) {
      iline6.play();
    }
  }else if (Index1 == 14 && mouseIsPressed) {
    if (!iline7.isPlaying()) {
      iline7.play();
    }
  }else if (Index1 == 16 && mouseIsPressed) {
    if (!iline8.isPlaying()) {
      iline8.play();
    }
  }
  
}
//////  END OF NEXT  //////

function mouseStory() {
  if (scene === 0) {
    if (Index < 8) {
      Index++;
    }
    if (Index === 8) {
      if (mouseX >= 200 && mouseX <= 300 && mouseY >= 520 && mouseY <= 580) {
        choice = "yes";
        scene = 1;
      }
      if (mouseX >= 500 && mouseX <= 600 && mouseY >= 520 && mouseY <= 580) {
        choice = "no";
        scene = 2;
        nopicker = int(random(1, 7));
      }
    }
  } else if (scene === 1) {
    if (Index1 < dialog1.length - 1) {
      Index1++;
    }
  } else if (scene === 2) {
    if (mousePressed) {
      scene = 0;
      Index = 8;
    }
  }
}
