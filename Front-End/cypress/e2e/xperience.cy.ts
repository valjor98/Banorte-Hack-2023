describe('XperienceHome Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/xperience'); // Replace with the correct URL of your XperienceHome page
  });

  it('should display the user details section', () => {
    cy.contains('Jorge Valdivia')
      .should('be.visible');

    cy.contains('Retos completados: 15')
      .should('be.visible');

    cy.contains('1250 XP')
      .should('be.visible');
  });

  it('should display the categories section', () => {
    cy.contains('Categorías')
      .should('be.visible');

    cy.contains('Explora')
      .should('be.visible');

    cy.contains('Aprende')
      .should('be.visible');

    cy.contains('Completa')
      .should('be.visible');

    cy.contains('Ahorra')
      .should('be.visible');
  });

  it('should display the progress section', () => {
    cy.contains('Progreso')
      .should('be.visible');

    cy.contains('Realiza tres transacciones en el apartado “Pago de Servicios”')
      .should('be.visible');

    cy.contains('Gana:')
      .should('be.visible');

    cy.contains('50XP')
      .should('be.visible');

    cy.contains('1/3')
      .should('be.visible');

    cy.get('img[src="/progreso1.png"]')
      .should('be.visible');
  });

});
