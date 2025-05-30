import { HomePage } from "../pageObjects/HomePage"

export class HistoryPage extends HomePage {
    
    static get url() {
        return "/history.php#history";
    }

    static get history() {
        return cy.get( "#history");
    }

}