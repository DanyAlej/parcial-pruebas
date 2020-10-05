function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

describe('Login Tests', () => {
  it('visits habitica and survives monkeys', function() {
    login();
    randomEvent(10);
  })
});

function login() {
    cy.visit('https://habitica.com/static/home')
    cy.get('.login-button').click();

    cy.wait(500);

    cy.get('#usernameInput').type('da.benavides@uniandes.edu.co').should('have.value', 'da.benavides@uniandes.edu.co');
    cy.get('#passwordInput').type('xedjes-jAnxid-xetji0');

    cy.get('.btn-info[type="submit"]').click();
      cy.wait(500);
}

function randomEvent(monkeysLeft) {
  if(monkeysLeft > 0) {
    var number = getRandomInt(0, 3);
    switch(number) {
      case 0:
        cy.visit('https://habitica.com');
        cy.wait(1000);
        cy.get('a').then($links => {
          var randomLink = $links.get(getRandomInt(0, $links.length));
          if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({force: true});
            monkeysLeft = monkeysLeft - 1;
          }
          cy.wait(500);
          randomEvent(monkeysLeft);
        });
      break;
      case 1:
        cy.visit('https://habitica.com');
        cy.wait(1000);
        cy.wait(1000);
        cy.get('input').then($input => {
          var randomInput = $input.get(getRandomInt(0, $input.length));
          if(!Cypress.dom.isHidden(randomInput)) {
            cy.wrap(randomInput).type('meditation', {force: true});
            monkeysLeft = monkeysLeft - 1;
          }
          cy.wait(500);
          randomEvent(monkeysLeft)
        });
      break;
      case 2:
        cy.visit('https://habitica.com');
        cy.wait(1000);
        cy.get('select').then($combobox => {
          var randomCombobox = $combobox.get(getRandomInt(0, $combobox.length));
          if(!Cypress.dom.isHidden(randomCombobox)) {
            cy.wrap(randomCombobox).get('option').then($options => {
              var randomOption = $options.get(getRandomInt(0, $options.length));
              cy.wrap(randomCombobox).select(randomOption.value, {force: true});
            });
            monkeysLeft = monkeysLeft - 1;
          }
          cy.wait(500);
          randomEvent(monkeysLeft)
        });
      break;
      case 3:
        cy.visit('https://habitica.com');
        cy.wait(1000);
        cy.get('button').then($buttons => {
          var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
          if(!Cypress.dom.isHidden(randomButton)) {
            cy.wrap(randomButton).click();
            monkeysLeft = monkeysLeft - 1;
          }
          cy.wait(500);
          randomEvent(monkeysLeft)
        });
      break;
    }
  }
}
