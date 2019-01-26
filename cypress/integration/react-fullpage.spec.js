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
      cy.wait(WAIT);
    });
  });

  describe('Scroll behavior', () => {
    it('Auto scrolls on window location change', () => {
      cy.visit(`${host}#secondPage`);
      cy.wait(WAIT);
      cy.url().should('eq', `${host}#secondPage`);
    });
  });
});
