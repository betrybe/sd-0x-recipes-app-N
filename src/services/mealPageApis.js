const LIST_ALL_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const MEALS_BY_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const MEALS_BY_RANDOM = 'https://www.themealdb.com/api/json/v1/1/random.php';
const MEALS_BY_ALL_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';


export const listMealCategories = () => (
  fetch(`${LIST_ALL_CATEGORIES}`)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export const fetchMealByCategories = (category) => (
  fetch(`${MEALS_BY_CATEGORY}${category}`)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export const fetchRandomMeal = () => (
  fetch(`${MEALS_BY_RANDOM}`)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export const fetchMealsByAllCategories = () => (
  fetch(`${MEALS_BY_ALL_CATEGORY}`)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
