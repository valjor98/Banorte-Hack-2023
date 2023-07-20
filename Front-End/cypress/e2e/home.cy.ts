describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('displays the "Mis Cuentas" heading', () => {
    cy.contains('Mis Cuentas').should('be.visible');
  });

  it('renders the "Nómina Banorte" account', () => {
    cy.get('img[src="./tarjetaBanorte.png"]').should('be.visible');

  });

  it('navigates to "/generations-1" when clicking on the "BANORTE GENERATIONS" link', () => {
    cy.contains('BANORTE GENERATIONS').click();
    // Verify that the URL changes to "/generations-1"
    cy.url().should('include', '/generations-1');
  });
});
