const pairs = [
    {
        video: "videos/vid1.mp4",
        question: "Why is it important to stay still during your shot?",
        answers: {
            a: "To make the vaccine more effective",
            b: "To not cause bruising",
        },
        correctAnswer: "b",
    },
    {
        video: "videos/vid2.mp4",
        question: "Will this proccess require anesthesia?",
        answers: {
            a: "Yes",
            b: "No",
        },
        correctAnswer: "a",
    },
    {
        video: "videos/vid3.mp4",
        question: "Why does this kind of armor not protect against bullets?",
        answers: {
            a: "It has holes",
            b: "The projectile is very powerful",
        },
        correctAnswer: "b",
    },
    {
        video: "videos/vid4.mp4",
        question: "How does the mine jump upwards?",
        answers: {
            a: "With a spring",
            b: "With a small explosion",
        },
        correctAnswer: "b",
    },
    {
        video: "videos/vid5.mp4",
        question: "How was the bullet activated?",
        answers: {
            a: "With a button",
            b: "With a nail",
        },
        correctAnswer: "b",
    },
    {
        video: "videos/vid6.mp4",
        question: "Why are your blood vessels so long?",
        answers: {
            a: "Because they wrap around your body 2 times",
            b: "Because they need to reach all the cells in your body",
        },
        correctAnswer: "b",
    },
    {
        video: "videos/vid7.mp4",
        question: "Is it safe to pull out an exposed splinter?",
        answers: {
            a: "Yes",
            b: "No",
        },
        correctAnswer: "a",
    },
    {
        video: "videos/vid8.mp4",
        question: "Why does the wound always become inflamed?",
        answers: {
            a: "Because new cells get created",
            b: "Because it can get infected",
        },
        correctAnswer: "a",
    },
    {
        video: "videos/vid9.mp4",
        question: "Is it safe to pull out the spines with tweezers?",
        answers: {
            a: "Yes",
            b: "No",
        },
        correctAnswer: "b",
    },
    {
        video: "videos/vid10.mp4",
        question: "Why should you freeze a skin tag?",
        answers: {
            a: "To remove it safely",
            b: "To make sure it doesn't grow",
        },
        correctAnswer: "a",
    },
    {
        video: "videos/vid11.mp4",
        question: "Why does a bee die after stinging?",
        answers: {
            a: "Because the stinger is connected to its organs",
            b: "Because it uses up a lot of energy after stinging",
        },
        correctAnswer: "a",
    },
    {
        video: "videos/vid12.mp4",
        question: "Why did they bury people alive?",
        answers: {
            a: "Because of bad medical practices",
            b: "For punishment",
        },
        correctAnswer: "a",
    },
    {
        video: "videos/vid13.mp4",
        question: "Why is E not used in the grading system?",
        answers: {
            a: "People thought it stands for Excellent",
            b: "It is used in the grading system",
        },
        correctAnswer: "a",
    },
];
const container = document.getElementById("container");
let currentState = "video";
let currentPair = pairs[1];

window.addEventListener("wheel", event => {
    if (currentState === "video") {
        currentState = "question";
        container.innerHTML = `
            <div id="question">
                <h1>${currentPair.question}</h1>
                <button id="a" onclick="processAnswer(self)">${currentPair.answers.a}</button>
                <button id="b" onclick="processAnswer(self)">${currentPair.answers.b}</button>
            </div>
        `;
    } else {
        currentState = "video";
        container.innerHTML = `<video src=${currentPair.video} width="500" height="1000" muted autoplay controls loop type="video/mp4"></video>`;
    }
})

function processAnswer(page) {
    const correct = currentPair.correctAnswer;
    container.innerHTML = `
        <div id="question">
            <h1>${currentPair.question}</h1>
            <button id=${(correct === "a") ? "correct" : "incorrect"}>${currentPair.answers.a}</button>
            <button id=${(correct === "b") ? "correct" : "incorrect"}>${currentPair.answers.b}</button>
        </div>
    `;
    currentPair = getRandomPair(pairs); // Change pair after user answers
}

function getRandomPair(array) {
    return array[Math.floor(Math.random() * array.length)];
}