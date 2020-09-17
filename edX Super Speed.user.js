// ==UserScript==
// @name         edX Super Speed
// @namespace    http://ericpryzant.com/
// @version      0.3
// @description  Try to take over the world!
// @author       You
// @match        https://courses.edx.org/xblock/*
// @grant        none
// @run-at document-idle
// ==/UserScript==

'use strict';
var vid = document.getElementsByClassName("video")[0];
var vid_url = vid.attributes['data-metadata'].value.toString().match("https:\/\/edx-video.net\/.*\.mp4")[0];
var vid_title = vid.previousElementSibling.innerText;
var zNode = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button"><a href=' + vid_url + '>Download ' + vid_title + ' lecture video</a></button>';
zNode.setAttribute ('id', 'myContainer');
zNode.style = "top:0;right:0;position:absolute;z-index:99999;padding:20px;";
document.body.appendChild (zNode);

var i;
for (i = 0; i < document.getElementsByClassName("video-speeds").length; i++) {
    addSpeed("2.0", i)
    addSpeed("2.5", i)
    addSpeed("3.0", i)
}

function addSpeed(speed, videoIndex) {
    var item = document.getElementsByClassName("video-speeds")[videoIndex];
    var new_speed = document.createElement("li");
    var btn = document.createElement("button");
    btn.setAttribute("class", "control speed-option");
    btn.setAttribute("tabindex", -1);
    btn.setAttribute("aria-pressed", "false");
    new_speed.appendChild(btn);
    new_speed.setAttribute("data-speed", speed);
    new_speed.children[0].innerText = speed + "x";
    item.prepend(new_speed);
}
