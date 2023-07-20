describe('LifetimeDetails Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/lifetime-details'); // Replace with the correct URL of your LifetimeDetails page
  });

  it('should display the page title', () => {
    cy.contains('Banorte Lifetime')
      .should('be.visible');
  });

  it('should display the card image', () => {
    cy.get('img[src="/tarjetaBanorte.png"]')
      .should('be.visible');
  });

  it('should display the card balance', () => {
    cy.contains('**** 5839')
      .should('be.visible');

    cy.contains('$ 2,500.00')
      .should('be.visible');
  });
});
