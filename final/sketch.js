var textTitle = "My Virtual Stylist";
var textTop = "Tops"
var textBottom = "Bottom"
var textShoe = "Shoes"
var textAccess = "Accessories"

var top1;
var top2;
var top3;
var top4;

var topArray = [];
var bottomArray = [];
var shoeArray = [];
var accessArray = [];

var topIndex = 0;
var bottomIndex = 0;
var shoeIndex = 0;
var accessIndex =0;

var button;




function setup() {
    createCanvas(800,800);
    
    button = createButton('Suprise Me');
    button.position(100, 500);
    button.mousePressed(buttonPressed);
    
    button = createButton('Date');
    button.position(200, 500);
    button.mousePressed(date);
    
    button = createButton('Work');
    button.position(275, 500);
    button.mousePressed(work);
    
    button = createButton('Everyday');
    button.position(350, 500);
    button.mousePressed(everyday);
   
    
    
    topArray.push(loadImage("images/top0.jpg"));
    topArray.push(loadImage("images/top1.jpg"));
    topArray.push(loadImage("images/top2.jpg"));
    topArray.push(loadImage("images/top3.jpg"));
    topArray.push(loadImage("images/top4.jpg"));
    
    bottomArray.push(loadImage("images/bottom0.jpg"));
    bottomArray.push(loadImage("images/bottom1.jpg"));
    bottomArray.push(loadImage("images/bottom2.jpg"));
    bottomArray.push(loadImage("images/bottom3.jpg"));
    bottomArray.push(loadImage("images/bottom4.jpg"));
    
    shoeArray.push(loadImage("images/shoe0.jpg"));
    shoeArray.push(loadImage("images/shoe1.jpg"));
    shoeArray.push(loadImage("images/shoe2.jpg"));
    shoeArray.push(loadImage("images/shoe3.jpg"));
    shoeArray.push(loadImage("images/shoe4.jpg"));
    
    accessArray.push(loadImage("images/access0.jpg"));
    accessArray.push(loadImage("images/access1.jpg"));
    accessArray.push(loadImage("images/access2.jpg"));
    accessArray.push(loadImage("images/access3.jpg"));
    accessArray.push(loadImage("images/access4.jpg"));


    /*topIndex = topChooser(0,3);
    bottomIndex = bottomChooser(0,3);
    shoeIndex = shoeChooser(0,3);
    accessIndex = accessChooser(0,3);*/

}

function draw() {
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textFont("Helvetica");
    text(textTitle, 260, 50);
    
    image(topArray[topIndex], 100, 100);
    image(bottomArray[bottomIndex], 100, 300);
    image(shoeArray[shoeIndex], 300, 300);
    image(accessArray[accessIndex], 300, 100);

}

function buttonPressed(){
    topIndex = topChooser(0,5);
    bottomIndex = bottomChooser(0,5);
    shoeIndex = shoeChooser(0,5);
    accessIndex = accessChooser(0,5);
}


function topChooser(min, max) {
    var randomNum = int(random(min, max));
    return randomNum;
}

function bottomChooser(min, max) {
    var randomNum = int(random(min, max));
    return randomNum;
}

function shoeChooser(min, max) {
    var randomNum = int(random(min, max));
    return randomNum;
}

function accessChooser(min, max) {
    var randomNum = int(random(min, max));
    return randomNum;
}

function date(){
    topIndex = topChooser (0,2);
    bottomIndex = bottomChooser (0,2);
    shoeIndex = shoeChooser (0,4);
    accessIndex = accessChooser (0,2);
    
}

function work(){
    topIndex = topChooser (0,2);
    bottomIndex = bottomChooser (3,4);
    shoeIndex = shoeChooser (2,4);
    accessIndex = accessChooser (0,2);
    
}
function everyday(){
    topIndex = topChooser (0,2);
    bottomIndex = bottomChooser (0,2);
    shoeIndex = shoeChooser (0,2);
    accessIndex = accessChooser (0,2);
    
}



    
