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
    let aContainer = document.createElement("div");
    aContainer.className += "  third";
    let aPar = document.createElement("p");
    let specChar = false;
    let storydisplay = document.getElementById("storyDisplay")!;
    for (let i = 0; i < words.length;  i++) {
        // console.log(spanWords(words[i], " "));
        let aSpan = document.createElement("span");
        let text = document.createTextNode(words[i]);
        let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

        if (format.test(words[i].charAt(words[i].length - 1))) {
            text = document.createTextNode(words[i].substring(0, words[i].length-1));
           // words[i].charAt(words[i].length - 1);
           specChar = true;
        } 
        
        aSpan.appendChild(text);
        aSpan.addEventListener("click", function() {
            clickedList[clickedList.length] = aSpan.innerText;
            aSpan.style.backgroundColor = "yellow";
        });
        aPar.appendChild(aSpan);
        if (specChar) {
            aPar.appendChild(document.createTextNode(words[i].charAt(words[i].length - 1) + " "));
            specChar = false;
        } else {
            aPar.appendChild(document.createTextNode(" "));
        }
    }
    aContainer.appendChild(aPar);
    storydisplay.appendChild(aContainer);
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
    let aContainer = document.createElement("div");
    aContainer.className += " fourth";
    let listdisplay = document.getElementById("listDisplay")!;
    for (let i = 0; i < clickedList.length;  i++) {
        let word = document.createElement("div");
        word.innerText = clickedList[i];
        aContainer.appendChild(word);
    } 
    listdisplay.appendChild(aContainer);
    clickedList = [];
    finished = true;
    
};