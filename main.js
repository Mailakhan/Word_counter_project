#! /usr/bin/env node
//This line is called a shebang it tells the OS to run it with nodejs.
//import the 'inquirer' module, which is a command line interface for node.js.
import inquirer from "inquirer";
//declare a constant "answers" and assign it to the result of inquirer.prompt function answer = await inquirer.prompt([
const answers = await inquirer.prompt([
    {
        type: "string",
        name: "sentence",
        message: "Enter your sentence to count your word:",
    },
]);
const words = answers.sentence.trim().split(" ");
//print the array of words to the console
console.log(words);
//print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
