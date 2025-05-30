import { HomePage } from "../pageObjects/HomePage"

export class LoginPage extends HomePage {
    
    static get url() {
        return "/profile.php";
    }

    static get demoUsername() {
        return cy.get( "[aria-describedby='demo_username_label']");
    }
    
    static get demoPassw() {
        return cy.get( "[aria-describedby='demo_password_label']");
    }

    static get userNameInput() {
        return cy.get("#txt-username");
    }
    
    static get passwInput() {
        return cy.get("#txt-password");
    }
    
    static get loginBtn() {
        return cy.get("#btn-login");
    }

}