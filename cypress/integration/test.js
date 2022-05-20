beforeEach(() => {
  cy.task("resetDb");
});

describe('can create an ice cream post', () => {
  it('create a new ice cream post', () => {
    cy.visit("/");
    cy.get("input[name='username']").type("icefairy");
    cy.get("input[name='age']").type("45");
    cy.get("input[name='base_flavour']").type("bubblegum");
    cy.get("input[name='fandom']").invoke('val', 4).trigger('change');
    cy.get("select[name='topping']").select('Chocolate flake');
    cy.get("textarea[name='comment']").type("I hate pringles.");
    cy.get("button[type='submit']").click();
    cy.get(".post-container").should('have.length', 5);
    cy.contains("icefairy");
    cy.contains("I hate pringles.");
  });
});

describe("reset DB", () => {
  it("db has been reset", () => {
    cy.visit("http://localhost:3000/show-posts");
    cy.get(".post-container").should('have.length', 4);
  });
});

after(() => {
  cy.task("resetDb");
});
