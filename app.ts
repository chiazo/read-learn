
let finished = false;
let clickedList: string[] = [];
let formInput = document.createElement("input-form");
let submitButton = document.getElementById("submit_b") as HTMLElement;
let finishButton = document.getElementById("finish_s") as HTMLElement;
let restartButton = document.getElementById("restart_s") as HTMLElement;
let storyInput = document.getElementById("story") as HTMLInputElement;
let spanWords = document.getElementsByTagName("span");

let clickedWord = (event: MouseEvent) => {
    let currWord = (event.target as HTMLDivElement)
    clickedList[clickedList.length] = currWord.innerText;
    currWord.style.backgroundColor = "yellow";
};

let saveStory = () => {
    finished = false;
    let input = storyInput.value;
    let words = input.split(" ", input.length - 1);
    let aContainer = document.createElement("div");
    aContainer.className += "  third";
    let aPar = document.createElement("p");
    aPar.className += " span-par ";
    let specialChar: boolean = false;
    //document.getElementById("storyDisplay")!.appendChild(aPar);
    let storydisplay = document.getElementById("storyDisplay")!;
    for (let i = 0; i < words.length; i++) {
        // console.log(spanWords(words[i], " "));
        let specialChar = false;
        let aSpan = document.createElement("span");
        
        aSpan.addEventListener("click", function() {
            clickedList[clickedList.length] = aSpan.innerText;
            aSpan.style.backgroundColor = "yellow";
        });
        
        let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        let s = "";
        if (format.test(words[i].charAt(words[i].length - 1))) {
            aSpan.innerText = words[i].substring(0, words[i].length-1);
            specialChar = true;
            s = "<span>"+ words[i].substring(0, words[i].length-1) + "</span>" + words[i].charAt(words[i].length - 1);
        } else {
            aSpan.innerText = words[i] + " ";
            s = "<span>"+ words[i] +"</span>"
        }

       // aPar.appendChild(aSpan);
        aPar.innerHTML += s + " ";
        // if (specialChar) {
        //     aPar.innerText += words[i].charAt(words[i].length - 1) + ' ';
        // }

    }
    aContainer.appendChild(aPar);
    storydisplay.appendChild(aContainer);
    
    var parent = document.getElementById("span-par");
    parent!.addEventListener('click', function(event) {
        let currWord = (event.target as HTMLDivElement)
        // if (currWord.tagName === "span") {
            clickedList[clickedList.length] = currWord.innerText;
            currWord.style.backgroundColor = "yellow";
       //  }
    });
    // document.getElementById("storyDisplay").innerText = input;
};

let processSubmission = () => {
    console.log("is this working...");
    console.log(storyInput);
    
    for (let i = 0; i < spanWords.length; i++) {
        let w = spanWords[i];
        w.addEventListener("click", function() {
            clickedList[clickedList.length] = w.innerText;
            w.style.backgroundColor = "yellow";
        });
    }
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
    for (let i = 0; i < clickedList.length; i++) {
        let word = document.createElement("div");
        word.innerText = clickedList[i];
        aContainer.appendChild(word);
    }
    listdisplay.appendChild(aContainer);
    clickedList = [];
    finished = true;

};