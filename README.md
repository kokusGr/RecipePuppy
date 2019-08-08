# iFM

### Installation

1. Install dependencies using `yarn`.
2. Go to `./iOS` and run `pod install`.
3. Use `npx jetify` if needed.
4. Use `yarn dev` to run the Metro bundler.
5. Use `yarn start:ios` or `yarn start:android` to run the app in the development mode.

### Requirements

Use RecipePuppy API to fetch and display recipes in the app.

> http://www.recipepuppy.com/about/api/

**Please use `cors-anywhere` to fetch data correctly, for instance:**

```js
fetch('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=onions&p=1', {
  headers: {
    'Content-Type': 'application/json',
    Origin: '',
  },
})
```

**Search**

- the app should contain search bar
- there should be a possibility to type more than 1 ingredient in the search bar (delimited by comma)

**List**

- display a placeholder if there are no results
- sort recipes by name (ascending)
- each recipe card should contain name and thumbnail
- pressing on recipe card should open a single recipe screen

**Recipe**

- display a recipe name, thumbnail and ingredients
- add a button for opening WWW page (use `href` property)
- there should be a possibility to go back to the recipes list

### Other

- we don't suggest how to write components, class/functional with HOCs/hooks/render props – the choice is yours!
- if you don't want to use TS in this project just change `allowJs` param to `true` in `./tsconfig.json` (or completely remove TS from the project dependencies)
- estimated time to complete the task is 4h but we don't use a stopwatch! ;P

Good luck! 🤗
