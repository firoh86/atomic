describe("renders the home page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get("#App").should("exist");
  });
  it("writte on textAreas", () => {
    cy.get(".input__primary").type("firoh {enter}");
    cy.get(".input__textarea").type("Estoy escribiendo en un textarea {enter}");
  });
  it("Select a defined value", () => {
    cy.get(".input__select").select("Value 2");
  });
});
