import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("the user is on google search page", () => {
  cy.visit("https://www.google.com");
});

Then("the user types Test Cypress in javaScript", () => {
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );
});