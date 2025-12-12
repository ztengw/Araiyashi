let dline1, dline2, dline3, dline4, dline5, dline6, dline7;
let doorName = [
  `Me`, //0
  `???`, //1
  `Me`, //2
  `???`, //3
  `???`, //4
  `Me`, //5
  `Me`, //6
  ` `
];

let doorStory = [
  `Who is it? It's late, you should go home`, //0
  `Hi, you must be the new neighbor here.`, //1
  `*How does she know...*`, //2
  `I brought goodies bag for you, let's be friend.`, //3
  `Please open the door for me so I can give it to you.`, //4
  `*Ms. Motoko said not to open the door for anyone at night...*`, //5
  `It's fine, it's late now, you can give it tomorrow next morning.`, //6
  ` `
];

let doorName2 = [
  `???`, //0
  `Me`, //1
  `???`, //2
  `???`, //3
  ` `, //4
  `Me`, //5
  ` `, //6
  ` `, //7
  ` `, //8
];

let doorStory2 = [
  `So you've noticed...`, //0
  `Huh? What do yo-`, //1
  `Hahahahaha!`, //2
  `You think I can't enter? That's just adorable`, //3
  `**Click** The door unlock by itself! `, //4
  `Oh shit!`, //5
  `That crazy woman tries to open the door! `, //6
  `Get ready to defend with pressing Spacebar`, //7
  ` `, //8
];

let doorIndex = 0;
let doorScene = 0;

let doorIndex2 = 0;

let doorImg1, doorImg2, doorImg3;


// function dStorySteup() {
//   //createCanvas(800, 650);
// }

function dStory() {
  textAlign(CENTER);
  rectMode(CENTER);
  background(220);

  if (doorScene === 0) {
    dor1();
  } else if (doorScene === 1) {
    dor2();
  }
  
}
////// END OF DRAW LOOP //////

function dor1() {
  if(doorIndex == 0 ){
    image(doorImg1, 0, 0, width, height);
  } else{
    image(doorImg2, 0, 0, width, height);
  }
  fill(128, 138, 156, 230);
  rect(400, 510, 750, 240, 10);

  textSize(12);
  fill(0);
  text(doorName[doorIndex], 400, 430);

  textSize(15);
  fill(0);
  text(doorStory[doorIndex], 400, 500);
  
  if (doorIndex == 1 && mouseIsPressed){
    if (!dline1.isPlaying()){
      dline1.play();
    }
  } else if (doorIndex == 3 && mouseIsPressed){
     if (!dline2.isPlaying()){
      dline2.play();
  } 
    } else if (doorIndex == 4 && mouseIsPressed){
    if (!dline3.isPlaying()){
      dline3.play();
  }
  }
}

function dor2() {
  image(doorImg3, 0, 0, width, height);
  fill(128, 138, 156, 230);
  rect(400, 510, 750, 240, 10);

  textSize(12);
  fill(0);
  text(doorName2[doorIndex2], 400, 430);

  textSize(15);
  fill(0);
  text(doorStory2[doorIndex2], 400, 500);
  
  if (doorIndex2 == 0 && mouseIsPressed){
    if (!dline4.isPlaying()){
      dline4.play();
    }
  } else if (doorIndex2 == 2 && mouseIsPressed){
     if (!dline5.isPlaying()){
      dline5.play();
  } 
    } else if (doorIndex2 == 3 && mouseIsPressed){
    if (!dline6.isPlaying()){
      dline6.play();
  }
  }
}

function dStoryMouse() {
  //console.log(doorScene + " " + doorIndex)
  
  if (doorScene === 0) {
    doorIndex++;
    
    if (doorIndex === 7){
      doorScene = 1;
      doorIndex = 0;
    }
  } else if (doorScene === 1) {
    doorIndex2++;
    if (doorIndex2 === 8) {
      //run the door game
    }
  }
}
