const prompt = require('prompt-sync')({sigint: true});

let action = Number(prompt("Enter 1 to Combine Colors or Enter 2 to Deconstruct Colors: "));

if (action === 1)
{
    console.log("Choose your first color to combine. Enter: Red, Blue, or Yellow: ");
    let color1 = prompt(">");
    console.log("Choose a different, second color to combine. Enter: Red, Blue or Yellow: ");
    let color2 = prompt(">");
        if ((color1 === "Red" && color2 === "Blue") || (color1 === "Blue" && color2 === "Red"))
        {
            console.log(`${color1} + ${color2} combine to make Purple.`);
        }
        else if ((color1 === "Red" && color2 === "Yellow") || (color1 === "Yellow" && color2 === "Red"))
        {
            console.log(`${color1} + ${color2} combine to make Orange.`);
        }
        else if ((color1 === "Blue" && color2 === "Yellow") || (color1 === "Yellow" && color2 === "Blue"))
        {
            console.log(`${color1} + ${color2} combine to make Green.`);
        }
        else if ((color1 != "Red" || color1 != "Blue" || color1 != "Yellow") || (color2 != "Red" || color2 != "Blue" || color2 != "Yellow"))
        {
            console.log("Input Error. Case Sensitive and only choose from options shown.");
        }
} 

else if (action === 2)
{
    console.log("Enter the color you want to deconstuct. Choose: Purple, Orange, or Green: ");
    let deconstructColor = prompt(">");
        if (deconstructColor === "Purple")
        {
            console.log(`${deconstructColor} decontructed, is made up of Red & Blue.`);
        }
        else if (deconstructColor === "Orange")
        {
            console.log(`${deconstructColor} decontructed, is made up of Red & Yellow.`);
        }
        else if (deconstructColor === "Green")
        {
            console.log(`${deconstructColor} decontructed, is made up of Yellow & Blue`);
        }
        else if (deconstructColor != "Purple" || deconstructColor != "Orange" || deconstructColor != "Green")
        {
            console.log("Input Error. Case Sensitive and only choose from options shown.");
        }
}

else if (action != 1 || action != 2)
{
    console.log("Error. Please Enter a 1 or a 2");
}
