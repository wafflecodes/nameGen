let listA = [
    "Doodles","Wonderland","Sketch", "Smiley", "Funky","Planet", "Paper","Cloud","Silly","Goofy", "Whopper", "Monster","Troll","Whip","Bolt","Frozen", "Chicken", "Sandwich", "Sleepy", "Face", "Troll", "Frozen", "Green", "Blue", "Floppy", "Googly", "Snap","Smelly", "Cracker", "Dude", "Neon", "Cookie", "Pop", "Dough", "Donut", "Honey", "Flappy"
];

let listB = [
    "Doodles","Wonderland","Sketch", "Smiley", "Funky","Planet", "Paper","Cloud","Silly","Goofy", "Whopper", "Monster","Troll","Whip","Bolt","Frozen", "Chicken", "Sandwich", "Sleepy", "Face", "Troll", "Frozen", "Green", "Blue", "Floppy", "Googly", "Snap","Smelly", "Cracker", "Dude", "Neon", "Cookie", "Pop", "Dough", "Donut", "Honey", "Flappy"
];

let saying = ["Lookout!", "Oh dang!", "I shall call u..", "Your name is...", "Well, hey there... ", "Howdy there!", "How about..", "Here's an idea..."];


function goofyName(){
let randomListA =listA[Math.floor(Math.random()*listA.length)];
let randomListB =listB[Math.floor(Math.random()*listB.length)];
let randomSaying =saying[Math.floor(Math.random()*saying.length)];
document.getElementById("output").innerHTML = randomSaying + " "+ '"' + randomListA + randomListB + '"';
}