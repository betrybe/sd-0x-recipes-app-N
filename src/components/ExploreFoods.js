import React, { useContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

import { fetchRandomDrink } from '../services/drinkPageApis';
import { fetchRandomMeal } from '../services/mealPageApis';
import { RecipesAppContext } from '../context/RecipesAppContext';

import '../styles/ExploreFoods.css';

const fetchByRandomMeal = async (type, setIsLoadingLocal, setIdFood) => {
  if (type === 'Comidas') {
    return fetchRandomMeal()
      .then(
        (({ meals }) => {
          setIdFood(meals[0].idMeal);
          setIsLoadingLocal(false);
        }),
        () => console.log('error explore meal'),
      );
  }
  return fetchRandomDrink()
    .then(
      (({ drinks }) => {
        setIdFood(drinks[0].idDrink);
        setIsLoadingLocal(false);
      }),
      () => console.log('error explore drink'),
    );
};

const renderByIngredients = (type) => (
  <Link className="link-origin" to={`/explorar/${type.toLowerCase()}/ingredientes`}>
    <button
      className="link-button"
      type="button"
      data-testid="explore-by-ingredient"
    >
      Por Ingredientes
    </button>
  </Link>
);

const renderByOrigin = (type) => (
  <Link className="link-origin" to={`/explorar/${type.toLowerCase()}/area`}>
    <button
      className="link-button"
      type="button"
      data-testid="explore-by-area"
      disabled={(type === 'Bebidas')}
    >
      Por Local de Origem
    </button>
  </Link>
);

const renderBySuprise = (type, setIsLoadingLocal, setIdFood) => (
  <button
    className="button-explore"
    type="button"
    data-testid="explore-surprise"
    onClick={() => fetchByRandomMeal(type, setIsLoadingLocal, setIdFood)}
  >
    Me Surpreenda!
  </button>
);

const ExploreFoods = ({ type }) => {
  const [isLoadingLocal, setIsLoadingLocal] = useState(true);
  const [idFood, setIdFood] = useState('');
  const {
    setDisplay, headerTitle: [, setHeaderTitle], recipeType: [, setRecipeType],
  } = useContext(RecipesAppContext);

  useEffect(() => {
    setDisplay(true, false, true);
    setHeaderTitle(`Explorar ${type}`);
    setRecipeType(type);
  }, [setDisplay, setHeaderTitle, type, setRecipeType]);

  if (!isLoadingLocal) {
    return (
      <Redirect
        to={`/${type.toLowerCase()}/${idFood}`}
      />
    );
  }

  return (
    <div className="explore-buttons-container">
      {renderByIngredients(type)}
      {renderByOrigin(type)}
      {renderBySuprise(type, setIsLoadingLocal, setIdFood)}
    </div>
  );
};

ExploreFoods.propTypes = {
  type: propTypes.string.isRequired,
};

export default ExploreFoods;
