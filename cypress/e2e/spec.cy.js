import { ApptPage } from "../pageObjects/ApptPage";
import { ApptSummaryPage } from "../pageObjects/ApptSummaryPage";
import { HistoryPage } from "../pageObjects/HistoryPage";
import { HomePage } from "../pageObjects/HomePage"
import { LoginPage } from "../pageObjects/LoginPage"

describe('MD 1', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('Scen 1 - Make Appt', () => {
    HomePage.apptButton.click();
    
    LoginPage.demoUsername.invoke('val').then((val) => {LoginPage.userNameInput.type(val);})
    LoginPage.demoPassw.invoke('val').then((val) => {LoginPage.passwInput.type(val);})
    LoginPage.loginBtn.click();
    
    ApptPage.facility.select('Seoul CURA Healthcare Center');
    ApptPage.chkbxReadmission.check();
    ApptPage.radioMedicaid.click();
    ApptPage.visitCalendar.click();
    // this will fail in Feb
    ApptPage.visitCalendarPopUp.get("[class='day']").contains('30').click();
    ApptPage.comment.type('CURA Healthcare Service');
    ApptPage.btnBookAppt.click();

    ApptSummaryPage.facility.should('have.text', 'Seoul CURA Healthcare Center');
    ApptSummaryPage.hospital_readmission.should('have.text', 'Yes');
    ApptSummaryPage.program.should('have.text', 'Medicaid');
    ApptSummaryPage.visit_date.should('contain.text', '30');
    ApptSummaryPage.comment.should('have.text', 'CURA Healthcare Service');
  })

  it('Scen 1 - Appt hist', () => {
    HomePage.apptButton.click();
    
    LoginPage.demoUsername.invoke('val').then((val) => {LoginPage.userNameInput.type(val);})
    LoginPage.demoPassw.invoke('val').then((val) => {LoginPage.passwInput.type(val);})
    LoginPage.loginBtn.click();
    
    ApptPage.burger.click();
    ApptPage.sidebar.should("have.class", "active");
    ApptPage.history.click();

    // Bad, I know
    HistoryPage.history.get("P").contains("No appointment.").should("have.text", "No appointment.");

  })
})