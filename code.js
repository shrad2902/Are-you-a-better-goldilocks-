
/*start of the Program */

/* Variable Declarations. */

var ask1:any;
var ending:any;


/*Showing the output and Taking User Input. */

function DisplayPrompt(a:any, b:any) {
    var newLine = "\r\n";
    var msg = "--------------------------------------------------------------------------";
    msg += newLine;
    msg += " ";
    msg += newLine;
    msg += a;
    msg += newLine;
    msg += newLine;
    msg += "Options:";
    msg += newLine;
    msg += b;
    msg += newLine;
    msg += " ";
    msg += newLine;
    msg += "--------------------------------------------------------------------------";
    var ask = prompt(msg);
    ask1 = ask;
    return true;
}

/*Showing the End Result. */

function DisplayAlert(a:any) {
    var newLine = "\r\n";
    var msg = "--------------------------------------------------------------------------";
    msg += newLine;
    msg += " ";
    msg += newLine;
    msg += a;
    msg += newLine;
    msg += " ";
    msg += ending;
    msg += newLine;
    msg += " ";
    msg += "The End!"
    msg += " ";
    msg += "--------------------------------------------------------------------------";
    alert(msg);
}

/*Function to Start the game. */

console.log(ask1);
function Welcome() {
    var line = "Welcome to 'Goldilocks and the Three Bears' choose your own adventure game.";
    var options = "Type 'Enter' to start the game.";
    DisplayPrompt(line, options);
}

/*Function for each level of the game. */

