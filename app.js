"use strict";
var finished = false;
var clickedList = [];
var formInput = document.createElement("input-form");
var submitButton = document.getElementById("submit_b");
var finishButton = document.getElementById("finish_s");
var restartButton = document.getElementById("restart_s");
var storyInput = document.getElementById("story");
var clickedWord = function (event) {
    var clickedWord = event.target.innerText;
};
var saveStory = function () {
    finished = false;
    var input = storyInput.value;
    var words = input.split(" ", input.length - 1);
    var aContainer = document.createElement("div");
    aContainer.className += "  third";
    var aPar = document.createElement("p");
    var specChar = false;
    var storydisplay = document.getElementById("storyDisplay");
    var _loop_1 = function (i) {
        // console.log(spanWords(words[i], " "));
        var aSpan = document.createElement("span");
        var text = document.createTextNode(words[i]);
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (format.test(words[i].charAt(words[i].length - 1))) {
            text = document.createTextNode(words[i].substring(0, words[i].length - 1));
            // words[i].charAt(words[i].length - 1);
            specChar = true;
        }
        aSpan.appendChild(text);
        aSpan.addEventListener("click", function () {
            clickedList[clickedList.length] = aSpan.innerText;
            aSpan.style.backgroundColor = "yellow";
        });
        aPar.appendChild(aSpan);
        if (specChar) {
            aPar.appendChild(document.createTextNode(words[i].charAt(words[i].length - 1) + " "));
            specChar = false;
        }
        else {
            aPar.appendChild(document.createTextNode(" "));
        }
    };
    for (var i = 0; i < words.length; i++) {
        _loop_1(i);
    }
    aContainer.appendChild(aPar);
    storydisplay.appendChild(aContainer);
    // document.getElementById("storyDisplay").innerText = input;
};
var processSubmission = function () {
    console.log("is this working...");
    console.log(storyInput);
};
restartButton.onclick = function (event) {
    if (finished) {
        window.location.reload();
    }
};
submitButton.onclick = function (event) {
    // if (finished) {
    //     document.getElementById("storyDisplay").removeChild(document.getElementById("storyDisplay"));
    //     document.getElementById("listDisplay").removeChild(document.getElementById("listDisplay"));
    // }
    processSubmission();
    saveStory();
};
finishButton.onclick = function (event) {
    var aContainer = document.createElement("div");
    aContainer.className += " fourth";
    var listdisplay = document.getElementById("listDisplay");
    for (var i = 0; i < clickedList.length; i++) {
        var word = document.createElement("div");
        word.innerText = clickedList[i];
        aContainer.appendChild(word);
    }
    listdisplay.appendChild(aContainer);
    clickedList = [];
    finished = true;
};
