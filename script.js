
const questions = [
  {
    category: "THE SCENARIO",
    question: "Your best friend gets slapped. What do you do?",
    answers: [
      { text: "Immediately step in and tell them to back off.", type: "wildcard", traits: [0, 0, 1, -1] },
      { text: "Check on my friend first. Are they okay?", type: "social", traits: [0, 0, 1, 0] },
      { text: "Try to calm everyone down before things escalate.", type: "master", traits: [1, 0, 0, 1] },
      { text: "Get an adult involved. I'm not physically solving this.", type: "detector", traits: [1, 0, -1, 1] }
    ]
  },
  {
    category: "THE ANIMAL KINGDOM",
    question: "You see a cat on the side of the road, but you think it's dead. What do you do?",
    answers: [
      { text: "Stop somewhere safe and check if it's okay.", type: "social", traits: [0, 1, 0, 0] },
      { text: "Find someone who can help, like an adult or animal rescue.", type: "master", traits: [1, 0, 0, 1] },
      { text: "I can't handle this emotionally. I need a minute.", type: "dreamer", traits: [0, 0, 0, -1] },
      { text: "Keep going, but feel bad about it all day.", type: "overthinker", traits: [1, 0, -1, 0] }
    ]
  },
  {
    category: "THE SOCIAL EXPERIMENT",
    question: "You're at school and someone farts. What do you do?",
    answers: [
      { text: "Laugh immediately. I have no self-control.", type: "wildcard", traits: [0, 0, 1, -1] },
      { text: "Pretend nothing happened. Professionalism is important.", type: "independent", traits: [0, 0, -1, 1] },
      { text: "Look around to identify the suspect.", type: "detector", traits: [1, 1, 0, 0] },
      { text: "Make a comment that makes everything ten times worse.", type: "social", traits: [0, 0, 1, -1] }
    ]
  },
  {
    category: "THE IMPOSSIBLE OPPORTUNITY",
    question: "You can teleport anywhere, at any time. Where are you going?",
    answers: [
      { text: "Somewhere beautiful I've always wanted to visit.", type: "dreamer", traits: [0, 1, 0, -1] },
      { text: "Somewhere nobody knows me. Peace and quiet.", type: "independent", traits: [0, 1, -1, 0] },
      { text: "Straight to my friend's house. Imagine their reaction.", type: "social", traits: [0, 1, 1, -1] },
      { text: "I'm visiting approximately 47 countries before lunch.", type: "wildcard", traits: [0, 1, 1, -1] }
    ]
  },
  {
    category: "MONEY, MONEY, MONEY",
    question: "You have unlimited money. What are you buying?",
    answers: [
      { text: "A ridiculous house with absolutely everything.", type: "dreamer", traits: [0, 1, 0, 0] },
      { text: "Experiences, holidays and adventures.", type: "wildcard", traits: [0, 1, 1, -1] },
      { text: "I'm investing it and making EVEN MORE money.", type: "master", traits: [1, 0, 0, 1] },
      { text: "I'm buying things for everyone I care about.", type: "social", traits: [0, 0, 1, 0] }
    ]
  },
  {
    category: "A QUESTIONABLE EXPERIMENT",
    question: "You can pause everyone else for 24 hours (they'll all be safe), or add one billion new people to Earth. Which do you choose?",
    answers: [
      { text: "Pause everyone. Finally, some peace.", type: "independent", traits: [0, 0, -1, 1] },
      { text: "Add a billion people. I want to see what happens.", type: "wildcard", traits: [0, 1, 1, -1] },
      { text: "Neither. This sounds like a terrible idea.", type: "overthinker", traits: [1, 0, 0, 1] },
      { text: "Spend the entire time trying to find a loophole.", type: "detector", traits: [1, 1, 0, 0] }
    ]
  },
  {
    category: "THE UNFORTUNATE DISCOVERY",
    question: "You're accidentally sent a screenshot of someone talking about you. What do you do?",
    answers: [
      { text: "Read the entire conversation. Obviously.", type: "detector", traits: [1, 1, 0, 0] },
      { text: "Ask the person directly what's going on.", type: "social", traits: [0, 0, 1, 1] },
      { text: "Pretend I never saw it. I don't need the drama.", type: "independent", traits: [0, 0, -1, 0] },
      { text: "Analyse every single word and punctuation mark.", type: "overthinker", traits: [1, 0, 0, 1] }
    ]
  },
  {
    category: "THE SUPERPOWER DEPARTMENT",
    question: "You're given one completely useless superpower. What are you choosing?",
    answers: [
      { text: "Knowing exactly when someone is about to sneeze.", type: "detector", traits: [1, 1, 0, 0] },
      { text: "Being able to speak fluent dolphin.", type: "dreamer", traits: [0, 1, 0, -1] },
      { text: "Making toast perfectly every single time.", type: "master", traits: [0, 0, 0, 1] },
      { text: "Knowing the exact location of any missing sock.", type: "wildcard", traits: [0, 1, 0, -1] }
    ]
  },
  {
    category: "SURVIVAL MODE",
    question: "You're stranded on an island with three other people. What's your role?",
    answers: [
      { text: "The leader. Someone needs to organise this.", type: "master", traits: [1, 0, 1, 1] },
      { text: "The problem solver. I'll figure out how to get us out.", type: "detector", traits: [1, 1, 0, 1] },
      { text: "The morale department. Everyone needs to stay sane.", type: "social", traits: [0, 0, 1, 0] },
      { text: "The person who somehow makes everything worse.", type: "chaos", traits: [0, 1, 1, -1] }
    ]
  },
  {
    category: "THE CHALLENGE",
    question: "Someone challenges you to something you've never done before. What happens?",
    answers: [
      { text: "Accept immediately. I'll figure it out.", type: "wildcard", traits: [0, 1, 1, -1] },
      { text: "Research it first. I don't like being unprepared.", type: "master", traits: [1, 1, 0, 1] },
      { text: "Depends who's watching.", type: "social", traits: [0, 0, 1, 0] },
      { text: "Absolutely not. I enjoy being alive and comfortable.", type: "overthinker", traits: [1, 0, -1, 1] }
    ]
  },
  {
    category: "THE MYSTERY",
    question: "You discover a secret door in your house. What do you do?",
    answers: [
      { text: "Open it immediately.", type: "wildcard", traits: [0, 1, 0, -1] },
      { text: "Investigate it carefully first.", type: "detector", traits: [1, 1, 0, 1] },
      { text: "Get someone else to open it.", type: "social", traits: [0, 0, 1, 0] },
      { text: "Spend three hours imagining what could be behind it.", type: "dreamer", traits: [0, 1, 0, -1] }
    ]
  },
  {
    category: "THE BIG MYSTERY",
    question: "You're allowed to know the answer to ONE mystery. What are you choosing?",
    answers: [
      { text: "What happens after we die?", type: "dreamer", traits: [0, 1, 0, 0] },
      { text: "What's actually happening in the deepest parts of the ocean?", type: "detector", traits: [1, 1, 0, 0] },
      { text: "What are other people REALLY thinking?", type: "overthinker", traits: [1, 1, 1, 0] },
      { text: "What's the biggest secret in human history?", type: "chaos", traits: [0, 1, 0, -1] }
    ]
  },
  {
    category: "THE GROUP PROJECT",
    question: "Your group project has gone completely wrong. What's your response?",
    answers: [
      { text: "Take control. We're finishing this.", type: "master", traits: [1, 0, 1, 1] },
      { text: "Try to get everyone working together.", type: "social", traits: [0, 0, 1, 1] },
      { text: "Quietly do most of it myself.", type: "independent", traits: [1, 0, -1, 1] },
      { text: "Accept our fate. It was nice knowing everyone.", type: "chaos", traits: [0, 0, 0, -1] }
    ]
  },
  {
    category: "SUDDEN FAME",
    question: "You wake up tomorrow and discover you're famous. What are you famous for?",
    answers: [
      { text: "Something incredibly intelligent or impressive.", type: "master", traits: [1, 0, 0, 1] },
      { text: "Something completely ridiculous that went viral.", type: "wildcard", traits: [0, 1, 1, -1] },
      { text: "Creating something amazing.", type: "dreamer", traits: [0, 1, 0, 1] },
      { text: "I have absolutely no idea, but I'm concerned.", type: "overthinker", traits: [1, 0, -1, 1] }
    ]
  },
  {
    category: "THE FINAL QUESTION",
    question: "You can relive one day of your life, change one decision, or see one day in your future. What do you choose?",
    answers: [
      { text: "Relive a really happy day.", type: "dreamer", traits: [0, 0, 0, -1] },
      { text: "Change a decision and see what happens.", type: "overthinker", traits: [1, 1, 0, 0] },
      { text: "See one day in my future.", type: "detector", traits: [1, 1, 0, 1] },
      { text: "None. I'm curious where life goes without interference.", type: "independent", traits: [0, 1, -1, -1] }
    ]
  }
];

