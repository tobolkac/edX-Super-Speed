// ==UserScript==
// @name         edX Super Speed
// @namespace    http://ericpryzant.com/
// @version      0.4
// @description  Try to take over the world!
// @author       You
// @match        https://courses.edx.org/xblock/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

'use strict';

var i;
for (i = 0; i < document.getElementsByClassName("xmodule_VideoBlock").length; i++) {
    addDownloadSpeedButton(i);

    addSpeedOption("2.0", i);
    addSpeedOption("2.5", i);
    addSpeedOption("3.0", i);

    //setDefaultSpeed("2.0", i);
}

function addDownloadSpeedButton(videoIndex) {
    var vid = document.getElementsByClassName("video")[videoIndex];
    var vid_url = vid.attributes['data-metadata'].value.toString().match("https:\/\/edx-video.net\/.*\.mp4")[0];
    var vid_title = vid.previousElementSibling.innerText;

    var container = document.getElementsByClassName("xmodule_VideoBlock")[videoIndex];
    var download_button = document.createElement ('div');
    download_button.innerHTML = '<button id="myButton" type="button"><a href=' + vid_url + '>Download ' + vid_title + ' lecture video</a></button>';
    download_button.setAttribute ('id', 'download_button');
    download_button.style = "padding-bottom:12px;padding-right:12px;float:right;";
    container.prepend(download_button);
}

function addSpeedOption(speed, videoIndex) {
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

function setDefaultSpeed(speed, videoIndex) {
    var controls = document.getElementsByClassName("video-controls")[videoIndex];
    var speeds = controls.getElementsByClassName("video-speeds")[0];
    speeds.getElementsByClassName("is-active")[0].className = null;
    var new_active = speeds.querySelectorAll("[data-speed='"+speed+"']")[0];
    new_active.className = "is-active"

    var speed_button = controls.getElementsByClassName("speed-button")[0]
    speed_button.getElementsByClassName("value")[0].textContent = speed + "x";

    var video = document.getElementsByTagName("video")[videoIndex];
    video.onloadeddata = function() {
        var controls = document.getElementsByClassName("video-controls")[videoIndex];
        var speeds = controls.getElementsByClassName("video-speeds")[0];
        var active = speeds.getElementsByClassName("is-active")[0];
        active.getElementsByClassName("control")[0].click();
    };
}
