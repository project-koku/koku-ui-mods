# Koku-ui Microfrontend (MFE) with Module Federation

[![AGPLv3][license-badge]][license]
[![Build Status][build-badge]][build]

User interface is based on Patternfly [![Patternfly][pf-logo]][patternfly]

To submit an issue, please visit https://issues.redhat.com/projects/COST/

## Requirements
* [NodeJS v18.15+][nodejs]
* [npm v9.5+][npm]

## Setup /etc/hosts entries (do this once)

Edit the /etc/hosts file and add the following entries
```
127.0.0.1 prod.foo.redhat.com
127.0.0.1 stage.foo.redhat.com
```

Alternatively, run the [patch-etc-hosts.sh][patch-etc-hosts] script from the insights-proxy repo
```
sudo bash scripts/patch-etc-hosts.sh
```

## Getting Started
1. Install requirements listed above.
2. Setup /etc/hosts entries listed above. 
3. Clone the repository, and open a terminal in the base of this project.
4. Run the command `npm install` to install all the dependencies.

## Building
```
npm build
```

## Testing
```
npm test
```

## Running the Koku-ui MFE against a hosted Koku API, using webpack proxy
Note that this approach currently supports the Insights stage-beta, stage-stable, prod-beta, and prod-stable environments.

1. Start development server
```
npm start
```

Follow the prompts that follow.

* Do you want to use local api? `no`
* Which platform environment you want to use `stage`
* Which Chrome environment you want to use? `beta`

2. Open the following URL
```
https://stage.foo.redhat.com:1337/beta/openshift/cost-management-mfe
```

## Releasing the Koku-ui MFE

This [RELEASE][release-doc] doc describes how to release the UI to each staging environment.

## Useful Links

#### Libs

* [TypeScript](http://www.typescriptlang.org/docs/handbook/react-&-webpack.html)
* [React](https://reactjs.org/docs/react-api.html)
* [Redux](https://redux.js.org/) - State Management
  * [Redux-Thunk](https://github.com/reduxjs/redux-thunk#redux-thunk) - Middleware for returning functions from actions (gives access to dispatch and getState to action)
  * [typesafe-actions](https://github.com/piotrwitek/typesafe-actions#motivation) - Typesafe Redux
  * [Selectors](https://redux.js.org/introduction/learningresources#selectors)
* [Axios](https://github.com/axios/axios#axios-api) - HTTP Client
* [React Router](https://reacttraining.com/react-router/web/guides/philosophy)
  * [withRouter](https://reacttraining.com/react-router/web/api/withRouter) - Injects components with route props
  * [Link](https://reacttraining.com/react-router/web/api/Link)
  * [Route](https://reacttraining.com/react-router/web/api/Route)
* [React I18Next](https://react.i18next.com/) - React Wrapper for i18next
* [PatternFly React 4](https://patternfly-react.netlify.com/)
  * [Source](https://github.com/patternfly/patternfly-react/tree/main/packages) - `react-*/**`
  * [PRS](https://github.com/patternfly/patternfly-react/pulls?q=is%3Aopen+is%3Apr+label%3APF4)
  * [Issues](https://github.com/patternfly/patternfly-react/issues?q=is%3Aopen+is%3Aissue+label%3APF4)

#### Tools

* [React Devtools](https://github.com/facebook/react-devtools)
  * [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  * [Firefox](https://addons.mozilla.org/firefox/addon/react-devtools/)
* [Redux Devtools](https://github.com/zalmoxisus/redux-devtools-extension)
  * [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
  * [Firefox](https://addons.mozilla.org/en-US/firefox/addon/remotedev/)
* VSCode
  * [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) - Linting
    * In Settings add
    ```json
    {
      ...
      "tslint.autoFixOnSave": true,
      ...
    }
  * [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Autoformat
    * In settings add:
    ```json
    {
      ...
      "[typescript]": {
        "editor.formatOnSave": true
      },
      "[typescriptreact]": {
          "editor.formatOnSave": true
      },
      ...
    }
  * [Docker](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker) - Manage Docker images from VSCode

[koku-readme]: https://github.com/project-koku/koku#readme
[license-badge]: https://img.shields.io/github/license/project-koku/koku-ros-ui.svg?longCache=true&style=for-the-badge
[license]: https://github.com/project-koku/koku-ros-ui/blob/main/LICENSE
[nodejs]: https://nodejs.org/en/
[patch-etc-hosts]: https://github.com/RedHatInsights/insights-proxy/blob/master/scripts/patch-etc-hosts.sh
[pf-logo]: https://www.patternfly.org/v4/images/logo.4189e7eb1a0741ea2b3b51b80d33c4cb.svg
[patternfly]: https://www.patternfly.org/
[release-doc]: https://github.com/project-koku/koku-ros-ui/blob/main/RELEASE.md
[npm]: https://https://www.npmjs.com/
