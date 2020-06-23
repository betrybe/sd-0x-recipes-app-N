const fetchMock = require('../mocks/fetch');

describe('Todos os elementos devem respeitar os atributos descritos no protótipo para a tela de detalhes de uma receita', () => {
  it('A tela de comida possui todos os atributos data-testid', () => {
    cy.visit('http://localhost:3000/comidas/52771', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="recipe-photo"]').should('exist');
    cy.get('[data-testid="recipe-title"]').should('exist');
    cy.get('[data-testid="share-btn"]').should('exist');
    cy.get('[data-testid="favorite-btn"]').should('exist');
    cy.get('[data-testid="recipe-category"]').should('exist');
    cy.get('[data-testid="0-ingredient-name-and-measure"]').should('exist');
    cy.get('[data-testid="instructions"]').should('exist');
    cy.get('[data-testid="video"]').should('exist');
    cy.get('[data-testid="0-recomendation-card"]').should('exist');
    cy.get('[data-testid="start-recipe-btn"]').should('exist');
  });

  it('A tela de bebidas possui todos os atributos data-testid', () => {
    cy.visit('http://localhost:3000/bebidas/178319', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="recipe-photo"]').should('exist');
    cy.get('[data-testid="recipe-title"]').should('exist');
    cy.get('[data-testid="share-btn"]').should('exist');
    cy.get('[data-testid="favorite-btn"]').should('exist');
    cy.get('[data-testid="recipe-category"]').should('exist');
    cy.get('[data-testid="0-ingredient-name-and-measure"]').should('exist');
    cy.get('[data-testid="instructions"]').should('exist');
    cy.get('[data-testid="0-recomendation-card"]').should('exist');
    cy.get('[data-testid="start-recipe-btn"]').should('exist');
  });
});

