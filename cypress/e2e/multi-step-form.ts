/// <reference types="cypress" />

describe("checking if all the components are present.", () => {
  it.only("should validate form values ", () => {
    cy.visit("/");
    cy.contains("Personal Info");
    cy.get('input[placeholder="e.g. Stephen King"]').type("Rackel rodrigues", {
      delay: 200,
    });
    cy.get('input[placeholder="e.g stephenking@loren.com"]').type(
      "rackelrodrigues200@gmail.com",
      {
        delay: 200,
      }
    );

    cy.get('input[placeholder="e.g. +1 234 567 890"]').type("83991325466", {
      delay: 200,
    });

    cy.contains("Next step").click();
  });

  it("should show an error message for invalid name", () => {
    cy.visit("/");
    cy.contains("Personal Info");
    cy.get('input[placeholder="e.g. Stephen King"]').type("Rackel rodrigues", {
      delay: 200,
    });
    cy.get('input[placeholder="e.g. Stephen King"]').clear();

    cy.get('input[placeholder="e.g stephenking@loren.com"]').type(
      "rackelrodrigues200@gmail.com",
      {
        delay: 200,
      }
    );
    cy.get('input[placeholder="e.g stephenking@loren.com"]').clear();

    cy.get('input[placeholder="e.g. +1 234 567 890"]').type("83994687788", {
      delay: 200,
    });
    cy.get('input[placeholder="e.g. +1 234 567 890"]').clear();

    cy.contains("Next step").click();
  });
});