const personalities = {
  chaos: {
    name: "THE CHAOS ARCHITECT",
    subtitle: "Organised chaos is still chaos.",
    description: "You have approximately seventeen plans, six backup plans and absolutely no guarantee you'll follow any of them. Somehow, things usually work out. Your brain is a very busy place.",
    strength: "Adaptability. You can make something out of almost any situation.",
    weakness: "Finishing what you started. The next exciting thing is always calling.",
    warning: "May spontaneously change plans while executing them."
  },
  detector: {
    name: "THE HUMAN DETECTOR",
    subtitle: "Nothing gets past you. Unfortunately.",
    description: "You notice details other people miss. A strange pause, a suspicious look, a tiny inconsistency. You are basically a walking investigation department, even when nobody asked for one.",
    strength: "Observation. You connect details and spot patterns.",
    weakness: "Sometimes you investigate things that really did not need investigating.",
    warning: "Will remember something you said three years ago."
  },
  master: {
    name: "THE MASTER PLAN",
    subtitle: "There is a spreadsheet for this. Probably.",
    description: "You like having a direction, a strategy and at least some idea of what happens next. You're often the person everyone turns to when things get complicated. You may occasionally forget that not everyone has a five-step plan.",
    strength: "Planning. You can turn a messy situation into manageable steps.",
    weakness: "Unexpected changes are not always your favourite surprise.",
    warning: "May attempt to organise a completely spontaneous event."
  },
  dreamer: {
    name: "THE PROFESSIONAL DAYDREAMER",
    subtitle: "Physically here. Mentally elsewhere.",
    description: "Your imagination does not have an off switch. You can turn an ordinary moment into an entire imaginary universe. You see possibilities everywhere, although remembering what you were supposed to be doing can be a challenge.",
    strength: "Imagination. You see ideas and possibilities others might miss.",
    weakness: "Your thoughts sometimes take you on a very long detour.",
    warning: "May be mentally on holiday during an important conversation."
  },
  social: {
    name: "THE SOCIAL ENGINE",
    subtitle: "Powered by people and questionable conversations.",
    description: "People are a major part of your world. You enjoy sharing experiences, making connections and bringing energy into a room. You can turn an ordinary conversation into an entire event.",
    strength: "Connection. You understand the importance of people and relationships.",
    weakness: "Sometimes other people's opinions get a little too much space in your head.",
    warning: "May accidentally become everyone's unofficial life adviser."
  },
  independent: {
    name: "THE INDEPENDENT VARIABLE",
    subtitle: "Your rules. Your universe.",
    description: "You value doing things your own way. You don't need a crowd to enjoy yourself, and you aren't particularly interested in following something just because everyone else is doing it. Originality is your thing.",
    strength: "Independence. You're comfortable thinking for yourself.",
    weakness: "You might occasionally forget to let other people in.",
    warning: "May ignore perfectly reasonable instructions because they weren't your idea."
  },
  overthinker: {
    name: "THE OVERTHINKING EXPERT",
    subtitle: "What if? What if not? What if both?",
    description: "Your brain likes to examine every angle. You think ahead, consider consequences and notice things that deserve a second look. Unfortunately, your internal discussion committee does not always know when to finish its meeting.",
    strength: "Careful thinking. You consider possibilities before making decisions.",
    weakness: "Decision-making can become a full-time occupation.",
    warning: "May replay a conversation from 2019 for absolutely no reason."
  },
  wildcard: {
    name: "THE WILD CARD",
    subtitle: "Nobody knows what's happening. Including you.",
    description: "You enjoy possibility, surprise and the occasional questionable idea. You're curious about what happens when you try something different. Predictability is useful, but it isn't always exciting.",
    strength: "Open-mindedness. You're willing to explore new experiences.",
    weakness: "Sometimes excitement wins over thinking things through.",
    warning: "May say 'I've got an idea' immediately before an unexpected situation."
  }
};

