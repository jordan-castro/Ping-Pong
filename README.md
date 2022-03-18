# PingPong VR

This is a simple VR application made with [WebXR](https://www.w3.org/TR/webxr/).
It's supposed to be a Ping Pong game, but it's not. What it is, is a simple VR experience that allows you to hit a ball with a paddle.
Also the paddle is really just a box (more like a board).

To Run:
If you have npm installed, you can run the following command:
```
npm i -g browser-sync

browser-sync start -s --https --no-open --port=custom-port-number
```
Then go to
```
https://localhost:custom-port-number
```

If you are viewing the app in a VR headset, then you can go to 
```
https://your-computer-ip-address:custom-port-number
```

Without running locally, you can visit:
```
https://james-garfield.github.io/Ping-Pong/
```


## Controls
The application does interact with the Oculus Quest controllers. At this point in time, the only gamepad that is supported is the Oculus Quest.
The controls are as follows:
- Left Controller:
  - X: Reset Ball to starting position
- Right Controller:
  - A: Move the paddle to the balls position.

This project is just a way to get my feet wet with WebXR. I hope you enjoy it!
