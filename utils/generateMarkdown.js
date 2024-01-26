//Retrieves the correct license badge based off of user choice
function renderLicenseBadge(license) {
  if(license === "No license") {
    var emptyString = ''
    return emptyString
  } else if(license === "MIT") {
    var MitLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    return MitLink
  } else if (license === "Apache") {
    var ApacheLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    return ApacheLink
  } else {
    var IscLink = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    return IscLink
  }
}

//Retrieves the correct license link based off of user choice
function renderLicenseLink(license) {
  if(license === "No license") {
    var emptyString = ''
    return emptyString
  } else if(license === "MIT") {
    var MitLink = "https://opensource.org/license/mit/"
    return MitLink
  } else if (license === "Apache") {
    var ApacheLink = "https://www.apache.org/licenses/LICENSE-2.0"
    return ApacheLink
  } else {
    var IcsLink = "https://opensource.org/license/isc-license-txt/"
    return IcsLink
  }

}

//Renders the license section of the README by being true or false based off of if a license was selected
function renderLicenseSection(license) {
  if(license === "No license") {
      return false
    } else {
      return true
    }
}

//Function that generates the markdown with the correct user choices
function generateMarkdown(response) {
  let generateLicense = renderLicenseSection(response.license)
  return `
 # ${response.title}

## Description

${renderLicenseBadge(response.license)}

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${response.instructions}

## Usage

${response.usage}

## License

${generateLicense ? `This project is licensed under the ${response.license} license. License link: ${renderLicenseLink(response.license)}` : `N/A`}

## Contribute

${response.contribution}

## Tests

${response.test}

## Questions

${response.questions}

https://github.com/${response.user}

Reach me via email at ${response.email}

`;
}

//Exports the generatemarkdown.js file to be able to be used within the index.js file
module.exports = generateMarkdown;
