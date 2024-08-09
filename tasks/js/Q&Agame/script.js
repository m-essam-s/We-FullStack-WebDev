function game() {
    // Define an array of question and answer objects
    const questions = [
        { question: "What is the capital of France?", answer: "Paris" },
        { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
        { question: "What is the chemical symbol for gold?", answer: "Au" },
        // Add more questions and answers here
    ];

    // Randomly select a question from the array
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];

    // Prompt the user with the question and get their answer
    const userAnswer = prompt(randomQuestion.question);

    // Check if the user's answer matches the correct answer
    if (userAnswer.toLowerCase() === randomQuestion.answer.toLowerCase()) {
        alert("Correct answer!");
    } else {
        alert("Wrong answer. The correct answer is: " + randomQuestion.answer);
    }
}

