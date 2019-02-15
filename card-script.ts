import { isProperty, assertParenthesizedExpression } from "babel-types";
let finished = false;
let clickedList: string[] = [];
let formInput = document.createElement("input-form");
let submitButton = document.getElementById("submit_b") as HTMLElement;
let finishButton = document.getElementById("finish_s") as HTMLElement;
let restartButton = document.getElementById("restart_s") as HTMLElement;
let storyInput = document.getElementById("story") as HTMLInputElement;

let clickedWord = (event: MouseEvent) => {
    let clickedWord = (event.target as HTMLDivElement).innerText;
};

let saveStory = () => {
    finished = false;
    let input = storyInput.value;
    let words = input.split(" ", input.length - 1);
    let aPar = document.createElement("p");
    document.getElementById("storyDisplay").appendChild(aPar);
    for (let i = 0; i < words.length;  i++) {
        // console.log(spanWords(words[i], " "));
        let aSpan = document.createElement("span");
        aSpan.innerText = words[i] + " ";
        aSpan.addEventListener("click", function() {
            clickedList[clickedList.length] = aSpan.innerText;
            aSpan.style.backgroundColor = "yellow";
        });
        aPar.appendChild(aSpan);
    }
    // document.getElementById("storyDisplay").innerText = input;
};

let processSubmission = () => {
    console.log("is this working...");
    console.log(storyInput);
};

restartButton.onclick = (event: MouseEvent) => {
    if (finished) {
        window.location.reload();
    }
};

submitButton.onclick = (event: MouseEvent) => {
    // if (finished) {
    //     document.getElementById("storyDisplay").removeChild(document.getElementById("storyDisplay"));
    //     document.getElementById("listDisplay").removeChild(document.getElementById("listDisplay"));
    // }
    processSubmission();
    saveStory();
};

finishButton.onclick = (event: MouseEvent) => {
    for (let i = 0; i < clickedList.length;  i++) {
        let word = document.createElement("div");
        word.innerText = clickedList[i];
        document.getElementById("listDisplay").appendChild(word);
    } 
    clickedList = [];
    finished = true;
    
};