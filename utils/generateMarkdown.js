// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if(!license) {
    return '';
  }

  return `![License Badge](https://img.shields.io/github/license/${license})
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if(!license) {
    return '';
  }

  return `[${license}](https://github.com/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  }

  return `
  ## License
  Copyright (c) ${renderLicenseLink(license)}. All rights reserved.
  Licensed under the ${license} license.
  `;
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [Credits](#credits)
  - [LIcense](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Tests

  ## Contributing
  ${data.contributing}

  ## Questions
  - Here is a link to my [github](https://github.com/${data.github}).
  - You can email me at ${data.email} with any additional questions.

  ## Credits
  ${data.credits}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;