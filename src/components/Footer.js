import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DrinkIcon from '../images/drinkIcon.svg';
import ExploreIcon from '../images/exploreIcon.svg';
import MealIcon from '../images/mealIcon.svg';
import { RecipesAppContext } from '../context/RecipesAppContext';
import '../styles/Footer.css';

export default function Footer() {
  const {
    displayFooter: [displayFooter],
  } = useContext(RecipesAppContext);

  return displayFooter ? (
    <div className="footer-container" data-testid="footer">
      <nav>
        <div>
          <Link to="/bebidas">
            <img data-testid="drinks-bottom-btn" src={DrinkIcon} alt="Ícone de Bebidas" />
          </Link>
        </div>
        <div>
          <Link to="/explorar">
            <img data-testid="explore-bottom-btn" src={ExploreIcon} alt="Ícone do Explorador" />
          </Link>
        </div>
        <div>
          <Link to="/comidas">
            <img data-testid="food-bottom-btn" src={MealIcon} alt="Ícone de Comidas" />
          </Link>
        </div>
      </nav>
    </div>
  ) : null;
}
