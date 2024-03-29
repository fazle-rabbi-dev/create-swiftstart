#!/usr/bin/env node

/**
 * create-swiftstart
 * Author: Fazle Rabbi (GitHub: fazle-rabbi-dev)
 * Description: This module generates a pre-designed seo-friendly Vite React & Next.js boilerplate project with a custom folder and file structure.
 * Version: 1.0.0
 * License: MIT
 * Date: 15 September, 2023; Friday
 */

/**
 *  NOTE:
 * The code in this file wasn't written following best practices. 🙈
 */

const path = require("path");
const fs = require("fs-extra");
const argv = require("minimist")(process.argv.slice(2));
const readline = require("readline");
const chalk = require("chalk");
const { exec } = require("child_process");

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

      if (argv._.length === 1 && argv.t) {
        appName = argv._[0];
        templateName = argv.t;

        main();
      } else {
        console.clear();
        // console.log(chalk.red("-> Invalid argument.")+chalk.reset())
        askAppName();
      }
    }
  });
};

/* Creating an interface for reading lines of text */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* Utility Functions */
const displayError = msg => {
  console.log(chalk.bold.red(`🔴 Oops! ${msg}`));
  exec("sleep 1", (error, stdout) => {
    console.log(stdout)
    startApp();
  })
};

const question = text => {
  return `${chalk.cyan("? ")}${text}${chalk.gray(" > ")}`;
};

/* Appname Prompt */
const askAppName = () => {
  rl.question(question("Project name:"), answer => {
    appName = answer;
    askChooseTemplate();
  });
};

/* Choose Template Prompt */
const askChooseTemplate = () => {
  const options = `${chalk.bold.green("Which template would you like to use?")}
  r. ${chalk.yellow("React.js")}
  n. ${chalk.yellow("Next.js")}
`
  
  rl.question(question(options), answer => {
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
  rl.question(question("Would you like to use app dir:(y/n)"), answer => {
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
  if (shouldUseAppDir === undefined && ["next", "n"].includes(templateName)) {
    return askShouldUseAppDir();
  }

  let sourceDir;
  const changeSource = name => {
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
    changeSource("react-templates/react_template");
  } else {
    if (shouldUseAppDir) {
      changeSource("nextjs-templates/next_template_appdir");
    } else {
      changeSource("nextjs-templates/next_template_pagesdir");
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
    content = JSON.stringify(content, null, 2);
    fs.writeFileSync(`${targetDir}/package.json`, content);

    // Change app name in package-lock.json
    /*let pkgLockFile = fs.readFileSync(
      `${targetDir}/package-lock.json`,
      "utf-8"
    );
    pkgLockFile = JSON.parse(pkgLockFile);
    pkgLockFile.name = appName;
    pkgLockFile = JSON.stringify(pkgLockFile, null, 2);
    fs.writeFileSync(`${targetDir}/package-lock.json`, pkgLockFile);
    */

    console.log(`${chalk.green("✔ ")}Project ${appName} created successful`);
    console.log(`${chalk.reset()}\nDone. Now run:`);
    console.log(`
  cd ${appName}
  bash install.sh
  npm run dev
    `);
    process.exit(0);
  } catch (e) {
    displayError(e.message);
  }
};

startApp();
