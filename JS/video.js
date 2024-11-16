const pairs = [
    {
        video: "../videos/vid1.mp4",
        question: "Where did Paisii Hilendarski live?",
        answers: {
            a: "Bulgaria",
            b: "Greece",
        },
        correctAnswer: "b",
    },
    {
        video: "../videos/vid2.mp4",
        question: "What is the capital of Bulgaria?",
        answers: {
            a: "Sofia",
            b: "Plovdiv",
        },
        correctAnswer: "a",
    },
    {
        video: "../videos/vid3.mp4",
        question: "What is the capital of Bulgaria?",
        answers: {
            a: "Sofia",
            b: "Plovdiv",
        },
        correctAnswer: "a",
    },
];
const container = document.getElementById("container");
let currentState = "video";

window.addEventListener("wheel", event => {
    if (currentState === "video") {
        container.innerHTML = '<video src=${getRandomPair(pairs)[video]} width="500" height="500" controls loop type="video/mp4"></video>';
        currentState = "question";
    } else {
        currentState = "video";
        container.innerHTML = `<video src=${getRandomPair(pairs)[video]} width="500" height="500" controls loop type="video/mp4"></video>`;
    }
})

function getRandomPair(array) {
    return array[Math.floor(Math.random() * array.length)];
}