[![GitHub license](https://img.shields.io/github/license/er-swapnil-waman/empty-react-app?color=rgb%2868%2C%20204%2C%2017%29)](https://github.com/gkhan205/cwg-react-starter/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/er-swapnil-waman/empty-react-app?color=rgb%252868%252C%2520204%252C%252017%2529)](https://github.com/gkhan205/cwg-react-starter/stargazers)
![GitHub issues](https://img.shields.io/github/issues-raw/er-swapnil-waman/empty-react-app?color=rgb%2868%2C%20204%2C%2017%29)

## Empty React App

> Pre-configured and Ready to use React Starter App. To save time in settings things up for new project. Almost everything needed is already configured. Just clone and start developing without wasting time in doing same stuffs for every project. You can use it with Create React App as Template

### `npx create-react-app <app-name> --template cwg-react`

> [Read detailed explanation here](https://portfolio.thesologlobesightseer.com//empty-react-app-structure-2021/)

### Overview

_Things included in this empty react app_

- Folder Structure
- Axios Interceptor
- Redux with Redux-Thunk
- Router with Private Route
- Confugured for SCSS/SASS
- Eslint & Prettier
- Pre-commit Hook
- Absolute Imports
- Auth0 authenticator
- Preconfigured webpack setup
- Preconfigured Progressive Web App

> [Please follow this import style for better code readability](#Imports-style)

### Folder Structure

Those applications which are big and/or complex needs to have have well planned, organized folder structure. Best way is to use a mix of strategies to achieve better results as I am going to describe next.

Top level project architecture (which is under src/ folder) should be organized by type. No files should be here, just folders. This way it will be clear and understandable. Having files in here adding mess. We should keep it clear like this:

```
- src/
  - library/
  - main/
  - modules/
  - resources/
```

---

**Library Folder** : This folder will keep all our helpers and common files which will be shared across the application. We have 2 major folder in this `common` and `utilities`. If you want to create some api services you can keep it in `api` folder inside `library` folder.

```
- src/library/
  - common
    - actions
      - AuthActions.js
    - components
      - Header
        - index.jsx
        - styles.scss
      - Dropdown
        - index.jsx
        - styles.scss
    - constants
      - StoreConstant.js
      - ImagesConstants.js
      - URLConstants.js
    - hooks
      - dataFetchHook.js
    - reducers
      - AuthReducer.js
  - utilities
    - Storage.js
    - Validators.js
  - api - (optional folder as per requirement create this)
    - AuthApiService.js
```

---

**Main Folder** : This folder is for main configurations such as Redux Create Store, Axios Instance and Routes

```
- src/main/
  - axios/
    - index.js
  - routes
    - index.jsx
    - PrivateRoute.jsx
  - store/
    - index.js
    - mainReducer.ts
```

---

**Modules Folder** : This folder is for Modules/Features of our app, we can treat this as containers. Each module/feature will have all its related files in same folder. We may have some module related components which we will be placing inside `frames` folder and components which are used in more than one module we will keep in common/components to share across the application. Reason for keeping all related files in same folder to increase maintainability and searchability.

```
- src/modules/
  - Dashboard/
    - index.jsx
    - dashboard.scss
    - dashboardActions.js
    - dashboardConstants.js
    - dashboardReducer.js
    - frames/
      - HeaderFrame/
        - index.jsx
        - headerFrame.scss
  - Home
    - index.jsx
    - Home.scss
    - homeActions.js
    - homeConstants.js
    - homeReducer.js
    - frames/
      - HomeFrame/
        - index.jsx
        - homeFrame.scss
```

---

**Resources Folder** : This folder will be used to keep all our static resources such as `images`, `styles (mixins, variable etc)`, `seeds`, `fonts` etc. You can add seed, fonts if needed.

```
- src/resources/
  - fonts/
    - OpenSans-Regular.ttf
  - images/
    - logo.svg
  - styles/
    - variables.scss
    - mixins.scss
  - seed/
    - country.json
```

---

## Imports Style

Order should be as below

```
Imports packages / functions / variables from node_modules

Absolute Imports

Relative Imports
```

example:

```jsx
import React from 'react';
import { uniqBy } from 'lodash';

import AppNavbar from 'library/common/components/AppNavbar';

import './style.scss';
```
