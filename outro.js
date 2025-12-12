let outdialog1 = [
  `The next day, Ms. Motoko knocked on the door`, //0
  `She said it I made it to 30 days which shocked me.`, //1
  `I thought I just moved in yesterday... `, //2
  `If what she said was true... what happened to me in those thirty days... I had no memories of it at all.`, //3
  `Oh well, at least now I have enough money to get by for a while until I find another job.`, //4
  `Ending 1 \n At least I am not traumatized.`,
];

let outdialog2 = [
  `Finally, I made it through 30 days...`, //0
  `Ms. Motoko hand me the money and I took it without saying another word.`, //1
  `This place is terrifying, in fact, too terrifying. I can't take it anymore.`, //2
  `From that day onwards, I can always hear the laughter, the face whenever I go to bed.`, //3
  `I haven't close my eyes for more than 2 weeks now... I think I'm going insane.`, //4
  `Ending 2 \n Need money for therapy.`,
];

let outdialog3 = [
  `30 days had passed and Ms. Motoko finally comes.`, //0
  `But she seems like she couldn't hear or see me. I feel terrified.`, //1
  `When she leaves, I tried to follow her but I was stopped by something dragging my leg, it was that ghost!`, //2
  `Now, I had lost count of how many days I had been stuck here all with that ghost.`, //3
  `She would catch me every time I tried to escape.`, //4
  `Someone please, help me... Please, anyone.`, //5
  `Ending 3 \n Eternal torture.`,
];

let outIndex1 = 0;
let outIndex2 = 0;
let outIndex3 = 0;

function outroStorySetup() {
  createCanvas(800, 650);
  // noCursor();
  rectMode(CENTER);
  textAlign(CENTER);

  noStroke();
}

function outroStory() {
  background(0);

  if (fear == 0) {
    out1();
  } else if (fear >= 1 && fear <= 8) {
    out2();
  } else if (fear >= 9) {
    out3();
  }

  // console.log(mouseX, mouseY);
}
////// END OF DRAW LOOP //////

function out1() {
  textSize(15);
  fill(255);
  text(outdialog1[outIndex1], 400, 250);
}
////// END OF outro1//////

function out2() {
  textSize(15);
  fill(255);
  text(outdialog2[outIndex2], 400, 250);
}
//////  END OF outro2  //////

function out3() {
  textSize(15);
  fill(255);
  text(outdialog3[outIndex3], 400, 250);
}
//////  END OF outro3  //////

function mouseOut() {
  outIndex1++;
  outIndex2++;
  outIndex3++;
}
