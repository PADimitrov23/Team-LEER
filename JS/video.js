const pairs = [
    {
        video: "videos/vid1.mp4",
        question: "Where did Paisii Hilendarski live?",
        answers: {
            a: "Bulgaria",
            b: "Greece",
        },
        correctAnswer: "b",
    },
    {
        video: "videos/vid2.mp4",
        question: "What is the capital of Bulgaria?",
        answers: {
            a: "Sofia",
            b: "Plovdiv",
        },
        correctAnswer: "a",
    },
    {
        video: "videos/vid3.mp4",
        question: "What is the capital of Bulgaria?",
        answers: {
            a: "Sofia",
            b: "Plovdiv",
        },
        correctAnswer: "a",
    },
    {
        video: "videos/vid4.mp4",
        question: "Where did Paisii Hilendarski live?",
        answers: {
            a: "Bulgaria",
            b: "Greece",
        },
        correctAnswer: "b",
    },
    {
        video: "videos/vid5.mp4",
        question: "Where did Paisii Hilendarski live?",
        answers: {
            a: "Bulgaria",
            b: "Greece",
        },
        correctAnswer: "b",
    },
    {
        video: "videos/vid6.mp4",
        question: "Where did Paisii Hilendarski live?",
        answers: {
            a: "Bulgaria",
            b: "Greece",
        },
        correctAnswer: "b",
    },
    {
        video: "videos/vid7.mp4",
        question: "Where did Paisii Hilendarski live?",
        answers: {
            a: "Bulgaria",
            b: "Greece",
        },
        correctAnswer: "b",
    },
    {
        video: "videos/vid8.mp4",
        question: "What is the capital of Bulgaria?",
        answers: {
            a: "Sofia",
            b: "Plovdiv",
        },
        correctAnswer: "a",
    },
    {
        video: "videos/vid9.mp4",
        question: "What is the capital of Bulgaria?",
        answers: {
            a: "Sofia",
            b: "Plovdiv",
        },
        correctAnswer: "a",
    },
    {
        video: "videos/vid10.mp4",
        question: "What is the capital of Bulgaria?",
        answers: {
            a: "Sofia",
            b: "Plovdiv",
        },
        correctAnswer: "a",
    },
    {
        video: "videos/vid11.mp4",
        question: "What is the capital of Bulgaria?",
        answers: {
            a: "Sofia",
            b: "Plovdiv",
        },
        correctAnswer: "a",
    },
    {
        video: "videos/vid12.mp4",
        question: "What is the capital of Bulgaria?",
        answers: {
            a: "Sofia",
            b: "Plovdiv",
        },
        correctAnswer: "a",
    },
    {
        video: "videos/vid13.mp4",
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
let currentPair = getRandomPair(pairs);

window.addEventListener("wheel", event => {
    if (currentState === "video") {
        currentState = "question";
        container.innerHTML = `<video src=${currentPair.video} width="500" height="1000" muted autoplay controls loop type="video/mp4"></video>`;
        currentPair = getRandomPair(pairs); // Change pair after user answers flashcard
    } else {
        currentState = "video";
        container.innerHTML = `<video src=${currentPair.video} width="500" height="1000" muted autoplay controls loop type="video/mp4"></video>`;
    }
})

function getRandomPair(array) {
    return array[Math.floor(Math.random() * array.length)];
}