const traitNames = [
  { low: "INSTINCTIVE", high: "ANALYTICAL" },
  { low: "FAMILIAR", high: "EXPLORATIVE" },
  { low: "RESERVED", high: "OUTGOING" },
  { low: "SPONTANEOUS", high: "STRUCTURED" }
];

let currentQuestion = 0;
let selectedAnswer = null;
let answersGiven = [];
let typeScores = {};
let traitScores = [0, 0, 0, 0];

const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");

function showQuestion() {
  const question = questions[currentQuestion];

  document.getElementById("question-count").textContent =
    `QUESTION ${currentQuestion + 1} / ${questions.length}`;

  document.getElementById("progress-fill").style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  document.getElementById("question-category").textContent = question.category;
  document.getElementById("question-text").textContent = question.question;

  const answersContainer = document.getElementById("answers");
  answersContainer.innerHTML = "";

  selectedAnswer = null;
  nextButton.disabled = true;
  nextButton.textContent = currentQuestion === questions.length - 1
    ? "REVEAL MY RESULT →"
    : "NEXT QUESTION →";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.textContent = answer.text;

    button.addEventListener("click", () => {
      document.querySelectorAll(".answer-option").forEach(option => {
        option.classList.remove("selected");
      });

      button.classList.add("selected");
      selectedAnswer = index;
      nextButton.disabled = false;
    });

    answersContainer.appendChild(button);
  });
}

