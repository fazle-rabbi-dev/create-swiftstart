#!/usr/bin/env node

/**
 * create-swiftstart
 * Author: Fazle Rabbi (GitHub: fh-rabbi)
 * Description: This module generates a pre-designed seo-friendly Vite React & Next.js boilerplate project with a custom folder and file structure.
 * Version: 1.0.0
 * License: MIT
 * Date: 15 September, 2023; Friday
 */

const path = require("path");
const fs = require("fs-extra");
const argv = require("minimist")(process.argv.slice(2));
const readline = require("readline");
const chalk = require("chalk");
const { exec } = require("child_process");
const npmlog = require("npmlog");

/* Initialized Empty Variable To Store User Input */
let appName;
let templateName;
let shouldUseAppDir;
let nextVersion;

/* Clear Terminal And Start App */
const startApp = () => {
  exec("clear", (error, stdout) => {
    if (!error) {
      console.log(stdout);
      console.clear();
      if (argv._.length === 1 && "t" in argv) {
        appName = argv._[0];
        templateName = argv.t;
        main();
      } else {
        console.clear();
        askAppName();
      }
    }
  });
};

/* Creating an interface for reading lines of text */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/* Utility Functions */
const displayError = (msg) => {
  console.log(chalk.red(`🔴 Oops! ${msg}`));
  return process.exit(0);
};

const question = (text) => {
  return `${chalk.cyan("? ")}${text}${chalk.gray(" > ")}`;
};

/* Appname Prompt */
const askAppName = () => {
  rl.question(question("Project name:"), (answer) => {
    appName = answer;
    askChooseTemplate();
  });
};

/* Choose Template Prompt */
const askChooseTemplate = () => {
  rl.question(question("Choose template (React:r/Next:n):"), (answer) => {
    templateName = answer;
    if (["n", "next"].includes(answer)) {
      askShouldUseAppDir();
    } else {
      main();
    }
  });
};

/* App directory usage prompt */
const askShouldUseAppDir = () => {
  rl.question(question("Would you like to use app dir:(y/n)"), (answer) => {
    if (answer === "y") {
      shouldUseAppDir = true;
    } else {
      shouldUseAppDir = false;
    }
    main();
    // Close the readline interface
    rl.close();
  });
};

/* Main Function To Generate Boilerplate Project */
const main = () => {
  if (shouldUseAppDir === undefined) {
    return askShouldUseAppDir();
  }
  
  let sourceDir;
  const changeSource = (name) => {
    const newSrc = path.join(__dirname, name);
    sourceDir = newSrc;
  };

  if (!appName && !templateName) {
    return displayError("something went wrong");
  }

  if (!["r", "n", "react", "next"].includes(templateName)) {
    return displayError("invalid option");
  }

  if (["r", "react"].includes(templateName)) {
    changeSource("react_template");
  } else {
    if (shouldUseAppDir) {
      changeSource("next_template_appdir");
    } else {
      changeSource("next_template_pagesdir");
    }
  }

  try {
    const targetDir = path.join(process.cwd(), appName);
    fs.mkdirSync(appName);
    const files = fs.readdirSync(sourceDir);
    console.log(chalk.cyan(`[*] Scaffolding project in ${targetDir}...`));
    fs.copySync(sourceDir, targetDir);

    // Change app name in package.json
    let content = fs.readFileSync(`${targetDir}/package.json`, "utf-8");
    content = JSON.parse(content);
    content.name = appName;
    content = JSON.stringify(content);
    fs.writeFileSync(`${targetDir}/package.json`, content);
    
    console.log(`${chalk.green("✔ ")}Project ${appName} created successful`);
    console.log(`${chalk.reset()}\nDone. Now run:`);
    console.log(`
  cd ${appName}
  npm install
  npm run dev
    `);
  } catch (e) {
    displayError(e.message);
  }
};

startApp();
