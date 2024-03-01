// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) return '';
  const badgeLinks = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  };
  return badgeLinks[license] || '';
}

// Function to return the license link
function renderLicenseLink(license) {
  if (!license) return '';
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause'
  };
  return licenseLinks[license] || '';
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License
  
This project is licensed under the ${license} license. For more information, see the [license page](${renderLicenseLink(license)}).`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact me at [${data.email}](mailto:${data.email}).

GitHub: [${data.github}](https://github.com/${data.github})

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;