function calculateResults() {
  typeScores = {};
  Object.keys(personalities).forEach(type => {
    typeScores[type] = 0;
  });

  traitScores = [0, 0, 0, 0];

  answersGiven.forEach((answer, index) => {
    typeScores[answer.type] += 2;

    // Give a small secondary influence to the neighbouring type.
    const allTypes = Object.keys(personalities);
    const typeIndex = allTypes.indexOf(answer.type);
    const secondaryType = allTypes[(typeIndex + 1) % allTypes.length];
    typeScores[secondaryType] += 0.5;

    answer.traits.forEach((value, traitIndex) => {
      traitScores[traitIndex] += value;
    });
  });
}

function showResults() {
  calculateResults();

  const sortedTypes = Object.entries(typeScores)
    .sort((a, b) => b[1] - a[1]);

  const winner = personalities[sortedTypes[0][0]];

  const traitBars = traitNames.map((trait, index) => {
    const score = traitScores[index];
    const percentage = Math.max(5, Math.min(95, 50 + score * 3.3));

    return `
      <div class="trait-row">
        <div class="trait-labels">
          <span>${trait.low}</span>
          <span>${trait.high}</span>
        </div>
        <div class="trait-track">
          <div class="trait-marker" style="left:${percentage}%"></div>
        </div>
      </div>
    `;
  }).join("");

  document.querySelector(".question-container").innerHTML = `
    <div class="result-content">
      <p class="eyebrow">EXPERIMENT COMPLETE · RESULTS GENERATED</p>
      <p class="result-intro">THE MACHINE HAS IDENTIFIED YOU AS...</p>
      <h2 class="result-title">${winner.name}</h2>
      <h3 class="result-subtitle">${winner.subtitle}</h3>

      <p class="result-description">${winner.description}</p>

      <div class="result-details">
        <div class="result-detail">
          <span>YOUR SUPERPOWER</span>
          <p>${winner.strength}</p>
        </div>
        <div class="result-detail">
          <span>YOUR QUESTIONABLE HABIT</span>
          <p>${winner.weakness}</p>
        </div>
        <div class="result-detail">
          <span>OFFICIAL WARNING</span>
          <p>${winner.warning}</p>
        </div>
      </div>

      <div class="trait-section">
        <h3>YOUR PERSONALITY PROFILE</h3>
        ${traitBars}
      </div>

      <p class="result-disclaimer">
        This is an entertainment quiz, not a scientific personality assessment.
        You're more complicated than four dimensions and a computer.
      </p>

      <button id="restart-button">TAKE THE QUIZ AGAIN ↻</button>
    </div>
  `;

  document.getElementById("question-count").textContent = "RESULTS";
  document.getElementById("progress-fill").style.width = "100%";

  document.getElementById("restart-button").addEventListener("click", () => {
    location.reload();
  });
}

startButton.addEventListener("click", () => {
  welcomeScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
});

nextButton.addEventListener("click", () => {
  if (selectedAnswer === null) return;

  const chosen = questions[currentQuestion].answers[selectedAnswer];
  answersGiven.push(chosen);

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
});
