const meals = require('../mocks/meals');
const oneMeal = require('../mocks/oneMeal');
const soupMeals = require('../mocks/soupMeals');
const emptyMeals = require('../mocks/emptyMeals');
const mealCategories = require('../mocks/mealCategories');
const drinks = require('../mocks/drinks');
const oneDrink = require('../mocks/oneDrink');
const ginDrinks = require('../mocks/ginDrinks');
const emptyDrinks = require('../mocks/emptyDrinks');
const drinkCategories = require('../mocks/drinkCategories');

const fetch = (url) => Promise.resolve({
  status: 200,
  ok: true,
  json: () => {
    if (url === 'https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      return Promise.resolve(mealCategories);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        return Promise.resolve(drinkCategories);

    if (
      url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata' ||
      url === 'https://www.themealdb.com/api/json/v1/1/random.php'
    )
      return Promise.resolve(oneMeal);

    if (
      url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Aquamarine' ||
      url === 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    )
      return Promise.resolve(oneDrink);

    if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=soup')
      return Promise.resolve(soupMeals);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin')
      return Promise.resolve(ginDrinks);

    if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=xablau')
      return Promise.resolve(emptyMeals);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=xablau')
      return Promise.resolve(emptyDrinks);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      return Promise.resolve(drinks);

    return Promise.resolve(meals);
  },
});

module.exports = fetch;
