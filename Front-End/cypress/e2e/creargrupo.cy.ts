describe("CrearGrupo", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/crear-grupo"); // Assuming the component is rendered at "/crear-grupo" route
  });

  it("displays personas and allows selection", () => {
    // Type in the search input
    cy.get("input[id='input-with-sx']").type("Jorge");


    // Check if checkboxes are clickable and toggled
    cy.get("input[type='checkbox']").eq(0).should("not.be.checked").click();
    cy.get("input[type='checkbox']").eq(0).should("be.checked");

    cy.get("input[type='checkbox']").eq(1).should("not.be.checked").click();
    cy.get("input[type='checkbox']").eq(1).should("be.checked");
  });

  it("creates a group with a name", () => {
    // Type a group name
    cy.get("input[id='input-with-sx']").type("My Group");

    // Click the "Continuar" button
    cy.contains("Continuar").click();

    // Check if the dialog is open
    cy.get("div[role='dialog']").should("be.visible");

    // Click the save button
    cy.contains("Guardar").click();

    // Check if the group is saved and redirected to /comparte
    cy.url().should("include", "/comparte");
  });
});
