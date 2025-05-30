export class HomePage {

    static visit() {
        return cy.visit("https://katalon-demo-cura.herokuapp.com/");
    }

    static get url() {
        return "/#/";
    }

    static get apptButton() {
        return cy.get("#btn-make-appointment");
    }

}