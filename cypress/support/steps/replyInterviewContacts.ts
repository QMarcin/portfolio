import { defineStep } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-real-events";
import { ReplyInterviewHelpers } from "./replyInterviewHelper";

const firstName = 'Automation';
const lastName = 'Tester';
const firstNameEdited = 'AutomationEdited';
const lastNameEdited = 'TesterEdited';
const title = 'AutomationSeler';
let replyInterviewHelpers = new ReplyInterviewHelpers();

defineStep("Create new contact", () => {

  const roleName = 'Sales';
  const roles = ['Customers', 'Suppliers'];

  cy.get(".sidebar-item-link-basic[href*='Contacts&action=EditView']").click();
  cy.get("input[id='DetailFormfirst_name-input']").type(firstName);
  cy.get("input[id='DetailFormlast_name-input']").type(lastName);
  cy.get("div[id='DetailFormbusiness_role-input']").click();
  cy.get(".option-cell").contains(roleName).click();

  for (let role of roles) {
    addRoleToCreateContact(role);
  }

  replyInterviewHelpers.saveContact();

});

defineStep("Open created contact", () => {
  cy.get(".sidebar-item-link-basic[href*='module=Contacts&action=index']").should('exist').click();
  replyInterviewHelpers.searchAndPickValue(`${firstName} ${lastName}`);
});

defineStep("Fill out main contact fields", () => {
  cy.get("span[id='DetailForm_edit-label']").should('exist').click();
  cy.get("input[id='DetailFormfirst_name-input']").clear().type(firstNameEdited);
  cy.get("input[id='DetailFormlast_name-input']").clear().type(lastNameEdited);
  cy.get("input[id='DetailFormtitle-input']").should('exist').type(title);
  new ReplyInterviewHelpers().saveContact();
});

defineStep("Verify data containing changed fields", () => {
  cy.get(".summary-main .summary-header h3").contains(`${firstNameEdited} ${lastNameEdited}`).should('be.visible');
  cy.get(".summary-main .summary-subheader h4").contains(title).should('be.visible');
});

function addRoleToCreateContact(role: string) {
  cy.get("div[id='DetailFormcategories-input']").click();
  cy.contains(".option-cell" , role).should('exist').click();
}

