/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

var userInput;

const questions = [
  {
    name: "userSite",
    message: "Enter a site: ",
  },
];

function urlToQR() {
  const qrPng = qr.image(userInput, { type: "png" });
  qrPng.pipe(fs.createWriteStream("qrcode.png"));
}

inquirer
  .prompt(questions)
  .then((answers) => {
    console.info("You entered:", answers.userSite);
    fs.writeFileSync("userInput.txt", answers.userSite);
    userInput = answers.userSite;
    urlToQR();
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment.");
    } else {
      console.log("Something else went wrong.");
    }
  });
