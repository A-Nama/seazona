// Quiz Data Structure
const quizData = {
    // Starting narration
    intro: "Welcome to the depths of the ocean. The water here holds many mysteries, and countless creatures with unique personalities. Let's discover which sea creature you are most like...",
    
    // Questions with character interactions
    questions: [
        {
            narration: "As you swim deeper into the blue, a curious octopus approaches you...",
            character: {
                name: "Ollie the Octopus",
                image: "images/octopus.png",
                text: "When facing a challenge, how do you typically respond?"
            },
            options: [
                { text: "I analyze all possible solutions before acting", score: { dolphin: 2, turtle: 1, octopus: 3, shark: 0 } },
                { text: "I go with my instincts and act quickly", score: { dolphin: 1, turtle: 0, octopus: 0, shark: 3 } },
                { text: "I seek advice from friends before deciding", score: { dolphin: 3, turtle: 1, octopus: 1, shark: 0 } },
                { text: "I take my time and carefully consider my options", score: { dolphin: 0, turtle: 3, octopus: 2, shark: 0 } }
            ]
        },
        {
            narration: "You continue your journey and come across a graceful sea turtle gliding through the water...",
            character: {
                name: "Tori the Turtle",
                image: "images/turtle.png",
                text: "How would you describe your approach to life's journey?"
            },
            options: [
                { text: "Slow and steady, enjoying every moment", score: { dolphin: 0, turtle: 3, octopus: 1, shark: 0 } },
                { text: "Fast-paced and adventurous", score: { dolphin: 2, turtle: 0, octopus: 0, shark: 3 } },
                { text: "Balanced between excitement and relaxation", score: { dolphin: 3, turtle: 2, octopus: 1, shark: 1 } },
                { text: "Cautious but curious", score: { dolphin: 1, turtle: 2, octopus: 3, shark: 0 } }
            ]
        },
        {
            narration: "A sleek shark circles around you, its presence commanding attention...",
            character: {
                name: "Sammy the Shark",
                image: "images/shark.png",
                text: "When you have a goal in mind, how do you pursue it?"
            },
            options: [
                { text: "I'm determined and won't let anything stand in my way", score: { dolphin: 1, turtle: 0, octopus: 0, shark: 3 } },
                { text: "I'm flexible and can adapt my approach as needed", score: { dolphin: 2, turtle: 1, octopus: 3, shark: 0 } },
                { text: "I take my time and progress steadily", score: { dolphin: 0, turtle: 3, octopus: 1, shark: 0 } },
                { text: "I work with others to achieve shared goals", score: { dolphin: 3, turtle: 1, octopus: 1, shark: 0 } }
            ]
        },
        {
            narration: "A playful dolphin swims up and performs a quick spin around you...",
            character: {
                name: "Dora the Dolphin",
                image: "images/dolphin.png",
                text: "How do you prefer to spend your free time?"
            },
            options: [
                { text: "Socializing with friends and family", score: { dolphin: 3, turtle: 1, octopus: 0, shark: 0 } },
                { text: "Exploring new places and having adventures", score: { dolphin: 2, turtle: 0, octopus: 1, shark: 3 } },
                { text: "Relaxing and recharging in a peaceful environment", score: { dolphin: 0, turtle: 3, octopus: 1, shark: 0 } },
                { text: "Learning new skills or working on creative projects", score: { dolphin: 1, turtle: 0, octopus: 3, shark: 1 } }
            ]
        }
    ],
    
    // Results based on personality types
    results: {
        dolphin: {
            title: "You are a Dolphin!",
            image: "images/dolphin-result.png",
            description: "Intelligent, social, and playful, you thrive in communities and are known for your problem-solving abilities. You have a natural curiosity and enjoy exploring new ideas. Your friendly nature makes you approachable, and you're often the one bringing people together."
        },
        turtle: {
            title: "You are a Sea Turtle!",
            image: "images/turtle-result.png",
            description: "Wise, patient, and resilient, you take life at your own pace. You're not easily rattled by life's challenges and prefer to take the long view. Your calm demeanor and thoughtful approach to problems make you a reliable friend and advisor."
        },
        octopus: {
            title: "You are an Octopus!",
            image: "images/octopus-result.png",
            description: "Creative, intelligent, and adaptable, you can solve problems in unique ways. You're comfortable working independently and have many different interests and talents. Your ability to think outside the box and adjust to new situations makes you exceptionally resourceful."
        },
        shark: {
            title: "You are a Shark!",
            image: "images/shark-result.png",
            description: "Confident, focused, and determined, you know what you want and go after it. You're not afraid to take charge and lead others. Your drive and ambition help you accomplish your goals, and your decisive nature allows you to act quickly when needed."
        }
    }
};

// Track scores and current question
let scores = { dolphin: 0, turtle: 0, octopus: 0, shark: 0 };
let currentQuestion = 0;

// DOM Elements
const introScreen = document.getElementById('intro-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const narrationElement = document.getElementById('narration');
const characterElement = document.getElementById('character');
const characterImg = document.getElementById('character-img');
const characterText = document.getElementById('character-text');
const optionsElement = document.getElementById('options');

// Initialize GSAP timeline
const tl = gsap.timeline();

// Start button event listener
startButton.addEventListener('click', startQuiz);

// Restart button event listener
restartButton.addEventListener('click', () => {
    // Reset the quiz
    scores = { dolphin: 0, turtle: 0, octopus: 0, shark: 0 };
    currentQuestion = 0;
    
    // Hide result screen and show intro
    resultScreen.style.display = 'none';
    introScreen.style.display = 'block';
    
    // Animate intro screen
    gsap.fromTo(introScreen, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1 }
    );
});

