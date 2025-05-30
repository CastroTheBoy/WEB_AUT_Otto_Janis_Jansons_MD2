import { HomePage } from "../pageObjects/HomePage"

export class ApptSummaryPage extends HomePage {
    
    static get url() {
        return "/appointment.php#summary";
    }

    static get facility() {
        return cy.get( "#facility");
    }
        
    static get hospital_readmission() {
        return cy.get( "#hospital_readmission");
    }

    static get program() {
        return cy.get( "#program");
    }

    static get visit_date() {
        return cy.get( "#visit_date");
    }

    static get comment() {
        return cy.get( "#comment");
    }
}