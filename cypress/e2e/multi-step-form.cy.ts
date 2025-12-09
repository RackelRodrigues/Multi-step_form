/// <reference types="cypress" />

describe("Multi-step form flow, field validation, and data persistence", () => {
  it.only("should validate the entire multi-step form flow and persist all user selections", () => {
    cy.visit("/");
    cy.contains("Personal Info").should("exist");
    cy.get('input[placeholder="e.g. Stephen King"]').type("Rackel rodrigues", {
      delay: 200,
    });
    cy.get('input[placeholder="e.g stephenking@loren.com"]').type(
      "rackeltestelala@gmail.com",
      {
        delay: 200,
      }
    );

    cy.get('input[placeholder="e.g. +1 234 567 890"]').type("83123456789", {
      delay: 200,
    });

    cy.wait(5000);
    cy.contains("Next step").click();

    //Select Plan screen
    cy.contains("Select your plan").should("exist");

    //verify the button is disabled
    cy.contains("Next step").should("be.disabled");

    cy.wait(5000);
    cy.get('div[class*="planners"]').contains("Arcade").click();

    cy.wait(5000);
    cy.get('div[class*="planners"]').contains("Advance").click();

    cy.wait(5000);
    cy.get('div[class*="planners"]').contains("Pro").click();
    cy.wait(5000);
    cy.get('label[class*="toggleSwitchWrapper"]').click();

    cy.wait(5000);
    cy.contains("Next step").click();
    //Navigate to the next screen

    cy.wait(5000);
    cy.contains("Go Back").click();
    //navigate to the back screen

    cy.wait(5000);
    cy.contains("Next step").click();
    //navigate to the next screen

    //Pick Add-ons Screen
    cy.contains("Pick Add-ons").should("exist");

    cy.contains("Online service", { timeout: 5000 }).click();
    cy.contains("Larger storage", { timeout: 5000 }).click();
    cy.contains("Customizable Profile", { timeout: 5000 }).click();

    cy.wait(5000);
    cy.contains("Next step").click();

    //Sumary screen
    cy.wait(5000);
    cy.contains("yearly").should("be.visible");

    cy.contains("$200/yr").should("exist");

    cy.contains("Online service").should("be.visible");
    cy.contains("Larger storage").should("be.visible");
    cy.contains("Customizable Profile").should("be.visible");

    cy.contains("Total (per year)").should("be.visible");

    // cy.wait(5000);
    // cy.contains("Confirm").click();
    // After clicking, the user should be redirected to the Thank You screen

    cy.contains("a", "Change").click();
    //When clicking "Change", it should return to the Select Plan screen

    // Test to verify that all selected values persist correctly across steps
    //verify tem choice the pro plan
    cy.wait(5000);
    cy.get('div[class*="planners"]')
      .find('[class*="isActive"]')
      .should("exist");

    //Check if the yearly plan is active based on the previous click
    cy.wait(5000);
    cy.contains("Yearly").should("have.css", "color", "rgb(2, 41, 90)");

    cy.wait(5000);
    cy.contains("Next step").click();

    //verify tem add-ons select
    cy.wait(5000);
    cy.get('input[type="checkbox"]').each(($el) => {
      cy.wrap($el).should("be.checked");
    });

    //Uncheck the Large Storage add-on
    cy.contains("Larger storage", { timeout: 5000 }).click();

    cy.wait(5000);
    cy.contains("Next step").click();

    cy.wait(5000);
    cy.contains("Larger storage").should("not.exist");

    cy.wait(5000);
    cy.contains("$180/yr").should("exist");

    cy.wait(5000);
    cy.contains("Confirm").click();

    //Thank You screen
    cy.contains("Thank You!").should("exist");
    cy.contains("Rackel rodrigues").should("be.visible");
  });

  it.only("should display the site correctly on a mobile screen", () => {
    cy.viewport(375, 812);
    cy.visit("/");
    cy.contains("Personal Info").should("exist");
    cy.get('input[placeholder="e.g. Stephen King"]').type("Rackel rodrigues", {
      delay: 200,
    });
    cy.get('input[placeholder="e.g stephenking@loren.com"]').type(
      "rackeltestelala@gmail.com",
      {
        delay: 200,
      }
    );

    cy.get('input[placeholder="e.g. +1 234 567 890"]').type("83123456789", {
      delay: 200,
    });

    cy.wait(5000);
    cy.get('[class*="containerButtonMobile"]').contains("Next step").click();

    //Select Plan screen
    cy.contains("Select your plan").should("exist");

    //verify the button is disabled
    cy.contains("Next step").should("be.disabled");

    cy.wait(5000);
    cy.get('div[class*="planners"]').contains("Arcade").click();

    cy.wait(5000);
    cy.get('div[class*="planners"]').contains("Advance").click();

    cy.wait(5000);
    cy.get('div[class*="planners"]').contains("Pro").should("be.visible");

    cy.wait(5000);
    cy.get('label[class*="toggleSwitchWrapper"]').click();

    cy.wait(5000);
    cy.get('[class*="containerButtonsMobile"]').contains("Next step").click();
    //Navigate to the next screen

    cy.wait(5000);

    cy.get('[class*="containerButtonsMobile"]').contains("Go Back").click();
    //navigate to the back screen

    cy.wait(5000);

    cy.get('[class*="containerButtonsMobile"]').contains("Next step").click();
    //navigate to the next screen

    //Pick Add-ons Screen
    cy.contains("Pick Add-ons").should("exist");

    cy.contains("Online service", { timeout: 5000 }).click();
    cy.contains("Larger storage", { timeout: 5000 }).click();
    cy.contains("Customizable Profile", { timeout: 5000 }).click();

    cy.wait(5000);
    cy.get('[class*="containerButtonsMobile"]').contains("Next step").click();

    //Sumary screen
    cy.wait(5000);
    cy.contains("yearly").should("be.visible");

    cy.contains("$170/yr").should("exist");

    cy.contains("Online service").should("be.visible");
    cy.contains("Larger storage").should("be.visible");
    cy.contains("Customizable Profile").should("be.visible");

    cy.contains("Total (per year)").should("be.visible");

    cy.wait(5000);
    // cy.contains("Confirm").click();
    // After clicking, the user should be redirected to the Thank You screen

    cy.contains("a", "Change").click();
    // //When clicking "Change", it should return to the Select Plan screen

    // Test to verify that all selected values persist correctly across steps
    //verify tem choice the pro plan
    cy.wait(5000);
    cy.get('div[class*="planners"]')
      .find('[class*="isActive"]')
      .should("exist");

    //Check if the yearly plan is active based on the previous click
    cy.wait(5000);
    cy.contains("Yearly").should("have.css", "color", "rgb(2, 41, 90)");

    cy.wait(5000);
    cy.get('[class*="containerButtonsMobile"]').contains("Next step").click();

    // //verify tem add-ons select
    cy.wait(5000);
    cy.get('input[type="checkbox"]').each(($el) => {
      cy.wrap($el).should("be.checked");
    });

    //Uncheck the Large Storage add-on
    cy.contains("Customizable Profile", { timeout: 5000 }).click();

    cy.wait(5000);
    cy.get('[class*="containerButtonsMobile"]').contains("Next step").click();

    cy.wait(5000);
    cy.contains("Customizable Profile").should("not.exist");

    cy.wait(5000);
    cy.contains("$150/yr").should("exist");

    cy.wait(5000);
    cy.get('[class*="containerButtonsMobile"]').contains("Confirm").click();

    //Thank You screen
    cy.contains("Thank You!").should("exist");
    cy.contains("Rackel rodrigues").should("be.visible");
  });

  it("Validate all fields to ensure they show the correct error messages.", () => {
    cy.visit("/");

    cy.contains("Personal Info");
    cy.get('input[placeholder="e.g. Stephen King"]').type("Rackel rodrigues", {
      delay: 200,
    });
    cy.get('input[placeholder="e.g. Stephen King"]').clear();

    cy.get('input[placeholder="e.g stephenking@loren.com"]').type(
      "rackeltestlala@gmail.com",
      {
        delay: 200,
      }
    );
    cy.get('input[placeholder="e.g stephenking@loren.com"]').clear();

    cy.get('input[placeholder="e.g. +1 234 567 890"]').type("83123456789", {
      delay: 200,
    });
    cy.get('input[placeholder="e.g. +1 234 567 890"]').clear();

    cy.contains("Next step").click();
    cy.get('[class*="info"] span:contains("This field is required")').should(
      "have.length",
      3
    );
  });

  it("Validate error handling for the name input only", () => {
    cy.visit("/");
    cy.contains("Personal Info");
    cy.get('input[placeholder="e.g. Stephen King"]').type("Rackel rodrigues", {
      delay: 200,
    });
    cy.get('input[placeholder="e.g. Stephen King"]').clear();

    cy.get('input[placeholder="e.g stephenking@loren.com"]').type(
      "rackeltestlala@gmail.com",
      {
        delay: 200,
      }
    );

    cy.get('input[placeholder="e.g. +1 234 567 890"]').type("83123456789", {
      delay: 200,
    });

    cy.contains("Next step").click();

    cy.contains("This field is required").should("exist");
  });

  it("Validate error handling for the email input only", () => {
    cy.visit("/");
    cy.contains("Personal Info");

    cy.get('input[placeholder="e.g. Stephen King"]').type("Rackel rodrigues", {
      delay: 200,
    });

    cy.get('input[placeholder="e.g stephenking@loren.com"]').type(
      "rackeltestlala@gmail.com",
      {
        delay: 200,
      }
    );
    cy.get('input[placeholder="e.g stephenking@loren.com"]').clear();

    cy.get('input[placeholder="e.g. +1 234 567 890"]').type("83123456789", {
      delay: 200,
    });

    cy.contains("Next step").click();

    cy.contains("This field is required").should("exist");
  });
  it("Validate error handling for the phone input only", () => {
    cy.visit("/");
    cy.contains("Personal Info");

    cy.get('input[placeholder="e.g. Stephen King"]').type("Rackel rodrigues", {
      delay: 200,
    });

    cy.get('input[placeholder="e.g stephenking@loren.com"]').type(
      "rackeltestlala@gmail.com",
      {
        delay: 200,
      }
    );

    cy.get('input[placeholder="e.g. +1 234 567 890"]').type("83123456789", {
      delay: 200,
    });

    cy.get('input[placeholder="e.g. +1 234 567 890"]').clear();

    cy.contains("Next step").click();

    cy.contains("This field is required").should("exist");
  });
});
