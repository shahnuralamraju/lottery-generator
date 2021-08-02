let choseBtn = document.getElementById("chose-btn");
let topicBtn = document.getElementById("topic-btn");
let selectedName = document.getElementById("select-name");
let selectedTopic = document.getElementById("select-topic");

const getRandomNumber = (min, max) => {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

const createArray = (start, end) => {
    let myArray = [];
    for (let i = start; i <= end; i++) {
        myArray.push(i);
    }
    return myArray;
}


let numArray = createArray(1, 6);
choseBtn.addEventListener('click', () => {
    if (numArray.length == 0) {
        selectedName.innerHTML = "Thank You the lottery process is End"
    }
    else {
        let randomIndex = getRandomNumber(0, numArray.length - 1)
        let randomNumber = numArray[randomIndex];
        numArray.splice(randomIndex, 1);
        if (randomNumber == 1) {
            selectedName.innerText = "Nahid";
        }
        if (randomNumber == 2) {
            selectedName.innerText = "Himel";
        }
        if (randomNumber == 3) {
            selectedName.innerText = "Raju";
        }
        if (randomNumber == 4) {
            selectedName.innerText = "Piel";
        }
        if (randomNumber == 5) {
            selectedName.innerText = "Apurba";
        }
        if (randomNumber == 6) {
            selectedName.innerText = "Chironjit";
        }
    }
});

let topicArray = createArray(1, 6);

topicBtn.addEventListener('click', () => {
    if (topicArray.length == 0) {
        selectedTopic.innerHTML = "Thank You the lottery process is End"
    }
    else {
        let randomIndex = getRandomNumber(0, topicArray.length - 1)
        let randomNumber = topicArray[randomIndex];
        topicArray.splice(randomIndex, 1);
        if (randomNumber == 1) {      
            selectedTopic.innerText = "আদিম ও মধ্যযুগ";
        }
        if (randomNumber == 2) {      
            selectedTopic.innerText = "ব্রিটিশ পিরিয়ড";
        }
        if (randomNumber == 3) {         
            selectedTopic.innerText = "পাকিস্তান শাসনামল";
        }
        if (randomNumber == 4) {
            selectedTopic.innerText = "ভাষা আন্দোলন";
        }
        if (randomNumber == 5) {
            selectedTopic.innerText = "মুক্তিযুদ্ধ";
        }
        if (randomNumber == 6) {
            selectedTopic.innerText = "বঙ্গবন্ধুর জীবনী";
        }
    }
});





