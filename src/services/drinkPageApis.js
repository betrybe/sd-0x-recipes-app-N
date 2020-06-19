const LIST_ALL_CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const DRINKS_BY_CATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
const DRINKS_BY_RANDOM = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const DRINKS_BY_ALL_CATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


export const listDrinkCategories = () => (
  fetch(`${LIST_ALL_CATEGORIES}`)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export const fetchDrinkByCategories = (category) => (
  fetch(`${DRINKS_BY_CATEGORY}${category}`)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export const fetchRandomDrink = () => (
  fetch(`${DRINKS_BY_RANDOM}`)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export const fetchDrinksByAllCategories = () => (
  fetch(`${DRINKS_BY_ALL_CATEGORY}`)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
