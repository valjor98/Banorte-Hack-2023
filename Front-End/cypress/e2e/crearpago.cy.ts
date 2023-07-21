describe("CrearPago", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/crear-pago"); // Assuming the component is rendered at "/crear-pago" route
  });

  it("allows selecting personas and grupos", () => {
    // Type in the search input
    cy.get("input[id='input-with-sx']").type("Jorge");

  });

  it("creates a payment with details", () => {
    // Continue to step 2
    cy.contains("Continuar").click();

    // Type an asunto
    cy.get("input[id='input-with-sx']").type("Payment for dinner");

  });
});
