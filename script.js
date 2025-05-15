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
        question: "A group of sea creatures are now staring at you like you just fell out of the sky (which, technically, you did). One unimpressed-looking pufferfish floats over. ‘Well, this is awkward. Another one.’",
        options: [
            { text: "Umm hi? This is kinda beautiful and weird—love it.", type: "jellyfish" },
            { text: "Not the warmest welcome, but go on. What’s the deal here?", type: "anglerfish" },
            { text: "Okay, weird bubble dream. Let’s get this over with.", type: "shark" },
            { text: "You’ve got sass. I like that. Now what?", type: "clownfish" },
            { text: "I didn’t sign up for this… but here we are.", type: "blobfish" },
            { text: "Is this some kind of magical punishment? Be honest.", type: "seaurchin" },
            { text: "Plot twist: I’m actually the chosen one, huh?", type: "dolphin" },
            { text: "Wait. Is this a crossover episode of my dreams?", type: "seabunny" }
        ]
    },
    {
        question: "The pufferfish sighs and gestures around. ‘Things have been weird lately. Stuff’s been showing up in the water—things that don’t belong. Some blame old magic. Others say it’s… coming from above.’ He eyes you. ‘You’re not from above, are you?’",
        options: [
            { text: "Define 'from above'. Because this escalated quickly.", type: "jellyfish" },
            { text: "Maybe. Or maybe you’re just avoiding the real issue.", type: "anglerfish" },
            { text: "Wow, suspicious much? I literally just got here.", type: "shark" },
            { text: "Oh, I love a sea mystery. Please continue.", type: "clownfish" },
            { text: "Honestly, I don’t even know who I am right now.", type: "blobfish" },
            { text: "So… ocean’s messy. Got it. Why am I involved though?", type: "seaurchin" },
            { text: "Let’s skip to the part where I’m the solution.", type: "dolphin" },
            { text: "If this turns magical, I demand sparkles.", type: "seabunny" }
        ]
    },
    {
        question: "He takes you through glowing trenches and bustling coral cities. Everything seems fine... at first. Then you notice odd objects tangled in reefs—bright wrappers, rings, even a fork. The locals pretend not to see. ‘Normal,’ someone mutters. You sure about that?",
        options: [
            { text: "Yikes. This doesn’t look natural at all.", type: "jellyfish" },
            { text: "Who's dumping junk down here?", type: "anglerfish" },
            { text: "Someone’s clearly not cleaning up after themselves.", type: "shark" },
            { text: "This is giving cursed souvenir energy.", type: "clownfish" },
            { text: "Weirdly, this feels like my room. Huh.", type: "blobfish" },
            { text: "What happens if I poke it?", type: "seaurchin" },
            { text: "Bet I could sell this on SeaBay.", type: "dolphin" },
            { text: "This is either pollution or a very elaborate prank.", type: "seabunny" }
        ]
    },
    {
        question: "You're led to an ancient underwater archive guarded by a very sleepy sea lion. ‘If you must know,’ he yawns, ‘these objects fall from the sky currents. We used to sing them away. Now… they just stay.’ He dozes off. What do you take from that?",
        options: [
            { text: "The songs stopped working? That’s kinda sad.", type: "jellyfish" },
            { text: "So the system failed, and no one fixed it?", type: "anglerfish" },
            { text: "Cool story, but let’s focus on actual solutions.", type: "shark" },
            { text: "He’s asleep but lowkey wise. Respect.", type: "clownfish" },
            { text: "Relatable. I’d nap too if everything was broken.", type: "blobfish" },
            { text: "Songs or no songs, we need bins. Big ones.", type: "seaurchin" },
            { text: "I could remix that song and make it go viral.", type: "dolphin" },
            { text: "Can I learn the song? Or like… vibe with the sea?", type: "seabunny" }
        ]
    },
    {
        question: "Near the reef’s edge, a glowing eel shows you a cave. Inside: piles of land-trash. ‘Some say the barrier between worlds is fading,’ she whispers. ‘Others think the surface just stopped caring.’ You feel the weight of it. What would you do?",
        options: [
            { text: "Turn it into ocean art. Reclaim the ugly.", type: "jellyfish" },
            { text: "Track it. Trace it. Find who’s responsible.", type: "anglerfish" },
            { text: "Block the current. Cut the source. Fix it.", type: "shark" },
            { text: "Host a sea fashion show—Trash to Fash!", type: "clownfish" },
            { text: "Leave it. Maybe it’ll sort itself out. Or not.", type: "blobfish" },
            { text: "Build signs. ‘STOP LITTERING, AIR BREATHERS.’", type: "seaurchin" },
            { text: "Make a plan. Get others to care. Easy-ish.", type: "dolphin" },
            { text: "Start a sea rebellion with glitter and sass.", type: "seabunny" }
        ]
    },
    {
        question: "You return to the city and notice something new: kids playing with broken toy parts, coral stained in strange colors, fish coughing (??). The pufferfish frowns. ‘You still think this is just magic fading?’",
        options: [
            { text: "This isn’t just magic—it’s a mess.", type: "jellyfish" },
            { text: "Something unnatural is poisoning this place.", type: "anglerfish" },
            { text: "Someone needs to be held accountable.", type: "shark" },
            { text: "Okay, but how do we get the others to *see* it?", type: "clownfish" },
            { text: "It’s all too much. I'm tired just looking at it.", type: "blobfish" },
            { text: "This is what happens when no one listens.", type: "seaurchin" },
            { text: "Let’s make a plan. Phase 1: awareness.", type: "dolphin" },
            { text: "What if we made a musical about this mess?", type: "seabunny" }
        ]
    },
    {
        question: "The sea grows quiet. You’re asked one last thing before you choose your path: What role do you think you’d play in restoring this world?",
        options: [
            { text: "The dreamer who brings hope where it's needed.", type: "jellyfish" },
            { text: "The truth-seeker who uncovers what’s hidden.", type: "anglerfish" },
            { text: "The protector who fights to the end.", type: "shark" },
            { text: "The wildcard who shifts the story with humor.", type: "clownfish" },
            { text: "The silent strength who shows up when it counts.", type: "blobfish" },
            { text: "The rebel who doesn’t wait for permission.", type: "seaurchin" },
            { text: "The leader who brings others together.", type: "dolphin" },
            { text: "The gentle chaos who reminds everyone to believe.", type: "seabunny" }
        ]
    }
];


    const resultImages = {
        "shark": "images/shark.png",
        "sea-turtle": "images/sea-turtle.png",
        "dolphin": "images/dolphin.png",
        "octopus": "images/octopus.png",
        "jellyfish": "images/jellyfish.png",
        "orca": "images/orca.png",
        "manta-ray": "images/manta-ray.png",
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
