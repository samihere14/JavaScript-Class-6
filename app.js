// Chapter 21-25
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

const firstName = prompt("Enter your First Name");
const lastName = prompt("Enter your Last Name");
const fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

const phoneModel = prompt("Enter your favorite mobile phone model");
alert("The Length of your favorite Phone Model is: " + phoneModel.length);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

const word = "Pakistani";
const index = word.indexOf("n");
alert("String: Pakistani\n Index of 'n' is: " + index);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

const word = "Hello  World";
const index = word.indexOf("l");
alert("String: Hello  World\n Index of 'l' is: " + index);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

const word = "Pakistani";
const index = word.indexOf("i");
alert("String: Pakistani\nCharacter at index " + index + ": " + word[index]);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

const origText = "Hyderabad";
const repText = origText.replace("Hyder", "Islam");
document.getElementById("result").textContent = repText;