// Step 1: Define the user's name.
let userName = ""; // Set to empty string. User can input their name here.

// Step 2: Use a ternary expression for a personalized greeting.
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

// Step 3: Define the question the user wants to ask.
let userQuestion = "Will I become a developer?"; // Replace with any question.

// Step 4: Log the user's question.
console.log(`${userName ? userName : "User"} asks: "${userQuestion}"`);

// Step 5: Generate a random number between 0 and 7.
const randomNumber = Math.floor(Math.random() * 8);

// Step 6: Define the Magic Eight Ball's response.
let eightBall = "";

// Step 7: Assign responses based on randomNumber using a switch statement.
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

// Step 8: Log the Magic Eight Ball's answer.
console.log(`The Magic Eight Ball says: "${eightBall}"`);
