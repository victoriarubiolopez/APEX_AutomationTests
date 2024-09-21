export class CommonElements {
    static get textboxes(){
        return{
            get TypeSearchWord(){
                return cy.get('twotabsearchtextbox')
            }
        }
    }
    static get buttons(){
        return{
            get ClickSearchButton(){
                return cy.get('.nav-input#nav-search-submit-button')
            }
        }
    }

}
    