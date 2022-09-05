# Lexir | Frontend Developer Challenge

THIS IS A SIMPLE EXERCISE, WHICH IS PART OF A RECRUITING PROCESS OF LEXIR AND AS SUCH, IT SHOULD NOT BE SHARED, DISTRIBUTED OR EXPOSED ANYWHERE WITHOUT CONSENT OF LEXIR. DOING SO, WILL AUTOMATICALLY DISQUALIFY YOU FROM THE PROCESS.

All the provided data (namely: product names, images and prices) is not to be taken as real and is only relevant as example / "dummy" data for use in this exercise.

This is an important document for your future career. Please read carefully through all of the following instructions before you begin with the implementation.

This test is targeted at two different levels: Junior Frontend Developers and Frontend Heroes. Reading through this document + setup should take ~10min. Please choose your own level.

Also, please keep in mind that your handed in code will form the basis of the next steps in the formal recruiting process. It is therefore only in your own best interest to be able to explain every code decision you took, while of course trying to show your best.

## Table of Contents

## Whom we're looking for

At Lexir we develop and maintain high quality web applications that cover a broad range of necessities. Which is why we expect our developers to feel at home in all areas of modern Frontend development.

Expressive markup, crossbrowser / crossdevice working CSS styles and lean JavaScript / Typescript code should therefore be on your high priority list.

## Setup your system

### node.js v12.22.0 or later

You will need [node.js](https://nodejs.org/) v12.22.0 (or later). In case you want to manage several node versions on your machine, we recommend [nvm](https://github.com/creationix/nvm) for Mac/\*nix and [nodist](https://github.com/marcelklehr/nodist) for Windows.

### Install NPM packages and start

Once you have node.js installed, open up your OS's Terminal/Bash application, change into the root folder of the test (where the file `package.json` is located) and run `yarn install` (please note that you will need a _working Internet connection_).

After all NPM packages installed successfully, the css pre-compile and serve processes will automatically be triggered (you can do that manually by running `yarn run dev`).

- Whenever a change is detected in files inside the `/src` folder it will re-run the above related scripts and reload the page in the browser.

At this point you should be able to see a blank page in your browser.

### IDE configuration

Please configure your IDE to use the [`.editorconfig`](http://editorconfig.org/#download) as it will help you deliver consistent coding styles as defined by us.

### Troubleshooting

If you experience problems during the setup please _STOP_ and send a message to the human resource employee you are in contact with, describing your steps and pasting the error log of your Terminal / Bash application.

## What we expect from your code

### Browsers it should work in and display correctly

- Latest Chrome

### Where should I place my files?

We've got an initial folder and file structure in `src` prepared for you:

- `pages/index.tsx` - File with prepared markup (needs your improvements)
- `styles/` - inside this folder you can add styles, classes, mixins, variables, etc that will help you to implement the required design as fast as possible.
- `components/` - inside this folder you should add all the JavaScript components needed to make your solution work as it should.
- `assets/` - images and other assets to be used by this solution.

Please keep and use this structure.

### Coding guidelines

1.  HTML

    - Make sure to add all needed HTML so that it fits the exercise requirements.
    - Please use semantically correct HTML5 markup

2.  JavaScript

    - Please use Typescript, ReactJS is allowed
    - We would like to see YOUR clean and modular JavaScript / Typescript code (while commented when needed).
    - Use of recent JavaScript / Typescript features (eg: ES6, ES2016, ES2017) is highly encouraged as long as supported by latest chrome (so you shouldn't have to transpile / compile your JavaScript).

3.  CSS

    - We kindly ask you to use TAILWIND CSS
    - Another frameworks are not allowed
    - Only Pure CSS are not allowed

### Can I use additional NPM packages?

Yes, as long as the points from the above section [Coding guidelines] are not violated.

## Requirements

### Junior Developers _and_ Frontend Heroes

1. Fork this repo
2. Design to be developed: https://www.figma.com/file/G1uRC23QIVkKzLOif8MqHf/Tech-Assessment-V1.0.2
3. Tailwind Implementation
   - Please add to the existing project the Tailwind CSS framework to achieve the required design and planned behavior.
4. HTML markup

   - Please add to the existing src/index.tsx file the semantic markup needed to achieve the required design and planned behavior.
   - Depending on your implementation (regarding modularization/componentization) you may chose to have some components. If that's case (which is fine) we would still like you to add at least the base structural elements (eg: header, footer, etc) in the base index.tsx file and respective calls

5. App's dynamic behavior - please add the required Javascript / Typescript and styles so that:
   - No required for Junior Developer
6. Pull Request to the main repository, deploy to vercel and share the link

### BONUS (Optional for Frontend Heroes)

7.  Leave an empty file named "I AM A FRONTEND HERO" in the root folder.
8.  App's dynamic behavior

- Create a API call inside of the folder pages/api to get all products
- Consume and handle data from the API using SSE

9. Pull Request to the main repository, deploy to vercel and share the link

## What are you expected to hand in?

Please remember, when running all tasks in the package.json scripts there should be _no errors_. Take your time to make it work.

Optionally: you can add a `SOLUTION.md` file with any additional needed instructions to run code and any comments (explaining your decisions, making suggestions, etc) about this challenge and your solution.

Finally, commit (and share the link) with your solution which you send back as an email to the human resource employee you are in contact with and tell her/him if you ultimately applied as a Junior Frontend Developer or as a Frontend Hero. _PLEASE DO NOT INCLUDE THE `node_modules` folder_.

Good luck :-)
