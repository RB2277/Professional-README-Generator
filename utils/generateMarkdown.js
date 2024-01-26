// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  let generateLicense = renderLicenseSection(response.license)
  return `
  l
 # ${response.title}

## Description

${renderLicenseBadge(response.license)}

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#How to Contribute)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

${response.instructions}

## Usage

${response.usage}

## License

${generateLicense ? `This project is licensed under the ${response.license} license.  License link: ${renderLicenseLink(response.license)}` : `N/A`}

## How to Contribute

${response.contribution}

## Tests

${response.test}

## Questions

${response.questions}

https://github.com/${response.user}

Reach me via email at ${response.email}

`;
}

module.exports = generateMarkdown;
