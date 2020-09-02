class Form{
constructor(){

    this.input = createInput("Your Name");
    this.button1 = createButton("Quick Play");
    this.button2 = createButton("Options");
    this.title = createElement("h1");
}
hide(){
    this.button1.hide();
    this.button2.hide();
    this.input.hide();
}

display(){
this.title.html("Car Bash Ultimate Racing 2D")
this.title.position(displayWidth/2 - 50,0);

this.input.position(displayWidth/10 - 40 , displayHeight/6 - 80);

this.button2.position(displayWidth-200, 70);
}
}