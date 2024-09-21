export class CommonElements {
    static get textboxes(){
        return{
            get SearchWord(){
                return cy.get("#twotabsearchtextbox")
            }
        }
    }
    static get buttons(){
        return{
            get SearchButton(){
                return cy.get('.nav-input#nav-search-submit-button')
            }
        }
    }

}
    