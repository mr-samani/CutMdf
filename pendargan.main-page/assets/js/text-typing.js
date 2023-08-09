
document.addEventListener("DOMContentLoaded", function (event) {
    carousel("#feature-text")
});


async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        document.querySelector(eleRef).append(letters[i]);
        i++
    }
    return;
}

async function deleteSentence(eleRef) {
    const sentence = document.querySelector(eleRef).innerHTML;
    const letters = sentence.split("");
    let i = 0;
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        document.querySelector(eleRef).innerHTML = letters.join("");
    }
}

async function carousel(eleRef) {
    var carouselList = document.querySelector(eleRef).dataset.words?.split(',');
    var i = 0;
    while (true) {
        await typeSentence(carouselList[i], eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if (i >= carouselList.length) { i = 0; }
    }
}


function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}