// Initial animation when page loads
window.addEventListener('DOMContentLoaded', () => {
    gsap.fromTo(introScreen, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
});

// Start the quiz
function startQuiz() {
    // Hide intro and show quiz screen
    introScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    
    // Set initial opacity to 0
    gsap.set(quizScreen, { opacity: 0 });
    
    // Display first question
    displayQuestion(currentQuestion);
}

// Display a question
function displayQuestion(questionIndex) {
    const question = quizData.questions[questionIndex];
    
    // Clear previous options
    optionsElement.innerHTML = '';
    
    // Reset character visibility
    gsap.set(characterElement, { opacity: 0 });
    
    // Create timeline for animations
    const tl = gsap.timeline();
    
    // Fade in quiz container
    tl.to(quizScreen, { opacity: 1, duration: 0.8 });
    
    // Set and animate narration
    narrationElement.textContent = question.narration;
    tl.from(narrationElement, { opacity: 0, y: -20, duration: 1 });
    
    // Set character image and text
    characterImg.src = question.character.image;
    characterText.textContent = question.character.text;
    
    // Animate character appearance
    tl.to(characterElement, { 
        opacity: 1, 
        duration: 1,
        onComplete: () => {
            // Animate the character with a gentle floating motion
            gsap.to(characterImg, { 
                y: "+=10", 
                duration: 2, 
                repeat: -1, 
                yoyo: true, 
                ease: "sine.inOut" 
            });
        }
    });
    
    // Create and animate options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option.text;
        
        // Add click event to option
        optionElement.addEventListener('click', () => selectOption(option.score));
        
        optionsElement.appendChild(optionElement);
        
        // Stagger animation for options
        tl.to(optionElement, { 
            opacity: 1, 
            y: 0, 
            duration: 0.5 
        }, `-=0.3`);
    });
}

// Modified selectOption function to update progress bar
function selectOption(optionScore) {
    // Update scores
    for (const creature in optionScore) {
        scores[creature] += optionScore[creature];
    }
    
    // Proceed to next question or show result
    currentQuestion++;
    
    // Update progress bar
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        const progress = (currentQuestion / quizData.questions.length) * 100;
        gsap.to(progressBar, {
            width: `${progress}%`,
            duration: 0.5,
            ease: "power1.out"
        });
    }
    
    if (currentQuestion < quizData.questions.length) {
        // Animate transition to next question
        const tl = gsap.timeline();
        
        tl.to(quizScreen, { 
            opacity: 0.3, 
            duration: 0.5,
            onComplete: () => {
                displayQuestion(currentQuestion);
                gsap.to(quizScreen, { opacity: 1, duration: 0.5 });
            }
        });
        
        // Add a little animation to the underwater city elements during transition
        gsap.to('.underwater-element', {
            scale: 1.05,
            duration: 0.5,
            stagger: 0.05,
            yoyo: true,
            repeat: 1
        });
    } else {
        showResult();
        
        // Add celebration animations when showing result
        const tl = gsap.timeline();
        
        // Animate underwater city elements for celebration
        tl.to('.underwater-element', {
            scale: 1.1,
            duration: 0.7,
            stagger: 0.1,
            ease: "back.out(1.7)"
        });
        
        // Extra bubbles for celebration
        createCelebrationBubbles();
    }
}

// Create extra bubbles for celebration
function createCelebrationBubbles() {
    const container = document.getElementById('bubbles-container');
    const bubbleCount = 20;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Random size between 10px and 40px
        const size = Math.random() * 30 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Random horizontal position
        bubble.style.left = `${Math.random() * 100}%`;
        
        // Start position at bottom
        bubble.style.bottom = '0';
        
        // Random animation duration between 5s and 15s (faster for celebration)
        const duration = Math.random() * 10 + 5;
        bubble.style.animationDuration = `${duration}s`;
        
        // Small random delay
        const delay = Math.random() * 2;
        bubble.style.animationDelay = `${delay}s`;
        
        container.appendChild(bubble);
        
        // Remove bubble when animation completes to avoid clutter
        setTimeout(() => {
            if (container.contains(bubble)) {
                container.removeChild(bubble);
            }
        }, (duration + delay) * 1000);
    }
}

// Enhanced showResult function with more animations
function showResult() {
    // Find the creature with highest score
    let highestScore = 0;
    let resultCreature = '';
    
    for (const creature in scores) {
        if (scores[creature] > highestScore) {
            highestScore = scores[creature];
            resultCreature = creature;
        }
    }
    
    // Get result data
    const result = quizData.results[resultCreature];
    
    // Set result content
    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-img').src = result.image;
    document.getElementById('result-description').textContent = result.description;
    
    // Hide quiz screen and show result
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    
    // Animate result appearance
    const tl = gsap.timeline();
    
    tl.fromTo(resultScreen, 
        { opacity: 0, scale: 0.9 }, 
        { opacity: 1, scale: 1, duration: 1 }
    );
    
    // Add a celebratory animation
    tl.to('#result-img', { 
        rotation: 360, 
        duration: 1.5, 
        ease: "back.out(1.7)" 
    });
    
    // Add glow effect to result image
    tl.to('#result-img', {
        filter: 'drop-shadow(0 0 15px rgba(100, 200, 255, 0.8))',
        duration: 1
    }, "-=1");
}