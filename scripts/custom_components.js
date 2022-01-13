import { paddle, pingPongBall } from "./index.js";

// This file is for A-Frame custom components.

// Is included in the index.html file's <head> section.
AFRAME.registerComponent('x-button-listener', {
    init: function () {
        // Get the component's element.
        var el = this.el;
        el.addEventListener('xbuttondown', function (evt) {
            // When this evemt is fired, we want to move the ping-pong ball to it's starting position.
            pingPongBall.toStart();
        });
    },
});

AFRAME.registerComponent('paddle-comp', {
    init: function () {
    },
    tick: function () {
        // Check if paddle is active
        if (paddle.isActive) {
            // It should stay stuck the control of the paddle
            paddle.toController();
        } else {
            paddle.disable();
        }
    }
});

AFRAME.registerComponent('a-button-listener', {
    init: function () {
        // Get the component's element.
        var el = this.el;
        el.addEventListener('abuttondown', function (evt) {
            // When this event is fired, we want to move the paddle
            AFRAME.log("Button pressed");
            paddle.setPosition(pingPongBall.getPosition());
        });
    }
});

// Add the x-button-listener component to the left-hand controller
document.querySelector("#left-hand").setAttribute('x-button-listener', '');
document.querySelector("#right-hand").setAttribute('a-button-listener', '');