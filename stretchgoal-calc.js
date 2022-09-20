const prompt = require('prompt-sync')({sigint: true});

console.log("Enter a single color to deconstruct it.");
console.log("Choose from: Purple, Orange, or Green.");
console.log("OR you can Enter two colors to combine them. Seperate with a space, for example: Blue Red");
console.log("Choose 2 different colors from: Red, Blue, or Yellow.");
let action = prompt(">");

if (action === "Purple")
{
    console.log(`${action} deconstructed, is made up of Blue + Red.`);
} else if (action === "Orange")
{
    console.log(`${action} deconstructed, is made up of Red + Yellow.`);
} else if (action === "Green")
{
    console.log(`${action} deconstructed is made up of Yellow + Blue.`);
} else if (action.includes("Red") && action.includes("Blue") === true)
{
    console.log("Red + Blue combine to make Purple.");
} else if (action.includes("Red") && action.includes("Yellow") === true)
{
    console.log("Red + Yellow combine to make Orange.");
} else if (action.includes("Yellow") && action.includes("Blue") === true)
{
    console.log("Yellow + Blue combine to make Green.");
} else
{
    console.log("Error. Check your input. Case Sensitive. Only choose from options listed.");
}

