const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (e.g., dinner, brunch, etc.)? ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

const answers = [];

const askQuestion = (index) => {
  rl.question(questions[index], (answer) => {
    answers.push(answer);
    if (index === questions.length - 1) {
      generateProfile();
      rl.close();
    } else {
      askQuestion(index + 1);
    }
  });
};

const generateProfile = () => {
  const [name, activity, music, meal, food, sport, superpower] = answers;

  const profile = `Name: ${name}\n` +
    `Activity: ${activity}\n` +
    `Music: ${music}\n` +
    `Meal: ${meal}\n` +
    `Favorite Food: ${food}\n` +
    `Favorite Sport: ${sport}\n` +
    `Superpower: ${superpower}`;

  console.log("\n--- Profile ---\n");
  console.log(profile);
};

askQuestion(0);