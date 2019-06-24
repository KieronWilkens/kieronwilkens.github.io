var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////////
        // ALL CODE GOES BELOW HERE                                   //
        ////////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables //
        var circle;     // variable to hold a single circle when creating circles / iterating
var circles = [];   // variable to store all circles in one Array
// other code...

        // TODO 2 : Create a function that draws a circle  //
       function drawCircle() {
    circle = draw.randomCircleInArea(canvas, true, true, '#100', 2);
    physikz.addRandomVelocity(circle, canvas);
    view.addChild(circle);
    circles.push(circle);
}

        // TODO 3 : Call the drawCircle function 5 times //
        drawCircle();
       drawCircle();
       drawCircle();
        drawCircle();
        drawCircle();
        
        
        //TODO 7 loop and call drawCircle() 100 times
    for (var counter = 0; counter <100; counter++) {
        drawCircle()
    }
    
    
    
        game.checkCirclePosition = function(circle) {
            // TODO 5 : YOUR CODE STARTS HERE //////////////////////
            
            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
                if (circle.x < 0){
                circle.x = canvas.width;
            }
            
             else if (circle.x >canvas.width ) {
             circle.x = 0
            }
            
            // TODO 5b) if the circle has gone past of the TOP side of the screen then place it on the BOTTOM
            if (circle.y < 0){
            circle.y = canvas.height
   }
            // TODO 5c) if the circle has gone past of the BOTTOM side of the screen then place it OFF-SCREEN TOP
            else if (circle.y > canvas.height){
                circle.y = 0
            }
            // YOUR TODO 5 CODE ENDS HERE //////////////////////////
        }
    
        function update() {
            // TODO 4 : Update the circle's position //
physikz.updatePosition(circles[0]);
physikz.updatePosition(circles[1]);
physikz.updatePosition(circles[2]);
physikz.updatePosition(circles[3]);
physikz.updatePosition(circles[4]);
    // code to call the function on the other 4 circles...

    
            // TODO 5 : Call game.checkCirclePosition on your circles.
         

            // TODO 8 : Iterate over the array
            for (var i = 0; i < circles.length; i++) {
                var eachValue = circles[i];
                physikz.updatePosition(eachValue)
                game.checkCirclePosition(eachValue)
            }
    // code to repeat using eachValue
}
        
        ////////////////////////////////////////////////////////////////////
        // NO CODE BELOW HERE                                             //
        ////////////////////////////////////////////////////////////////////
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
