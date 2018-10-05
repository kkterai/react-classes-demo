## Introduction
Do you want some quick info about Github users? Just enter a Github username into this little app and see what there is to see!

Here is a [brief demo](https://drive.google.com/open?id=1CZw6-E8SjrRAKShHfO_K-8DrpkuFivjl)

## Tech/framework used

<b>Bootstrapped with [Create React App](https://github.com/facebook/create-react-app), meaning that this little app was built with this Tech at minimum:
- [React](https://reactjs.org) 
- [Webpack](https://webpack.js.org)
- [Babel](https://babeljs.io)

## Updating to New Releases

Create React App is divided into two packages:

- `create-react-app` is a global command-line utility used to create this project.
- `react-scripts` is a development dependency in this project.

You almost never need to update `create-react-app` itself: it delegates all the setup to `react-scripts`.

To update to a new version of `react-scripts`, [open the changelog](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md), find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `react-scripts` version in `package.json` and running `npm install` (or `yarn install`) in this folder should be enough, but it’s good to consult the [changelog](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md) for potential breaking changes.

## Features
1.	Input – a github username
2.	Hit the Github Public API (specifically the /users/:username endpoint)
3.	Display information basic information like name, email, company, and number of public repos

## Installation
1. Fork and clone this repo
2. Run `npm start` and enjoy!

## Tests
To be implemented with [React Testing Library](https://github.com/kentcdodds/react-testing-library)

## Contribute

Bug reports and pull requests are welcome on GitHub at [this project's repository](https://github.com/kkterai/github-user-info). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org) code of conduct.

## Credits
Many thanks to Flatiron School, Wes Bos, Facebook!

## License
This project is released under the [MIT License](https://opensource.org/licenses/MIT).
