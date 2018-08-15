// NOTE: as of now, server must be manually run

const host = 'http://localhost:8080/';
const WAIT = 1000;

describe('react-fullage.js', () => {

  describe('Render', () => {
    it('Renders the Example', () => {
      cy.visit(host);
    });

    it('Displays the proper structure', () => {
      cy.get('#fullpage');
      cy.get('#fullpage-wrapper');
      cy.wait(WAIT);
    });
  });

  describe('Scroll behavior', () => {
    it('Auto scrolls on window location change', () => {
      cy.visit(`${host}#secondPage`);
      cy.wait(WAIT);
      cy.get('.active > .fp-tableCell > h3').contains('Slide 2.1');
      cy.url().should('eq', `${host}#secondPage`);
    });

    it('Scrolls Vertically on click', () => {
      cy.visit(`${host}#firstPage`);
      cy.wait(WAIT);
      cy.get('button').click();
      cy.get('.active > .fp-tableCell > h3').contains('Slide 2.1');
      cy.url().should('eq', `${host}#secondPage`);
    });

    it('Scrolls horizontally on click', () => {
      cy.get('.fp-next').click();
      cy.wait(WAIT);
      cy.get('.active > .fp-tableCell > h3').contains('Slide 2.2');
      cy.url().should('eq', `${host}#secondPage/1`);

      cy.get('.fp-next').click();
      cy.wait(WAIT);
      cy.get('.active > .fp-tableCell > h3').contains('Slide 2.3');
      cy.url().should('eq', `${host}#secondPage/2`);
    });
  });
});
