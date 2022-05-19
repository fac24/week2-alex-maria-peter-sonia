// beforeEach(() => {
//   cy.task("resetDb");
// });

  it("can create a new user and display name and age", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input[name='username']").type("icefairy");
    cy.get("input[name='age']").type("45");
    // cy.get("input[name='base_flavour']").type("bubblegum");
    // cy.get("input[name='fandom']").select("4"); will change that
    // cy.get("input[name='topping']").select('Chocolate flake') will cange that
    cy.get("textarea[name='comment']").type("I hate pringles.");
    cy.get("button[type='submit']").click();
    cy.visit("http://localhost:3000/show-posts");
    cy.contains("icefairy");
    cy.contains("45");
  });
