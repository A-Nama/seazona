document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const quizScreen = document.getElementById("quiz-screen");
    const resultScreen = document.getElementById("result-screen");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const restartButton = document.getElementById("restart-button");

    const questions = [
        {
            question: "What do you enjoy doing in your free time?",
            options: ["Exploring new places", "Relaxing by the water", "Hanging out with friends", "Trying new food"]
        },
        {
            question: "Pick a color that speaks to you",
            options: ["Deep blue", "Turquoise", "Vibrant coral", "Soft lavender"]
        },
        {
            question: "What's your ideal weekend?",
            options: ["Going on an adventure", "Chilling at the beach", "Hosting a party", "Watching movies"]
        }
    ];

    let currentQuestionIndex = 0;
    let selectedAnswers = [];

    function startQuiz() {
        console.log("Start button clicked");
        startButton.style.display = "none"; // Hide Start button
        quizScreen.style.display = "block"; // Show Quiz
        showQuestion();
    }

    function showQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            questionText.textContent = currentQuestion.question;
            optionsContainer.innerHTML = "";

            currentQuestion.options.forEach((option, index) => {
                const button = document.createElement("button");
                button.textContent = option;
                button.classList.add("quiz-option");
                button.onclick = () => selectOption(index);
                optionsContainer.appendChild(button);
            });
        } else {
            showResults();
        }
    }

    function selectOption(index) {
        selectedAnswers.push(index);
        currentQuestionIndex++;
        showQuestion();
    }

    function showResults() {
        quizScreen.style.display = "none";
        resultScreen.style.display = "block";

        // Simple logic for results
        const resultTitle = document.getElementById("result-title");
        const resultDescription = document.getElementById("result-description");

        const personalityResults = [
            { title: "Dolphin", description: "You're playful, social, and full of energy!" },
            { title: "Sea Turtle", description: "You love peace, the ocean, and taking life slow." },
            { title: "Shark", description: "You're bold, confident, and a natural leader." },
            { title: "Jellyfish", description: "You’re mysterious, artistic, and go with the flow." }
        ];

        let finalResult = selectedAnswers.reduce((sum, num) => sum + num, 0) % personalityResults.length;
        resultTitle.textContent = personalityResults[finalResult].title;
        resultDescription.textContent = personalityResults[finalResult].description;
    }

    function restartQuiz() {
        resultScreen.style.display = "none";
        startButton.style.display = "block";
        currentQuestionIndex = 0;
        selectedAnswers = [];
    }

    startButton.addEventListener("click", startQuiz);
    restartButton.addEventListener("click", restartQuiz);
});
