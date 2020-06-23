const meals = require('../mocks/meals');
const oneMeal = require('../mocks/oneMeal');
const soupMeals = require('../mocks/soupMeals');
const beefMeals = require('../mocks/beefMeals');
const breakfastMeals = require('../mocks/breakfastMeals');
const chickenMeals = require('../mocks/chickenMeals');
const dessertMeals = require('../mocks/dessertMeals');
const goatMeals = require('../mocks/goatMeals');
const emptyMeals = require('../mocks/emptyMeals');
const mealCategories = require('../mocks/mealCategories');
const drinks = require('../mocks/drinks');
const oneDrink = require('../mocks/oneDrink');
const ginDrinks = require('../mocks/ginDrinks');
const ordinaryDrinks = require('../mocks/ordinaryDrinks');
const cocktailDrinks = require('../mocks/cocktailDrinks');
const milkDrinks = require('../mocks/milkDrinks');
const otherDrinks = require('../mocks/otherDrinks');
const cocoaDrinks = require('../mocks/cocoaDrinks');
const emptyDrinks = require('../mocks/emptyDrinks');
const drinkCategories = require('../mocks/drinkCategories');
const areas = require('../mocks/areas');
const japaneseMeals = require('../mocks/japaneseMeals');
const italianMeals = require('../mocks/italianMeals');

const fetch = (url) => Promise.resolve({
  status: 200,
  ok: true,
  json: () => {
    if (url === 'https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      return Promise.resolve(mealCategories);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        return Promise.resolve(drinkCategories);

    if (url === 'https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      return Promise.resolve(areas);

    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese')
      return Promise.resolve(japaneseMeals);

    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian')
      return Promise.resolve(italianMeals);

    if (
      url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata' ||
      url === 'https://www.themealdb.com/api/json/v1/1/random.php' ||
      url === 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771'
    )
      return Promise.resolve(oneMeal);

    if (
      url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Aquamarine' ||
      url === 'https://www.thecocktaildb.com/api/json/v1/1/random.php' ||
      url === 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178319'
    )
      return Promise.resolve(oneDrink);

    if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=soup')
      return Promise.resolve(soupMeals);

    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
      return Promise.resolve(beefMeals);

    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast')
      return Promise.resolve(breakfastMeals);

    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken')
      return Promise.resolve(chickenMeals);

    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
      return Promise.resolve(dessertMeals);

    if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat')
      return Promise.resolve(goatMeals);

    if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=xablau')
      return Promise.resolve(emptyMeals);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin')
      return Promise.resolve(ginDrinks);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink')
      return Promise.resolve(ordinaryDrinks);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      return Promise.resolve(cocktailDrinks);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Milk / Float / Shake')
      return Promise.resolve(milkDrinks);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Other/Unknown')
      return Promise.resolve(otherDrinks);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocoa')
      return Promise.resolve(cocoaDrinks);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=xablau')
      return Promise.resolve(emptyDrinks);

    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      return Promise.resolve(drinks);

    return Promise.resolve(meals);
  },
});

module.exports = fetch;
