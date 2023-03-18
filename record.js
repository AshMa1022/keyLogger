var cnv;
var time;
var record=[];
var txt =[];
var num;
var height;
var width;
let textArea;

function setup(){
    noStroke();
    cnv = createCanvas(800, 1000);
    centerCanvas();
    background(220);
    cnv.parent('output');
    num = 1;
    height = 10;
    width = 10;
}

function centerCanvas() {
    var x = windowWidth * 0.105;
    var y = (windowHeight - height);
    if(y < 0){
        y = 250;
    }
    cnv.position(x, 250);
  }

function draw(){
    centerCanvas();
    
    time ++;
    if(time==300){
        append(record, "thinking");
    }
    if(time - 300 > 0){
        if(time % 10 == 0){
            fill('blue');
            rect(width,height,1,20);
            width += 1;
        }
    }
    
    let stra = "";
    record.forEach(element => {
        stra += element;
    });
   //cnv.text(record,10,10);
   if(record!=null && record.length == num){
    switch(record[record.length-1]){
        case " ":
            fill(255);
            rect(width,height,10,20);
            width += 10;
            break;
        case "SPACE":
            fill(0);
            rect(width,height,50,20);
            fill(255);
            text("SPACE",width,height,50,20);
            width += 50;
            break;
        case "SHIFT":
            fill('yellow');
            rect(width,height,50,20);
            fill(0);
            text("SHIFT",width,height,50,20);
            width += 50;
            break;
        case "ENTER":
            fill(32, 245, 42);
            rect(width,height,40,20);
            fill(0);
            text("ENTER",width,height,40,20);
            width += 40;
            break;
        case "BACKSPACE":
            fill('red');
            rect(width,height,80,20);
            fill(0);
            text("BACKSPACE",width,height,80,20);
            width += 80;
            break;
        case "thinking":
            fill('blue');
            rect(width,height,50,20);
            fill(255);
            text("thinking",width,height,50,20);
            width += 50;
            break;
        default:
    
       }
       num ++;
       
    }

    if(width >= 720){
        height += 15;
        width = 10;
       }



}

function keyPressed(){
    time = 0;
    textArea = document.getElementById("writing");

    textArea.addEventListener("keydown", event=>{
        let newText = event.key;
        if(num != record.length){
        switch(newText){
            case ' ':
                append(record,"SPACE");
                break;
            case 'Backspace':
                append(record,"BACKSPACE");
                break;
            case 'Shift':
                append(record,"SHIFT");
                break;
            case 'Enter':
                append(record,"ENTER");
                break;
            default:
                append(record," ");
        }

    }
    } 
        );
console.log(record[record.length-1]);
}