describe('Uma request para a API deve ser feita passando o `id` da receita que deve estar disponível nos parâmetros da URL', () => {
  it('verifica se a requisição para a API de comidas foi realizada', () => {
    cy.visit('http://localhost:3000/comidas/52771', {
      onBeforeLoad(win) {
        cy.spy(win, 'fetch');
      },
    });

    cy.window()
      .its('fetch')
      .should('be.calledWith', 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771');
  });

  it('verifica se a requisição para a API de bebidas foi realizada', () => {
    cy.visit('http://localhost:3000/bebidas/178319', {
      onBeforeLoad(win) {
        cy.spy(win, 'fetch');
      },
    });

    cy.window()
      .its('fetch')
      .should('be.calledWith', 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178319');
  });
});

describe('Essa tela deve conter uma imagem da receita, o título, a categoria (ou se é ou não alcoólico), uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube "embedado" e recomendações', () => {
  it('verifica se os elementos existem na tela de detalhes de comida', () => {
    cy.visit('http://localhost:3000/comidas/52771', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="recipe-photo"]')
      .should('have.prop', 'tagName')
      .should('eq', 'IMG');

    cy.get('[data-testid="recipe-title"]').contains('Spicy Arrabiata Penne');

    cy.get('[data-testid="recipe-category"]').contains('Vegetarian');

    cy.get('[data-testid="0-ingredient-name-and-measure"]').contains('penne rigate');
    cy.get('[data-testid="0-ingredient-name-and-measure"]').contains('1 pound');
    cy.get('[data-testid="1-ingredient-name-and-measure"]').contains('olive oil');
    cy.get('[data-testid="1-ingredient-name-and-measure"]').contains('1/4 cup');
    cy.get('[data-testid="2-ingredient-name-and-measure"]').contains('garlic');
    cy.get('[data-testid="2-ingredient-name-and-measure"]').contains('3 cloves');
    cy.get('[data-testid="3-ingredient-name-and-measure"]').contains('chopped tomatoes');
    cy.get('[data-testid="3-ingredient-name-and-measure"]').contains('1 tin');
    cy.get('[data-testid="4-ingredient-name-and-measure"]').contains('red chile flakes');
    cy.get('[data-testid="4-ingredient-name-and-measure"]').contains('1/2 teaspoon');
    cy.get('[data-testid="5-ingredient-name-and-measure"]').contains('italian seasoning');
    cy.get('[data-testid="5-ingredient-name-and-measure"]').contains('1/2 teaspoon');
    cy.get('[data-testid="6-ingredient-name-and-measure"]').contains('basil');
    cy.get('[data-testid="6-ingredient-name-and-measure"]').contains('6 leaves');
    cy.get('[data-testid="7-ingredient-name-and-measure"]').contains('Parmigiano-Reggiano');
    cy.get('[data-testid="7-ingredient-name-and-measure"]').contains('spinkling');

    cy.get('[data-testid="instructions"]').contains('Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.');

    cy.get('[data-testid="video"]').should('exist');

    cy.get('[data-testid*="recomendation-card"]').should('exist');
  });

  it('verifica se os elementos existem na tela de detalhes de bebida', () => {
    cy.visit('http://localhost:3000/bebidas/178319', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="recipe-photo"]')
      .should('have.prop', 'tagName')
      .should('eq', 'IMG');

    cy.get('[data-testid="recipe-title"]').contains('Aquamarine');

    cy.get('[data-testid="recipe-category"]').contains('Alcoholic');

    cy.get('[data-testid="0-ingredient-name-and-measure"]').contains('Hpnotiq');
    cy.get('[data-testid="0-ingredient-name-and-measure"]').contains('2 oz');
    cy.get('[data-testid="1-ingredient-name-and-measure"]').contains('Pineapple Juice');
    cy.get('[data-testid="1-ingredient-name-and-measure"]').contains('1 oz');
    cy.get('[data-testid="2-ingredient-name-and-measure"]').contains('Banana Liqueur');
    cy.get('[data-testid="2-ingredient-name-and-measure"]').contains('1 oz');

    cy.get('[data-testid="instructions"]').contains('Shake well in a shaker with ice.\r\nStrain in a martini glass.');

    cy.get('[data-testid*="recomendation-card"]').should('exist');
  });
});

describe('As recomendações para receitas de comida deverão ser bebidas e vice-versa', () => {
  it('verifica se a requisição para a API de bebidas foi realizada', () => {
    cy.visit('http://localhost:3000/comidas/52771', {
      onBeforeLoad(win) {
        cy.spy(win, 'fetch');
      },
    });

    cy.window()
      .its('fetch')
      .should('be.calledWithMatch', 'https://www.thecocktaildb.com/');
  });

  it('verifica se a requisição para a API de comidas foi realizada', () => {
    cy.visit('http://localhost:3000/bebidas/178319', {
      onBeforeLoad(win) {
        cy.spy(win, 'fetch');
      },
    });

    cy.window()
      .its('fetch')
      .should('be.calledWith', 'https://www.themealdb.com/api/json/v1/1/search.php?s=');
  });
});

describe('Deverão ser mostrados 6 cards de recomendação, onde apenas 2 são mostrados e o scroll é horizontal, similar a um `carousel`', () => {
  it('verifica se exitem todas as recomendações na tela de detalhes de uma comida', () => {
    cy.visit('http://localhost:3000/comidas/52771', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid*="recomendation-card"]').should('have.length', 6);

    cy.get('[data-testid="0-recomendation-card"]').should('exist').and('visible');
    cy.get('[data-testid="0-recomendation-title"]').contains('GG');
    cy.get('[data-testid="1-recomendation-card"]').should('exist').and('visible');
    cy.get('[data-testid="1-recomendation-title"]').contains('A1');

    cy.get('[data-testid="2-recomendation-card"]').should('exist');
    cy.get('[data-testid="2-recomendation-title"]').contains('ABC');
    cy.get('[data-testid="3-recomendation-card"]').should('exist').and('not.visible');
    cy.get('[data-testid="3-recomendation-title"]').contains('Kir');
    cy.get('[data-testid="4-recomendation-card"]').should('exist').and('not.visible');
    cy.get('[data-testid="4-recomendation-title"]').contains('747');
    cy.get('[data-testid="5-recomendation-card"]').should('exist').and('not.visible');
    cy.get('[data-testid="5-recomendation-title"]').contains('252');
  });

  it('verifica se exitem todas as recomendações na tela de detalhes de uma bebida', () => {
    cy.visit('http://localhost:3000/bebidas/178319', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid*="recomendation-card"]').should('have.length', 6);

    cy.get('[data-testid="0-recomendation-card"]').should('exist').and('visible');
    cy.get('[data-testid="0-recomendation-title"]').contains('Corba');
    cy.get('[data-testid="1-recomendation-card"]').should('exist').and('visible');
    cy.get('[data-testid="1-recomendation-title"]').contains('Kumpir');

    cy.get('[data-testid="2-recomendation-card"]').should('exist');
    cy.get('[data-testid="2-recomendation-title"]').contains('Dal fry');
    cy.get('[data-testid="3-recomendation-card"]').should('exist').and('not.visible');
    cy.get('[data-testid="3-recomendation-title"]').contains('Poutine');
    cy.get('[data-testid="4-recomendation-card"]').should('exist').and('not.visible');
    cy.get('[data-testid="4-recomendation-title"]').contains('Lasagne');
    cy.get('[data-testid="5-recomendation-card"]').should('exist').and('not.visible');
    cy.get('[data-testid="5-recomendation-title"]').contains('Timbits');
  });
});

describe('Um botão de nome "Iniciar Receita" deve ficar fixo na parte de baixo da tela o tempo todo', () => {
  it('verifica posicionamento do botão na tela de detalhes de comida', () => {
    cy.visit('http://localhost:3000/comidas/52771', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="start-recipe-btn"]')
      .should('have.css', 'position', 'fixed')
      .and('have.css', 'bottom', '0px');
  });

  it('verifica posicionamento do botão na tela de detalhes de bebida', () => {
    cy.visit('http://localhost:3000/bebidas/178319', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="start-recipe-btn"]')
      .should('have.css', 'position', 'fixed')
      .and('have.css', 'bottom', '0px');
  });
});

describe('Caso a receita já tenha sido feita, o botão "Iniciar Receita" deve sumir', () => {
  it('verifica se botão de iniciar receita não é visível na tela de detalhes de uma comida', () => {
    cy.visit('http://localhost:3000/comidas/52771', {
      onBeforeLoad(win) {
        const doneRecipes = [{
          "type": "comida",
          "id": "52771",
          "image": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
          "name": "Spicy Arrabiata Penne",
          "category": "Vegetarian",
          "area": "Italian",
          "doneDate": "22/6/2020",
          "tags": ["Pasta", "Curry"]
        }];
        localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="start-recipe-btn"]').should('not.be.visible');
  });

  it('verifica se botão de iniciar receita não é visível na tela de detalhes de uma bebida', () => {
    cy.visit('http://localhost:3000/bebidas/178319', {
      onBeforeLoad(win) {
        const doneRecipes = [{
          "type": "bebida",
          "id": "178319",
          "image": "https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg",
          "name": "Aquamarine",
          "category": "Cocktail",
          "alcoholicOrNot": "Alcoholic",
          "doneDate": "23/6/2020",
          "tags": null
        }];
        localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="start-recipe-btn"]').should('not.be.visible');
  });
});

describe.only('Caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continuar Receita"', () => {
  it('verifica botão de Continuar Receita na tela de detalhes de uma comida', () => {
    cy.visit('http://localhost:3000/comidas/52771', {
      onBeforeLoad(win) {
        const inProgressRecipes = [{
          52771: []
        }];
        localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="start-recipe-btn"]').contains('Continuar Receita');
  });

  it('verifica botão de Continuar Receita na tela de detalhes de uma bebida', () => {
    cy.visit('http://localhost:3000/bebidas/178319', {
      onBeforeLoad(win) {
        const inProgressRecipes = [{
          178319: []
        }];
        localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="start-recipe-btn"]').contains('Continuar Receita');
  });
});

describe('Quando o botão "Iniciar Receita" for clicado, a rota deve mudar para a tela de receita em processo', () => {
  it('redireciona para tela de receita (de uma comida) em progresso', () => {
    cy.visit('http://localhost:3000/comidas/52771', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="start-recipe-btn"]').click();
    cy.location().should((loc) => expect(loc.pathname).to.eq('/comidas/52771/in-progress'));
  });

  it('redireciona para tela de receita (de uma bebida) em progresso', () => {
    cy.visit('http://localhost:3000/bebidas/178319', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="start-recipe-btn"]').click();
    cy.location().should((loc) => expect(loc.pathname).to.eq('/bebidas/178319/in-progress'));
  });
});

describe('Um botão de compartilhar e um de favoritar a receita devem estar disponíveis', () => {
  it('verifica se os botões estão disponíveis na tela de detalhes de uma comida', () => {
    cy.visit('http://localhost:3000/comidas/52771', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="share-btn"]').should('exist');
    cy.get('[data-testid="favorite-btn"]').should('exist');
  });

  it('verifica se os botões estão disponíveis na tela de detalhes de uma bebida', () => {
    cy.visit('http://localhost:3000/bebidas/178319', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="share-btn"]').should('exist');
    cy.get('[data-testid="favorite-btn"]').should('exist');
  });
});

describe('Ao clicar no botão de compartilhar, o link da receita dentro do app deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer', () => {
  it('verifica a mensagem "Link copiado" e se o link da receita da comida foi copiado para o clipboard', () => {
    cy.visit('http://localhost:3000/comidas/52771', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="share-btn"]').click();
    cy.contains('Link copiado!');
    cy.window().then((win) => {
      cy.wrap(win.navigator.clipboard.readText())
        .should('eq', 'http://localhost:3000/comidas/52771');
    });
  });

  it('verifica a mensagem "Link copiado" e se o link da receita da bebida foi copiado para o clipboard', () => {
    cy.visit('http://localhost:3000/bebidas/178319', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="share-btn"]').click();
    cy.contains('Link copiado!');
    cy.window().then((win) => {
      cy.wrap(win.navigator.clipboard.readText())
        .should('eq', 'http://localhost:3000/bebidas/178319');
    });
  });
});

// describe('O ícone do coração (favorito) deve vir preenchido caso a receita esteja favoritada, e _"despreenchido"_ caso contrário');

// describe('Ao clicar no botão de favoritar, o ícone do coração deve mudar de seu estado atual, caso esteja preenchido deve mudar para _"despreenchido"_ e vice-versa');

describe('As receitas favoritas devem ser salvas em `localStorage` na chave `favoriteRecipes`', () => {
  it('favorita receita de uma comida', () => {
    cy.visit('http://localhost:3000/comidas/52771', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="favorite-btn"]').click().then(() => {
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const expectedFavoriteRecipes = [
        {
          id: 52771,
          type: 'comida',
          area: 'Italian',
          category: 'Vegetarian',
          alcoholicOrNot: '',
          name: 'Spicy Arrabiata Penne',
          image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
        },
      ];

      expect(favoriteRecipes).to.deep.eq(expectedFavoriteRecipes);
      localStorage.clear();
    });
  });

  it('favorita receita de uma bebida', () => {
    cy.visit('http://localhost:3000/bebidas/178319', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });

    cy.get('[data-testid="favorite-btn"]').click().then(() => {
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const expectedFavoriteRecipes = [
        {
          id: 178319,
          type: 'bebida',
          area: '',
          category: 'Cocktail',
          alcoholicOrNot:  'Alcoholic',
          name: 'Aquamarine',
          image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
        },
      ];

      expect(favoriteRecipes).to.deep.eq(expectedFavoriteRecipes);
      localStorage.clear();
    });
  });
});
