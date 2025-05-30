import { HomePage } from "../pageObjects/HomePage"

export class ApptPage extends HomePage {
    
    static get url() {
        return "/#appointment";
    }

    static get facility() {
        return cy.get( "#combo_facility");
    }
        
    static get chkbxReadmission() {
        return cy.get( "#chk_hospotal_readmission");
    }
        
    static get radioMedicaid() {
        return cy.get( "#radio_program_medicaid");
    }

    static get visitCalendar() {
        return cy.get("[data-provide='datepicker']");
    }

    static get visitCalendarPopUp() {
        return cy.get("[class='datepicker-days']");
    }

    static get comment() {
        return cy.get("#txt_comment");
    }
    
    static get btnBookAppt() {
        return cy.get("#btn-book-appointment");
    }

    static get burger() {
        return cy.get("#menu-toggle");
    }

    static get sidebar() {
        return cy.get("#sidebar-wrapper");
    }

    static get history() {
        return cy.get("[href='history.php#history']");
    }

}