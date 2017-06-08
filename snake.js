/**
 * Created by andrewcabrera on 6/8/17.
 */

var lost = false;
var vertMargin = 0;
var horizMargin = 0;
var direction = 39;
var snake = document.getElementById("snake");
var ball = document.getElementById("ball");
var isCreated = false;

function moveBox(num) {

    switch (num)
    {
        case 39: {
            horizMargin +=20;
            if(horizMargin == 500)
                horizMargin = 0;
            snake.style.left = horizMargin + "px";
        }
            break;

        case 37 : {

            horizMargin -= 20;
            if (horizMargin <= -20)
                horizMargin = 480;
            snake.style.left = horizMargin + "px" ;

        }

            break;

        case 40: {
            vertMargin += 20;

            if (vertMargin == 500)
                vertMargin = 0;

            snake.style.top = vertMargin + "px" ;
        }
            break;
        case 38 :{
            vertMargin -= 20;
            if(vertMargin <= -20)
                vertMargin = 480;

            snake.style.top = vertMargin + "px" ;
        }
            break;
    }

}

    setTimeout(timer(), 1000);

    function timer() {
        setTimeout(function () {
        moveBox(direction);
        timer(direction);
        createBall();
        checkIfTouched();
            console.log("vertMarg is " + vertMargin);
            console.log("horizMarg is " +horizMargin)
        }, 300);
    }

document.addEventListener('keydown', function(event) {

    switch (event.keyCode)
    {
        case 37 : direction = 37;
           break;
        case 39 : direction = 39;
            break;
        case 40:  direction = 40;
            break;
        case 38 : direction = 38;
            break;
    }

});


    function createBall() {


        if (isCreated == false) {
            var height = Math.floor(Math.random() * 500);
            height = height - (height % 20);
            var width = Math.floor(Math.random() * 500);
            width = width - (width % 20);
            console.log("height is" + height);
            console.log("width is" + width);
            ball.style.marginTop = height + "px";
            ball.style.marginLeft = width + "px";
            isCreated =true;
            console.log("ball hieght is" + height);
            console.log("ball width is " + width);
;


        } else {

        }

    }


