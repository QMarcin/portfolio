import { defineStep } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-real-events";

after(() => {

  console.log('Test Finished');

})

afterEach(() => {

  console.log('All Tests Finished');

})

defineStep("User is on Reply interview demo page", () => {
  cy.visit("https://demo.1crmcloud.com/");
});

defineStep("User login", () => {
  const user = 'admin';
  const pass = 'admin';

  cy.get("input[id='login_user']").should('exist').type(user);
  cy.get("input[id='login_pass']").should('exist').type(pass);
  cy.get("button[id='login_button']").should('exist').click();
  cy.get("span[id='main-title-module']").should('exist');

});


defineStep("Navigate to {string} -> {string}", (masterNavigation: string, childMenuOption: string) => {

  cy.get(`.nav-wrap a[title='${masterNavigation}']`).realHover();
  cy.get(`.menu-tab-sub-list[href*='index.php?module=${childMenuOption}&action=index']`).should('be.visible').realHover().click({ force: true });

});

defineStep("Navigate to {string}", (masterNavigation: string) => {

  cy.get(`.nav-wrap a[title='${masterNavigation}']`).click();

});

export class ReplyInterviewHelpers {

searchAndPickValue(searchText: string) {
  cy.get("input[id='filter_text']").should('exist').type(searchText).type('{enter}');
  cy.get(".listViewNameLink[href*='&action=DetailView&record']").contains(searchText).click();
}

saveContact(){
  cy.get("span[id='DetailForm_save-label']").click();
}


}