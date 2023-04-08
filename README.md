# Management UI with Nuxt3

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Installation

- Node.js - v16.10.0 or newer

## Setup

```bash
# clone repo
git clone git@github.com:Improwised/nuxt3-boilerplate.git
```

## Build Setup

For UI everything is under /app/ folder, so go to /app/ folder.

* Go to `/app/` folder. 

* copy `.env.example` to `.env`. (skip if already done)

## .env.example

* copy `.env.example` to `.env`.
```
MODE=development
BASE_URL=
```
* `MODE`: This will indicate application state.
* `BASE_URL`: You can specify your application URL.

* run following commands

``` bash
# Make sure to install the dependencies
$ npm install 
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Included Packages

- Bootstrap - for style
- Pinia - for State management
- Eslint - for on commit 
- Prettier - for on commit
- Vitest - for testcases
- Husky - for pre-commit hooks
- Commitlint - for github commit lint




## Store

This directory contains your Pinia Store files.

for use pinia first define pinia in nuxt config file

More information about the usage of this directory in [documentation]( https://pinia.vuejs.org/ssr/nuxt.html).

* Go to `/app/store` folder, this folder includes,

    * `actions`: Includes all the requests of project.
    * `getters`: pinia allows us to define "getters" in the store. You can think of them as computed properties for stores.
    *  `state`: Includes all the variable of the project.



## Pinia Testcases
This directory includes the test cases. *
More information to write test cases you can visit this [documentation](https://vitest.dev/guide/)
### for testcase run
```
npm run test
```

## Other Configuration file

Please check husky folder/files,.eslintrc.js,.prettierrc,tsconfig.ts,vitest.config.ts,plugins folder/files