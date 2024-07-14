import { defineStep } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-real-events";
import { ReplyInterviewHelpers } from "./replyInterviewHelper";


let replyInterviewHelpers = new ReplyInterviewHelpers();

defineStep("Find {string} report on the right side Last Viewed section", (reportName: string) => {

  cy.get(`div[id='app-history'] a span`).contains(reportName).prev('div').click();
});

defineStep("User click Run Report", () => {

  cy.get(`button[id*='applyButton']`).click();
});

defineStep("User Verify report results are returned", () => {

  cy.get(`table[id^='listView-'] tbody tr`).should('be.visible');
});

defineStep("Search for the report {string}", (reportName: string) => {
  replyInterviewHelpers.searchAndPickValue(reportName);
  cy.get(`.search-title`).contains(reportName).should('be.visible');
});