function chapterOne(ask1:any) {
    var newLine = "\r\n";
    var line1 = "Once upon a time, there was a little girl named Goldilocks. She went for a walk in the forest. Pretty soon, she came upon a house.What did she do?";
    var option = " 1. She knocked. ";
    option += newLine;
    option += " 2. She walked right in.";
    DisplayPrompt(line1, option);
}
function chapterOneOptionOne(ask1:any) {
    var newLine = "\r\n";
    var line1 = "when no one answered - She walks right in. She entered the house and went towards the kitchen and at the table, she saw three bowls of porridge. Goldilocks was hungry. Which bowl did she choose to eat from?";
    var option = " 1. First Bowl ";
    option += newLine;
    option += " 2.  Second Bowl ";
    option += newLine;
    option += " 3. Third Bowl ";
    DisplayPrompt(line1, option);
}
function chapterOneOptionTwo(ask1:any) {
    var newLine = "\r\n";
    var line1 = "She entered the house and went towards the kitchen and at the table, she saw three bowls of porridge. Goldilocks was hungry. Which bowl did she choose to eat from?";
    var option = " 1. First Bowl ";
    option += newLine;
    option += " 2.  Second Bowl ";
    option += newLine;
    option += " 3. Third Bowl ";
    DisplayPrompt(line1, option);
}
function chapterTwoOptionOne(ask1:any) {
    var newLine = "\r\n";
    var line1 = "So, she tasted the porridge from the First bowl. 'This porridge is too hot!' she exclaimed.After she'd eaten the very hot breakfast, she decided she was feeling a little tired. So, she walked into the living room where she saw three chairs. Which chair did she choose to sit on?";
    var option = " 1.  First Chair ";
    option += newLine;
    option += " 2.  Second Chair ";
    option += newLine;
    option += " 3. Third Chair ";
    ending += newLine;
    ending += "When The bears Came back home,They went into the kitchen and saw the Bowls.'Someone's been eating my porridge,' growled the Papa bear."
    DisplayPrompt(line1, option);
}
function chapterTwoOptionTwo(ask1:any) {
    var newLine = "\r\n";
    var line1 = "So, she tasted the porridge from the second bowl. 'This porridge is too cold,' she said.After she'd eaten the cold breakfast, she decided she was feeling a little tired. So, she walked into the living room where she saw three chairs. Which chair did she choose to sit on?";
    var option = " 1.  First Chair ";
    option += newLine;
    option += " 2.  Second Chair ";
    option += newLine;
    option += " 3. Third Chair ";
    ending += newLine;
    ending += "When The bears Came back home,They went into the kitchen and saw the Bowls.'Someone's been eating my porridge,' said the Mama bear."
    DisplayPrompt(line1, option);
}
function chapterTwoOptionThree(ask1:any) {
    var newLine = "\r\n";
    var line1 = "So, she tasted the Third bowl of porridge. 'Ahhh, this porridge is just right,' she said happily and she ate it all up. After she'd eaten the breakfast, she decided she was feeling a little tired. So, she walked into the living room where she saw three chairs. Which chair did she choose to sit on?";
    var option = " 1.  First Chair ";
    option += newLine;
    option += " 2.  Second Chair ";
    option += newLine;
    option += " 3. Third Chair ";
    ending += newLine;
    ending += "When The bears Came back home,They went into the kitchen and saw the Bowls.'Someone's been eating my porridge and they ate it all up!' cried the Baby bear. "
    DisplayPrompt(line1, option);
}
function chapterThreeOptionOne(ask1:any) {
    var newLine = "\r\n";
    var line1 = "So she sat in the First Chair 'This chair is too big!' she exclaimed. Goldilocks was very tired by this time, she went upstairs to the bedroom.Which bed did she choose to lay on?";
    var option = " 1. First Bed ";
    option += newLine;
    option += " 2.  Second Bed ";
    option += newLine;
    option += " 3. Third Bed ";
    ending += newLine;
    ending += " Then they went into the living room and saw the chairs. 'Someone's been sitting in my chair.' growled the Papa bear."
    DisplayPrompt(line1, option);
}
function chapterThreeOptionTwo(ask1:any) {
    var newLine = "\r\n";
    var line1 = "So she sat in the second chair. 'This chair is big!' she whined. Goldilocks was very tired by this time, she went upstairs to the bedroom.Which bed did she choose to lay on?";
    var option = " 1. First Bed ";
    option += newLine;
    option += " 2.  Second Bed ";
    option += newLine;
    option += " 3. Third Bed ";
    ending += newLine;
    ending += " Then they went into the living room and saw the chairs.'Someone's been sitting in my chair.'said the Mama bear."
    DisplayPrompt(line1, option);
}
function chapterThreeOptionThree(ask1:any) {
    var newLine = "\r\n";
    var line1 = "So she tried the Third chair. 'Ahhh, this chair is just right,' But just as she settled down into the chair to rest, it broke into pieces! Goldilocks was very tired by this time, she went upstairs to the bedroom.Which bed did she choose to lay on?";
    var option = " 1. First Bed ";
    option += newLine;
    option += " 2.  Second Bed ";
    option += newLine;
    option += " 3. Third Bed ";
    ending += newLine;
    ending += " Then they went into the living room and saw the chairs.'Someone's been sitting in my chair and they've broken it to pieces,' cried the Baby bear."
    DisplayPrompt(line1, option);
}
function chapterFourOptionOne(ask1:any) {
    var newLine = "\r\n";
    var line1 = "So she lay down on the First Bed. 'This Bed is  too hard!' she exclaimed. Goldilocks fell asleep.";
    ending += newLine;
    ending += " The They decided to look around some more and when they got upstairs to the bedroom 'Someone's been sleeping in my bed and she's still there!' exclaimed the Papa bear. Just then, Goldilocks woke up. She saw the three bears. She screamed, 'Help!' And she jumped up and ran out of the room. Goldilocks ran down the stairs, opened the door, and ran away into the forest. She never returned to the home of the three bears."
    DisplayAlert(line1);
}
function chapterFourOptionTwo(ask1:any) {
    var newLine = "\r\n";
    var line1 = "So she lay down on the Second Bed. 'This Bed is  too soft!' she whined. Goldilocks fell asleep.";
    ending += newLine;
    ending += " The They decided to look around some more and when they got upstairs to the bedroom 'Someone's been sleeping in my bed and she's still there!' exclaimed the Mama bear. Just then, Goldilocks woke up. She saw the three bears. She screamed, 'Help!' And she jumped up and ran out of the room. Goldilocks ran down the stairs, opened the door, and ran away into the forest. She never returned to the home of the three bears."
    DisplayAlert(line1);
}
function chapterFourOptionThree(ask1:any) {
    var newLine = "\r\n";
    var line1 = "So she lay down on the Third Bed. 'This Bed is  just right!' Goldilocks fell asleep.";
    ending += newLine;
    ending += " The They decided to look around some more and when they got upstairs to the bedroom 'Someone's been sleeping in my bed and she's still there!' exclaimed the Baby bear. Just then, Goldilocks woke up. She saw the three bears. She screamed, 'Help!' And she jumped up and ran out of the room. Goldilocks ran down the stairs, opened the door, and ran away into the forest. She never returned to the home of the three bears."
    DisplayAlert(line1);
}

//-----------------driver code-----------------

var rr = Welcome();
if (ask1 == "enter" || ask1 == "Enter" || ask1 == "ENTER") {
    chapterOne(ask1);
}

if (ask1 == "1") {
    chapterOneOptionOne(ask1);
}
else {
    chapterOneOptionTwo(ask1);
}


if (ask1 == "1") {
    chapterTwoOptionOne(ask1);

}
else if (ask1 == "2") {
    chapterTwoOptionTwo(ask1);
}
else {
    chapterTwoOptionThree(ask1);
}

if (ask1 == "1") {
    chapterThreeOptionOne(ask1);

}
else if (ask1 == "2") {
    chapterThreeOptionTwo(ask1);

}
else {
    chapterThreeOptionThree(ask1);
}

if (ask1 == "1") {
    chapterFourOptionOne(ask1);

}
else if (ask1 == "2") {
    chapterFourOptionTwo(ask1);
}
else {
    chapterFourOptionThree(ask1);
}

/* End of the Program. */
