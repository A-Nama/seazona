document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const quizScreen = document.getElementById("quiz-screen");
    const resultScreen = document.getElementById("result-screen");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const restartButton = document.getElementById("restart-button");
    const introContainer = document.getElementById("intro-container");

    const questions = [
        {
            question: "A group of sea creatures notice you and immediately swim over. One of them, a very unimpressed-looking pufferfish, raises an eyebrow.'Oh, great. Another one. Welcome, I guess?'",
            options: [
                { text: "Omg hi! This place is so cool! Wait… where am I?", type: "jellyfish" },
                { text: "Not the warmest welcome, but go on. What's the deal here?", type: "anglerfish" },
                { text: "Yeah, yeah. Just tell me what’s going on so I can leave", type: "shark" },
                { text: "Wow, so much enthusiasm. Do you practice that tone or does it come naturally?", type: "clownfish" },
                { text: "Honestly, mood. I didn’t ask to be here either.", type: "blobfish" },
                { text: "Okay but like… should I be concerned or are we chill?", type: "seaurchin" },
                { text: "Ugh, I knew this was gonna be weird. Just hit me with the plot already", type: "dolphin" },
                { text: "Wait. Are we in a dream? Or am I in a Pixar movie?", type: "seabunny" }
            ]
        },
        {
            question: "The pufferfish sighs. ‘Alright, listen. The city's been kinda… struggling. The water’s getting worse, and no one can agree on what to do about it. Some say it's the old magic fading, others think it’s—idk—something in the currents. You seem new, so you might see things differently. Wanna take a look?’ ",
            options: [
                { text: "Oooo sounds mysterious! Lead the wayyy~ ", type: "jellyfish" },
                { text: "Let me guess. It’s bad, and no one wants to deal with it? ", type: "anglerfish" },
                { text: "Sure, whatever. But if this is a trick, I’m out. ", type: "shark" },
                { text: "Is this a ‘take a look’ as in ‘fix it for us’ kind of deal? ", type: "clownfish" },
                { text: "Okay but like… do I have to move or can I just observe? ", type: "blobfish" },
                { text: "I mean, I could help, but what’s in it for me? " , type: "seaurchin" },
                { text: "Lowkey, I feel like I’m about to be scammed, but fine. ", type: "dolphin" },
                { text: "Do I get a cool adventure out of this? If yes, then absolutely. ", type: "seabunny" }
            ]
        },
        {
            question: "The two of you wander through the city, passing strange sea markets, glowing alleyways, and deep trenches where the water darkens. Life seems... normal, but there's tension beneath it. The pufferfish gestures toward a mysterious-looking shop wedged between two coral towers. ‘Alright, since you’re new here, maybe it’s better if you figure things out for yourself. That shopkeeper knows everything—but he’s a bit weird about giving answers. Think you can handle it?’",
            options: [
                { text: "Oooo cryptic! Love it. Let’s gooo~ ", type: "jellyfish" },
                { text: "If he ‘knows everything,’ let’s cut to the chase. ", type: "anglerfish" },
                { text: "If he wastes my time, I’m leaving. Simple as that ", type: "shark" },
                { text: "So we’re just cool with this being sketchy? Love that for us. ", type: "clownfish" },
                { text: "Ugh. Sounds exhausting. But I'll do it for my first sea friend, you. ", type: "blobfish" },
                { text: "If I don’t get a clear answer, I’m taking a souvenir and leaving. " , type: "seaurchin" },
                { text: "I’m gonna bet he speaks in riddles. Any takers? ", type: "dolphin" },
                { text: "What if he’s actually a wizard? Or like, an ancient sea spirit? ", type: "seabunny" }
            ]
        },
        {
            question: "Inside the shop, an old, eccentric sea turtle peers at you from behind a counter stacked with glowing trinkets. ‘Ahh, a newcomer! Interesting... What is it that you seek?’. Before you can answer, the turtle chuckles. ‘Wait. Don’t tell me. Let’s make this fun. Answer me this—if you could bring one thing from the land down here, what would it be?’ ",
            options: [
                { text: "Fairy lights. Underwater fairy lights. Vibes are everything. ", type: "jellyfish" },
                { text: "Books. Knowledge is power, and clearly, you all need some. ", type: "anglerfish" },
                { text: "Dumb question. A boat. Then I’d leave. ", type: "shark" },
                { text: "Popcorn. If we’re dealing with drama, I’m gonna snack through it. ", type: "clownfish" },
                { text: "A super comfy couch. Do you even have furniture here? ", type: "blobfish" },
                { text: "Signs. Big, bold ones. ‘No Littering,’ ‘Stop Being Dumb’—you get it. " , type: "seaurchin" },
                { text: "Pranks. A well-executed prank fixes any situation. ", type: "dolphin" },
                { text: "Bubble tea. I refuse to live without bubble tea. ", type: "seabunny" }
            ]
        }
    ];

    const resultImages = {
        "shark": "images/shark.png",
        "anglerfish": "images/anglerfish.png",
        "dolphin": "images/dolphin.png",
        "seabunny": "images/seabunny.png",
        "jellyfish": "images/jellyfish.png",
        "blobfish": "images/blobfish.png",
        "seaurchin": "images/seaurchin.png",
        "clownfish": "images/clownfish.png"
    };

    let currentQuestionIndex = 0;
    let score = {
        "jellyfish": 0,
        "anglerfish": 0,
        "shark": 0,
        "clownfish": 0,
        "blobfish": 0,
        "seaurchin": 0,
        "dolphin": 0,
        "seabunny": 0
    };

    function startQuiz() {
        startButton.style.display = "none";
        introContainer.style.display = "none";
        quizScreen.style.display = "block";
        gsap.from("#quiz-screen", { opacity: 0, y: 50, duration: 1 }); // Add GSAP animation
        showQuestion();
    }

    function showQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            questionText.textContent = currentQuestion.question;
            optionsContainer.innerHTML = "";

            currentQuestion.options.forEach((option) => {
                const button = document.createElement("button");
                button.textContent = option.text;
                button.classList.add("quiz-option");
                button.onclick = () => selectOption(option.type);
                optionsContainer.appendChild(button);
            });
        } else {
            showResults();
        }
    }

    function selectOption(type) {
        score[type]++;
        currentQuestionIndex++;
        showQuestion();
    }

    function showResults() {
        quizScreen.style.display = "none";
        resultScreen.style.display = "block";
        gsap.from("#result-screen", { opacity: 0, y: 50, duration: 1 }); // Add GSAP animation
    
        // Get the highest score(s)
        const maxScore = Math.max(...Object.values(score));
    
        // Find all types with the max score
        const highestScoreTypes = Object.keys(score).filter(type => score[type] === maxScore);
    
        // Randomly pick one if there's a tie
        const randomHighestType = highestScoreTypes[Math.floor(Math.random() * highestScoreTypes.length)];
    
        // Display the result image of the randomly selected type
        document.getElementById("result-image").src = resultImages[randomHighestType];
    }
    

    function restartQuiz() {
        resultScreen.style.display = "none";
        introContainer.style.display = "flex";
        startButton.style.display = "block";
        gsap.from("#intro-container", { opacity: 0, y: 50, duration: 1 }); // Add GSAP animation
        currentQuestionIndex = 0;
        Object.keys(score).forEach((key) => (score[key] = 0));
    }

    startButton.addEventListener("click", startQuiz);
    restartButton.addEventListener("click", restartQuiz);
});
