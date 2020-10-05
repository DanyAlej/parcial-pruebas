function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

describe('Login Tests', () => {
  it('logins correctly', () => {
    cy.visit('https://todoist.com/')
    cy.get('._3XsmI > :nth-child(1) > ._2q_cf').click();

    cy.get('#email').type('danyalej@gmail.com').should('have.value', 'danyalej@gmail.com');
    cy.get('#password').type('dany12345678');

    cy.get('.submit_btn').click();

    cy.wait(5000);
  });
  it('visits habitica and survives monkeys', function() {
    randomEvent(1000);
  })
});


function randomEvent(monkeysLeft) {
  if(monkeysLeft > 0) {
    var number = getRandomInt(0, 1);
    switch(number) {
      case 0:
        cy.get('a').then($links => {
          var randomLink = $links.get(getRandomInt(0, $links.length));
          if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({force: true});
            monkeysLeft = monkeysLeft - 1;
          }
          randomEvent(monkeysLeft);
        });
      break;
      case 1:
        cy.get('button').then($buttons => {
          var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
          if(!Cypress.dom.isHidden(randomButton)) {
            cy.wrap(randomButton).click();
            monkeysLeft = monkeysLeft - 1;
          }
          randomEvent(monkeysLeft)
        });
      break;
    }
  }
}
